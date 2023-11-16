import React from 'react'
import { Pokemon } from '../../components/Pokemon/Pokemon.tsx'
import Game from '../../components/react-game/Game.tsx'
import { ToggleProvider } from '../../components/react-game/context'

export const CachePokemonContext: React.Context<any> = React.createContext({})

export const Games = () => {

    const [cachePokemon, setCachePokemon] = React.useState()

    return (<div>
        <CachePokemonContext.Provider value={{cachePokemon, setCachePokemon}}>
            <ToggleProvider>
                <Pokemon />
                <Game />
            </ToggleProvider>
        </CachePokemonContext.Provider>
    </div>)
}
