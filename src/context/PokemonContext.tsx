import React, { useEffect, useState } from 'react'
import { pokemonContext } from './allContext'

const PokemonContext = ({ children, keyLocalStorage }) => {

  const [pokemon, setGlobalPokemon]: any = useState()

  const setPokemon = (newPokemon: any) => {
    setGlobalPokemon(newPokemon)
    window.localStorage.setItem( keyLocalStorage, JSON.stringify( newPokemon ) )
  }

  const removePokemon = () => {
    setGlobalPokemon( null )
    window.localStorage.removeItem( keyLocalStorage)
  }

  useEffect(() => {
    const importLocalStorage: any = window.localStorage.getItem( keyLocalStorage )
    const parseLocalStorage = JSON.parse(importLocalStorage)
    setGlobalPokemon(parseLocalStorage)
  }, [])

  return (
    <pokemonContext.Provider value={{ pokemon, setPokemon, removePokemon }} >
      {children}
    </pokemonContext.Provider>
  )
}

export default PokemonContext