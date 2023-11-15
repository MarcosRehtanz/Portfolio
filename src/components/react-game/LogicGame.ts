import React from "react"

export const context = (canvasRef: React.MutableRefObject<any>): any => {
    const canvas = canvasRef?.current
    return canvas?.getContext("2d")
}

interface Config {
    canvasRef: React.MutableRefObject<null>
    game?: Array<any>
    handleGameOver: Function
}


const LogicGame = (config: Config): {
    start: Function,
    stop: Function
} => {

    let intervalId = []
    const setIntervalId = (arr: any) => intervalId = arr

    const start = (input: Config): void => {

        let _temp = setInterval(() => {
            const ctx = context(input.canvasRef)

            ctx?.clearRect(0, 0, 240, 240)
            input.game?.map(f => {
                f?.action(ctx)
                if (f?.gameOver) {
                    intervalId.map(Id => {
                        if (Id)
                            clearInterval(Id)

                    })
                    input.handleGameOver()

                }
            })
        }, 1000 / 30)

        setIntervalId([...intervalId, _temp])
    }

    return {
        start: () => start(config),
        stop: () => {}
    }
}

export default LogicGame
