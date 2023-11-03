import React, { useState } from 'react'

export const useLocalStorageArray = (key: string) => {

    const __localeStorage: any = window.localStorage.getItem(key)
    const [localStorage, setLocaleStorage] = useState(JSON.parse(__localeStorage))

    const addItem = (item: any) => {
        const _localeStorage: any = window.localStorage.getItem(key)

        if (_localeStorage) {
            
            const _newLocalStorage = [...JSON.parse(_localeStorage), item]
            window.localStorage.setItem(key, JSON.stringify(_newLocalStorage))
            setLocaleStorage(_newLocalStorage)

        } else {

            const _newLocalStorage: Array<any> = [item]
            window.localStorage.setItem(key, JSON.stringify(_newLocalStorage))
            setLocaleStorage(_newLocalStorage)

        }

    }

    const removeItem = (item: any) => {
        const _localeStorage: any = window.localStorage.getItem(key)
        if (_localeStorage) {
            const _newLocalStorage = [...JSON.parse(_localeStorage)].filter((element: any) => element !== item)
            window.localStorage.setItem(key, JSON.stringify(_newLocalStorage))
            setLocaleStorage(_newLocalStorage)
        } else {
            const _newLocalStorage: Array<any> = []
            window.localStorage.setItem(key, JSON.stringify(_newLocalStorage))
            setLocaleStorage(_newLocalStorage)
        }
    }

    return { addItem, removeItem, localStorage }
}
