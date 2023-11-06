import React, { useRef, useState } from 'react'
import { Canvas } from './Canvas';
import LogicGame from './LogicGame';
import Player from './Player';

const Table = (): React.JSX.Element => {

    const rand = (n: number): number => Math.floor(Math.random() * n)




    class player extends Player {

        action = (ctx: any,): void => {
            ctx.fillStyle = this.color
            ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)
            this.position.x += this.moveDirection.x
            this.position.y += this.moveDirection.y
        }
    }


    const { action: p1 } = new player({ color: 'rgb(200,50,50)' })
    const { action: p2 } = new player({
        color: 'rgb(50,200,100)',
        controller: {
            up: 'ArrowUp',
            down: 'ArrowDown',
            left: 'ArrowLeft',
            right: 'ArrowRight',
            stop: '0',
        }
    })

    const game = [p1, p2]

    const canvasRef = useRef(null);
    const [intervalId, setIntervalId]: [number | undefined, Function] = useState()
    const { start, stop } = LogicGame({ canvasRef, intervalId, setIntervalId, game })


    return (
        <div className='flex flex-col items-center justify-center text-white'>
            <Canvas
                canvasRef={canvasRef}
            />
            {canvasRef && <>
                <button onClick={() => start()}>Start</button>
                <button onClick={() => stop()}>Finish</button>
            </>}
        </div>
    )
}

export default Table