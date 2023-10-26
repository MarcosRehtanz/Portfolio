import React from 'react'
import { useLocalStorage } from '../../Hooks/useLocalStorage'

export const Games = () => {

    const { addItem, removeItem, localStorage } = useLocalStorage('Dates')
    const random: Function = (): number => Math.ceil(Math.random() * 2)

    return (<div>

        <button type="button" onClick={() => addItem( random() )} className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline">
            Add
        </button>

        <button type="button" onClick={() => removeItem( random() )} className="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline">
            Remove
        </button>
    </div>)
}
