import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from './Canvas.tsx';
import LogicGame from './LogicGame.ts';
import { Map2 } from './Map.ts';
import Player from './Player.ts';
import { LevelContext, ToggleContext } from './context/index.tsx';

const initial = ({ sizeBlock, speed }) => {

    // console.log('***');
    //? MAPA
    const map2 = new Map2({
        length: 0,
        size: { x: sizeBlock, y: sizeBlock }
    })

    //? PLAYER
    const p2 = new Player({
        color: 'rgb(50,200,100)',
        size: { x: sizeBlock, y: sizeBlock },
        speed
    })

    p2.map = map2.map
    p2.list = map2.list
    p2.gameOver = false
    p2.endpoint = map2.list[map2.list.length - 1].position

    return { map2, players: [p2] }
}

const Table = (): React.JSX.Element => {

    const { toggleOff } = React.useContext(ToggleContext)
    const { level } = React.useContext(LevelContext)


    //? HANDLER
    const handleStartGame = () => {
        start()
        setState(initial(level))
    }
    const handleGameOver = () => {
        players[0].gameOver = true
        setState(initial(level))
        toggleOff()
    }


    const [{ map2, players }, setState] = useState(initial(level))

    const game = [map2, ...players]

    const canvasRef = useRef(null);
    const { start, stop, timerGame, stateGame } = LogicGame({ canvasRef, game, handleGameOver })

    useEffect(() => {
        handleStartGame()
    }, [])

    return <>
        {stateGame && <p className='text-red-50 relative top-0'>⌛: {timerGame}</p>}
        <div className=' flex '>
            {stateGame === 0 &&
                <div className=' text-red-50 absolute z-50'>
                    <div className='w-60 h-60 bg-[rgba(0,0,0,0.5)] flex items-center justify-center'>
                        <h1 className='my-auto text-center scale-[4] ' >{timerGame}</h1>
                    </div>
                </div>
            }
            <Canvas canvasRef={canvasRef} />
        </div>
        {/* <p className='text-red-50 relative top-0'>🚩: {stateGame}</p> */}
    </>

}

export default Table