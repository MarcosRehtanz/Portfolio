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
    const p1 = new Player({
        position: { x: 220, y: 220 }, color: 'rgb(200,50,50)',
        controller: {
            Up: 'ArrowUp',
            Down: 'ArrowDown',
            Left: 'ArrowLeft',
            Right: 'ArrowRight',
            stop: '0',
            }
        })
    const p2 = new Player({
        color: 'rgb(50,200,100)'
    })

    p2.map = map2.map
    p2.list = map2.list
    p1.map = map2.map
    p1.list = map2.list

    return { map2, players: [p1.action, p2.action] }
}

const Table = (): React.JSX.Element => {



    const [{ map2, players }, setState] = useState(initial())

    const game = [map2.draw, ...players]

    const contain = useRef(null)
    const canvasRef = useRef(null);
    const [intervalId, setIntervalId]: [number | undefined, Function] = useState()
    const { start, stop } = LogicGame({ canvasRef, intervalId, setIntervalId, game })

    //? TOGGLE
    const { toggle, toggleOff, toggleOn } = useToggle(true)

    useEffect(() => {
        return stop()
    }, [])


    return (
        <div ref={contain} className='flex flex-col items-center justify-center text-white'>
            {canvasRef && toggle
                ? <button onClick={() => {
                    start()
                    toggleOff()
                    setState(initial())
                }}>Start</button>
                : <button onClick={() => {
                    stop()
                    toggleOn()
                }}>Finish</button>
            }
            {!toggle && <div>
                <button onClick={() => contain?.current?.requestFullscreen?.()} >Full</button>
                <button onClick={() => document?.exitFullscreen?.()} >Mid</button>
                <Canvas
                    canvasRef={canvasRef}
                />
            </div>
            }
        </div>
    )
}

export default Table