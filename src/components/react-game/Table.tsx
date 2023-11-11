import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from './Canvas.tsx';
import LogicGame from './LogicGame.ts';
import Player from './Player.ts';
import { Map2 } from './Map.ts';
import { useToggle } from '../../Hooks/useToggle.ts';

const Table = (): React.JSX.Element => {

    //? PLAYER
    class player extends Player {
        action = (ctx: any,): void => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)
            this.position.x += this.moveDirection.x
            this.position.y += this.moveDirection.y
        }
    }
    // const { action: p1 } = new player({ color: 'rgb(200,50,50)' })
    const p2 = new player({
        color: 'rgb(50,200,100)',
        controller: {
            up: 'ArrowUp',
            down: 'ArrowDown',
            left: 'ArrowLeft',
            right: 'ArrowRight',
            stop: '0',
        }
    })

    // console.log('***');
    //? MAPA
    const size = 10, l = 24;
    const map2 = new Map2(0, { x: size, y: size }, { x: l, y: l })
    // console.log(map2);

    const game = [map2.draw, p2.action]

    const canvasRef = useRef(null);
    const [intervalId, setIntervalId]: [number | undefined, Function] = useState()
    const { start, stop } = LogicGame({ canvasRef, intervalId, setIntervalId, game })

    //? TOGGLE
    const { toggle, toggleOff, toggleOn } = useToggle(true)

    useEffect(() => {
        return stop()
    }, [])

    return (
        <div className='flex flex-col items-center justify-center text-white'>
            <Canvas
                canvasRef={canvasRef}
            />
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
        </div>
    )
}

export default Table