import React, { useRef } from 'react'
import { useToggle } from '../../Hooks/useToggle'
import { Button } from '../Button/Button'
import Table from './Table'

const Game = () => {

    const { toggle, toggleOff, toggleOn } = useToggle(false)
    const contain = useRef(null)

    return (<div ref={contain} className='flex flex-col items-center justify-center text-white'>
        {/* <button onClick={() => contain?.current?.requestFullscreen?.()} >Full</button>
        <button onClick={() => document?.exitFullscreen?.()} >Mid</button> */}
        {toggle
            ? <div>
                <Button
                    onClick={toggleOff}
                    text='Finish'
                />
                <Table toggleOff={toggleOff} />
            </div>
            : <div>
                <Button
                    onClick={toggleOn}
                    text='Start'
                />
            </div>
        }
    </div>)
}

export default Game