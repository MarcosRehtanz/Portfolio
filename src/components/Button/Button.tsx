import React from 'react'

interface Button {
    children?: any
    onClick: Function
    text?: string
    className?: string
}

export const Button = ({children, onClick, text, className }: Button): JSX.Element => {
    return (
        <button
            className={`border border-indigo-500 bg-indigo-500 text-white px-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline ${className}`}
            onClick={() => onClick()}
        >
            {children}
            {text}
        </button>
    )
}
