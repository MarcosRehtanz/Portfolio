import { useState } from "react"

interface UseLocalStorage {
    localStorage: any
    setItem: Function
    removeItem: Function
}

export const useLocalStorage = ( key: string ): UseLocalStorage => {

    const importLocalStorage: any = window.localStorage.getItem( key )
    const parseLocalStorage = JSON.parse( importLocalStorage )

    const [localStorage, setLocalStorage] = useState( parseLocalStorage )

    const setItem = ( item: any ) => window.localStorage.setItem( key, JSON.stringify( item ) )
    
    const removeItem = () => window.localStorage.removeItem( key )

    return { localStorage, setItem, removeItem }

}