import React, { useEffect, useRef, useState } from 'react'

const Table = (): React.JSX.Element => {

    const canvasRef = useRef(null);

    let canvas: any, ctx: any
    const [intevalId, setIntervalId]: any = useState()

    const context = (): void => {
        canvas = canvasRef?.current
        ctx = canvas?.getContext("2d")
    }

    const startGame = () => {
        let _temp = setInterval(() => {
            context()
            const rand = (n: number) => Math.floor(Math.random() * n)
            ctx.fillStyle = `rgb(${rand(100) + 100}, 0, 0)`
            ctx.fillRect(20, 20, 100, 100)
        }, 1000 / 25)
        setIntervalId(_temp)
    }

    const endGame = () => {
        context()
        clearInterval(intevalId)
        setTimeout(() => {
            ctx?.clearRect(0, 0, 240, 240)
        }, 100)
        setIntervalId(null)
    }

    useEffect(() => {
        canvas = canvasRef?.current
        if (canvas) {
            ctx = canvas?.getContext('2d')
        }
    }, [canvasRef])

    return (
        <div className='flex flex-col items-center justify-center text-white'>
            <canvas ref={canvasRef} width='240' height='240' className='border' >
                An alternative text describing what your canvas displays.
            </canvas>
            <button onClick={startGame}>Start</button>
            <button onClick={endGame}>Finish</button>
        </div>
    )
}

export default Table