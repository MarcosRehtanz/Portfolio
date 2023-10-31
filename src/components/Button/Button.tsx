import React from 'react'

interface Button {
    onClick: Function
    text: string
}

export const Button = ({ onClick, text }: Button): JSX.Element => {
    return (
        <button className='border border-indigo-500 bg-indigo-500 text-white px-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline' onClick={() => onClick()} >{text}</button>
    )
}
