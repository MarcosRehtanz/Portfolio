import React, { useRef, useState } from 'react'
import { Canvas } from './Canvas';
import LogicGame from './LogicGame';
import Player from './Player';
import Map, { Map2 } from './Map';
import { Matriz } from './utils';

const Table = (): React.JSX.Element => {

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
    // console.log('***');

    const size = 20
    const l = 12
    const map2 = new Map2(0, { x: size, y: size }, { x: l, y: l })
    console.log(map2);



    const game = [map2.draw]

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