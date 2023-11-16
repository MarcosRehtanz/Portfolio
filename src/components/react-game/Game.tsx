import React, { useRef } from 'react'
import { Button } from '../Button/Button'
import Table from './Table'
import { ToggleContext } from './context'

const Game = () => {

    const contain = useRef(null)
    const { toggle } = React.useContext(ToggleContext)

    return (<div ref={contain} className='flex flex-col items-center justify-center text-white'>
        {/* <button onClick={() => contain?.current?.requestFullscreen?.()} >Full</button>
        <button onClick={() => document?.exitFullscreen?.()} >Mid</button> */}
        {toggle && <Table />}
    </div>)
}

export default Game