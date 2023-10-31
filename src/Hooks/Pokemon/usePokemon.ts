import { useEffect, useState } from 'react'
import axios from 'axios'

interface Pokemon {
    pokemon: any
    id: number
    nextPokemon: Function
    previewPokemon: Function
    inputPokemon: Function
}

export const usePokemon = ( initialId: number = 1 ): Pokemon => {
	
	const [pokemon, setPokemon] = useState()
	const [id, setId] = useState( initialId )
	
	useEffect(() => {
		axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
		.then(({ data }) => {
			setPokemon(data)
		})
	}, [id])
	
	const nextPokemon = () => setId( oldId => oldId + 1 )
	const previewPokemon = () => setId( oldId => oldId - 1 )
	const inputPokemon = (inputId: number) => setId(inputId)
	
	return { pokemon, id, nextPokemon, previewPokemon, inputPokemon }
}
