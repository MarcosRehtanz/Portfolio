import React from 'react'
import { Pokemon } from '../../components/Pokemon/Pokemon.tsx'
import Game from '../../components/react-game/Game.tsx'
import GameProvider from '../../components/react-game/context'

export const CachePokemonContext: React.Context<any> = React.createContext({})

export const Games = () => {

    const [cachePokemon, setCachePokemon] = React.useState()

    return (<div>
        <CachePokemonContext.Provider value={{ cachePokemon, setCachePokemon }}>
            <GameProvider>
                <Pokemon />
                <Game />
                <div className='flex justify-center'>
                    <img width="64" height="64" src="https://img.icons8.com/dusk/64/arrow-keys.png" alt="arrow-keys" />
                </div>
            </GameProvider>
        </CachePokemonContext.Provider>
    </div>)
}
