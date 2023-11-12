import React from 'react'
import { Pokemon } from '../../components/Pokemon/Pokemon.tsx'
import Table from '../../components/react-game/Table.tsx'
import { useToggle } from '../../Hooks/useToggle.ts'
import { Button } from '../../components/Button/Button.tsx'

export const Games = () => {
    const { toggle, toggleSwitch } = useToggle(true)
    return (<div>

        <Pokemon />
        {/* <Button 
            onClick={toggleSwitch}
            text='Click'
        /> */}
        < Table />
    </div>)
}
