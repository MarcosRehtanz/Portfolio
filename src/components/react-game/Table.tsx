import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Canvas } from './Canvas.tsx';
import LogicGame from './LogicGame.ts';
import PlayerModel from './PlayerModel.ts';
import { Map2 } from './Map.ts';
import { useToggle } from '../../Hooks/useToggle.ts';
import Player from './Player.ts';

const initial = () => {

    // console.log('***');
    //? MAPA
    const l = 12, size = 240 / l;
    const map2 = new Map2({
        length: 0,
        size: { x: 20, y: 20 }
    })

    //? PLAYER
    // const p1 = new Player({
    //     position: { x: 220, y: 220 }, color: 'rgb(200,50,50)',
    //     controller: {
    //         Up: 'ArrowUp',
    //         Down: 'ArrowDown',
    //         Left: 'ArrowLeft',
    //         Right: 'ArrowRight',
    //         stop: '0',
    //     }
    // })
    const p2 = new Player({
        color: 'rgb(50,200,100)',
        // size: {x:5, y:10}
    })

    p2.map = map2.map
    p2.list = map2.list
    p2.gameOver = false
    p2.state = 'inGame'
    p2.endpoint = map2.list[map2.list.length - 1].position
    // p1.map = map2.map
    // p1.list = map2.list

    return { map2, players: [p2] }
}

const Table = ({toggleOff}): React.JSX.Element => {

    //? HANDLER
    const handleStartGame = () => {
        start()
        setState(initial())
    }
    const handleGameOver = () => {
        // stop()
        setState(initial())
        toggleOff()
    }


    const [{ map2, players }, setState] = useState(initial())

    const game = [map2, ...players]

    const canvasRef = useRef(null);
    const { start, stop } = LogicGame({ canvasRef, game, handleGameOver })

    useEffect(() => {
        handleStartGame()
    }, [])

    return (<div>
        <button onClick={toggleOff}>Here</button>
        <Canvas canvasRef={canvasRef} />
    </div>)
    

}

export default Table