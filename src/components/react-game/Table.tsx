import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Canvas } from './Canvas.tsx';
import LogicGame from './LogicGame.ts';
import PlayerModel from './PlayerModel.ts';
import { Map2 } from './Map.ts';
import { useToggle } from '../../Hooks/useToggle.ts';
import Player from './Player.ts';

const initial = () => {

    // console.log('***');
    //? MAPA
    const l = 12, size = 240 / l;
    const map2 = new Map2({
        length: 0,
        size: { x: 20, y: 20 }
    })

    //? PLAYER
    // const { action: p1 } = new player({ color: 'rgb(200,50,50)' })
    const p2 = new Player({
        color: 'rgb(50,200,100)',
        // controller: {
        //     up: 'ArrowUp',
        //     down: 'ArrowDown',
        //     left: 'ArrowLeft',
        //     right: 'ArrowRight',
        //     stop: '0',
        // }
    })

    p2.map = map2.map
    p2.list = map2.list

    return { map2, p2 }
}

const Table = (): React.JSX.Element => {



    const [{ map2, p2 }] = useState(initial())

    const game = [map2.draw, p2.action]

    const canvasRef = useRef(null);
    const [intervalId, setIntervalId]: [number | undefined, Function] = useState()
    const { start, stop } = LogicGame({ canvasRef, intervalId, setIntervalId, game })

    //? TOGGLE
    const { toggle, toggleOff, toggleOn } = useToggle(true)

    useEffect(() => {
        return stop()
    }, [])
    // console.log(canvasRef);


    return (
        <div className='flex flex-col items-center justify-center text-white'>
            {canvasRef && toggle
                ? <button onClick={() => {
                    start()
                    toggleOff()
                }}>Start</button>
                : <button onClick={() => {
                    stop()
                    toggleOn()
                }}>Finish</button>
            }
            {!toggle && <Canvas
                canvasRef={canvasRef}
            />
            }
        </div>
    )
}

export default Table