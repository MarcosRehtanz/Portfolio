import React, { useRef, useState } from 'react'
import { Canvas } from './Canvas';
import LogicGame from './LogicGame';
import Player from './Player';

const Table = (): React.JSX.Element => {

    const rand = (n: number): number => Math.floor(Math.random() * n)
    // const cubes = (ctx: any) => {

    //     ctx.fillStyle = `rgb(${rand(100) + 100}, 0, 0)`
    //     ctx.fillRect(20, 20, 100, 100)
    //     ctx.fillStyle = `rgb( 0, ${rand(100) + 100}, 0)`
    //     ctx.fillRect(120, 120, 100, 100)
    // }

    const player = new Player({})
    const game = [player.draw]

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