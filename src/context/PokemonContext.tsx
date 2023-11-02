import React, { useState } from 'react'
import { pokemonContext } from './allContext'

const PokemonContext = ( { children } ) => {

    const [ pokemon, setPokemon ] = useState()

  return (
    <pokemonContext.Provider value={ {pokemon, setPokemon} } >
        {children}
    </pokemonContext.Provider>
  )
}

export default PokemonContext