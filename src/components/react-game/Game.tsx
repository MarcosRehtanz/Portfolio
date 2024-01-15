import React, { useRef } from 'react'
import { Button } from '../Button/Button'
import Table from './Table'
import { ToggleContext } from './context'
import Modal from '../Modal/Modal'

const Game = () => {

    const contain = useRef(null)
    const { toggle } = React.useContext(ToggleContext)

    return (toggle && <Modal>
        <div ref={contain} >
            {/* <button onClick={() => contain?.current?.requestFullscreen?.()} >Full</button>
        <button onClick={() => document?.exitFullscreen?.()} >Mid</button> */}
            <Table />
        </div>
    </Modal>)
}

export default Game