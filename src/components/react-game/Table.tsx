import React, { useEffect, useRef, useState } from 'react'
import { Canvas } from './Canvas.tsx';
import LogicGame from './LogicGame.ts';
import { Map2 } from './Map.ts';
import Player from './Player.ts';
import { ToggleContext } from './context/index.tsx';

const initial = () => {

    // console.log('***');
    //? MAPA
    const l = 12, size = 240 / l;
    const map2 = new Map2({
        length: 0,
        size: { x: 20, y: 20 }
    })

    //? PLAYER
    const p2 = new Player({
        color: 'rgb(50,200,100)',
        // size: {x:5, y:10}
    })

    p2.map = map2.map
    p2.list = map2.list
    p2.gameOver = false
    p2.endpoint = map2.list[map2.list.length - 1].position
    // p1.map = map2.map
    // p1.list = map2.list

    return { map2, players: [p2] }
}

const Table = (): React.JSX.Element => {

    const { toggleOff } = React.useContext(ToggleContext)

    //? HANDLER
    const handleStartGame = () => {
        start()
        setState(initial())
    }
    const handleGameOver = () => {
        players[0].gameOver = true
        setState(initial())
        toggleOff()
    }


    const [{ map2, players }, setState] = useState(initial())

    const game = [map2, ...players]

    const canvasRef = useRef(null);
    const { start, stop, timerGame, stateGame } = LogicGame({ canvasRef, game, handleGameOver })

    useEffect(() => {
        handleStartGame()
    }, [])

    return <>
        <div className=' flex '>
            <p className='text-red-50 relative top-0'>⌛: {timerGame}</p>
            <p className='text-red-50 relative top-0'>🚩: {stateGame}</p>
        </div>
        <Canvas canvasRef={canvasRef} />
    </>

}

export default Table