import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from './Canvas.tsx';
import LogicGame from './LogicGame.ts';
import { Map2 } from './Map.ts';
import Player from './Player.ts';
import { LevelContext, ToggleContext } from './context/index.tsx';

const initial = ({ sizeBlock, speed, controllers }) => {

    //? MAPA
    const map2 = new Map2({
        length: 0,
        size: { x: sizeBlock, y: sizeBlock }
    })

    //? PLAYER
    const p2 = new Player({
        color: 'rgb(50,200,100)',
        size: { x: sizeBlock, y: sizeBlock },
        controllers,
        speed,
    })

    p2.map = map2.map
    p2.list = map2.list
    p2.gameOver = false
    p2.endpoint = map2.list[map2.list.length - 1].position

    return { map2, p2 }
}

const Table = (): React.JSX.Element => {

    const { toggleOff } = React.useContext(ToggleContext)
    const { level } = React.useContext(LevelContext)

    const controllers = [
        {
            Up: 'ArrowUp',
            Down: 'ArrowDown',
            Left: 'ArrowLeft',
            Right: 'ArrowRight',
        },
        {
            Up: 'w',
            Down: 's',
            Left: 'a',
            Right: 'd',
        }
    ]

    const config = { ...level, controllers }

    //? HANDLER
    const handleStartGame = () => {
        start()
        setState(initial(config))
    }
    const handleGameOver = () => {
        p2.gameOver = true
        setState(initial(config))
        toggleOff()
    }

    const [direction, setDirection]: [string, React.Dispatch<React.SetStateAction<string>>] = useState('')
    const [{ map2, p2 }, setState] = useState(initial(config))

    const game = [map2, p2]

    const canvasRef = useRef(null);
    const { start, timerGame, stateGame } = LogicGame({ canvasRef, game, handleGameOver, timeLevel: level.time })

    useEffect(() => {
        handleStartGame()
    }, [])

    return <>
        {stateGame && <p className='text-red-50 relative top-0'>⌛: {timerGame}</p>}
        <div className=' flex bg-black'>
            {stateGame === 0 &&
                <div className=' text-red-50 absolute z-50'>
                    <div className='w-60 h-60 bg-[rgba(0,0,0,0.5)] flex items-center justify-center'>
                        <h1 className='my-auto text-center scale-[4] ' >{timerGame}</h1>
                    </div>
                </div>
            }
            <Canvas canvasRef={canvasRef} />
        </div>
        <div className='w-max m-auto grid grid-cols-3'>
            <button className='hover:saturate-200 hover:scale-y-95 col-start-2 col-end-2'>
                <img id='Up' width="64" height="64" src="https://img.icons8.com/dusk/64/up-arrow-key.png" alt="up-arrow-key" />
            </button>
            <button className='hover:saturate-200 hover:scale-y-95 row-start-2'>
                <img id='Left' width="64" height="64" src="https://img.icons8.com/dusk/64/left-arrow-key.png" alt="left-arrow-key" />
            </button>
            <button className='hover:saturate-200 hover:scale-y-95 row-start-2'>
                <img id='Down' width="64" height="64" src="https://img.icons8.com/dusk/64/down-arrow-key.png" alt="down-arrow-key" />
            </button>
            <button className='hover:saturate-200 hover:scale-y-95 row-start-2'>
                <img id='Right' width="64" height="64" src="https://img.icons8.com/dusk/64/right-arrow-key.png" alt="right-arrow-key" />
            </button>
        </div>
        {/* <p className='text-red-50 relative top-0'>🚩: {stateGame}</p> */}
    </>

}

export default Table