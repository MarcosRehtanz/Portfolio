import React from 'react'

const Modal = ({ children }) => {
    return (
        <div
            className='w-screen h-screen flex justify-center items-center bg-[rgba(0,0,0,0.5)] absolute top-0 z-10 '
        >
            {children}
        </div>
    )
}

export default Modal