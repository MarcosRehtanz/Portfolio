import React from "react"
import { pokemonContext } from '../../context/allContext'
import { CachePokemonContext } from "../../pages/Games/Games"
import { Timer } from "./Timer"
import { pokemonCapture } from "./notification"

export const context = (canvasRef: React.MutableRefObject<any>): any => {
    const canvas = canvasRef?.current
    return canvas?.getContext("2d")
}

interface Config {
    canvasRef: React.MutableRefObject<null>
    game: Array<any>
    handleGameOver: Function
    timeLevel: number
}


const LogicGame = (config: Config): {
    start: Function,
    stop: Function,
    timerGame: number,
    stateGame: number,
    // timerGame: { time: number, state: number }
} => {

    const [_, setPokemon, removePokemon] = React.useContext(pokemonContext)
    const { cachePokemon } = React.useContext(CachePokemonContext)

    let intervalId = []
    const setIntervalId = (arr: any) => intervalId = arr

    const fps = 30
    let [timerGame, setTimerGame] = React.useState(0)
    let [stateGame, setStateGame] = React.useState(0)
    let timer = new Timer({ fps, inGame: config.timeLevel })

    const start = (): void => {
        setTimerGame(timer.time)
        setStateGame(timer.state)

        let _temp = setInterval(() => {
            const ctx = context(config.canvasRef)

            ctx?.clearRect(0, 0, 240, 240)
            config.game?.map(f => {
                f?.action(ctx, { time: timer.time, state: timer.state })

                if (timer.state === 0 && timer.time <= 0) f.canMove = true
                if (timer.state !== 0 && timer.time <= 0) f.canMove = false

                if (f?.gameOver) {
                    intervalId.map(Id => {
                        if (Id) clearInterval(Id)
                    })
                    config.handleGameOver()
                    setPokemon(cachePokemon)
                    pokemonCapture({
                        url: cachePokemon.sprites.front_default,
                        name: cachePokemon.name
                    })
                    // toast.success(img_xml(cachePokemon.sprites.front_default))
                }
            })


            if (timer.time > 0) setTimerGame((timer.go()))
            else if (timer.state >= 0) {
                const t = timer.next()
                setTimerGame(t.time)
                setStateGame(t.state)
            } else {
                intervalId.map(Id => {
                    if (Id) clearInterval(Id)
                })
                config.handleGameOver()
            }

        }, 1000 / fps)

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
        stop,
        timerGame,
        stateGame,
    }
}

export default LogicGame
