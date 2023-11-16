import React from "react"
import { pokemonContext } from '../../context/allContext'
import { CachePokemonContext } from "../../pages/Games/Games"

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

    const [_, setPokemon, removePokemon] = React.useContext(pokemonContext)
    const { cachePokemon } = React.useContext(CachePokemonContext)

    let intervalId = []
    const setIntervalId = (arr: any) => intervalId = arr

    const start = (): void => {

        let _temp = setInterval(() => {
            const ctx = context(config.canvasRef)

            ctx?.clearRect(0, 0, 240, 240)
            config.game?.map(f => {
                f?.action(ctx)
                if (f?.gameOver) {
                    intervalId.map(Id => {
                        if (Id)
                            clearInterval(Id)

                    })
                    config.handleGameOver()
                    setPokemon(cachePokemon)
                }
            })
        }, 1000 / 30)

        setIntervalId([...intervalId, _temp])
    }
    const stop = () => {
        intervalId.map(Id => {
            if (Id)
                clearInterval(Id)
        })
        config.handleGameOver()
    }

    return {
        start,
        stop
    }
}

export default LogicGame
