import React from 'react'
import { Pokemon } from '../../components/Pokemon/Pokemon.tsx'
import Table from '../../components/react-game/Table.tsx'
import { useToggle } from '../../Hooks/useToggle.ts'
import { Button } from '../../components/Button/Button.tsx'
import Game from '../../components/react-game/Game.tsx'

export const Games = () => {
    const { toggle, toggleSwitch } = useToggle(true)
    return (<div>

        <Pokemon />
        {/* <Button 
            onClick={toggleSwitch}
            text='Click'
        /> */}
        <Game/>
        {/* < Table /> */}
    </div>)
}
