import React from 'react'
import { Pokemon } from '../../components/Pokemon/Pokemon.tsx'
import Game from '../../components/react-game/Game.tsx'
import { ToggleProvider } from '../../components/react-game/context'



export const Games = () => {

    return (<div>
        <ToggleProvider>
            <Pokemon />
            <Game />
        </ToggleProvider>
    </div>)
}
