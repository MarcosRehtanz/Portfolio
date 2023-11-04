import { useState } from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage'

const unitGlobalContext = ( key: string) => {

  const { localStorage, setItem, removeItem } = useLocalStorage( key )
  const [globalContext, setGlobalContext]: any = useState(localStorage)

  const set = (newGlobalState: any): void => {
    setItem(newGlobalState)
    setGlobalContext(newGlobalState)
  }

  const remove = (): void => {
    removeItem()
    setGlobalContext(null)
  }

  return [globalContext, set, remove]
}

export default unitGlobalContext