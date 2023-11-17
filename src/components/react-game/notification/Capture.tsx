import React from 'react'
import { toast } from 'react-toastify'

const Capture = () => {

    const notification = ({ url, name, width = 64, }) => {
        toast(<div className='flex flex-row'>
            <img src={url} width={width} />
            <h1 className='text-center justify-center'>¡<b className='font-bold'>{name.charAt(0).toUpperCase() + name.slice(1)}</b> ha sido capturado!</h1>
        </div>, {
            icon: null
        })
    }

    return notification
}

export default Capture