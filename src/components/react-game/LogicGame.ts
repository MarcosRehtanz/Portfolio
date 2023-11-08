import React from "react"

export const context = (canvasRef: React.MutableRefObject<any>): any => {
    const canvas = canvasRef?.current
    return canvas?.getContext("2d")
}

interface Config {
    canvasRef: React.MutableRefObject<null>
    intervalId: number | undefined
    setIntervalId: Function
    game?: Array<Function>
}

const start = (input: Config): void => {

    let _temp = setInterval(() => {
        const ctx = context(input.canvasRef)

        ctx?.clearRect(0, 0, 240, 240)
        input.game?.map(f => f(ctx))
    }, 1000 / 30)
    input.setIntervalId(_temp)
}

const stop = ({ canvasRef, setIntervalId, intervalId }: Config): void => {

    const ctx = context(canvasRef)

    clearInterval(intervalId)
    setTimeout(() => {
        ctx?.clearRect(0, 0, 240, 240)
    }, 100)
    setIntervalId(null)
}

const LogicGame = (config: Config): {
    start: Function,
    stop: Function
} => {

    return {
        start: () => start(config),
        stop: () => stop(config)
    }
}

export default LogicGame
