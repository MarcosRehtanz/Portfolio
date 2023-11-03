import React, { useContext } from 'react'
import { usePokemon } from '../../Hooks/Pokemon/usePokemon'
import { Button } from '../Button/Button'
import { pokemonContext } from '../../context/allContext'

export const Pokemon = () => {

    const { pokemon, id, previewPokemon, nextPokemon, inputPokemon } = usePokemon()
    const { setPokemon, removePokemon }: any = useContext(pokemonContext)

    const handleChange = (value: number): void => {
        if (value < 1) inputPokemon(1010)
        else if (value > 1010) inputPokemon(value % 10 | 1)
        else inputPokemon(value)
    }

    return (<div className='max-w-fit mx-auto flex flex-col items-center'>

        <div>
            <Button
                onClick={() => (id > 1) ? previewPokemon() : inputPokemon(1010)}
                text='Prev'
                className='rounded-l-xl'
            />
            <input className='w-14 text-center' type="number" onChange={({ target }) => handleChange(+target.value)} value={id} />
            <Button
                onClick={() => (id < 1010) ? nextPokemon() : inputPokemon(1)}
                text='Next'
                className='rounded-r-xl'
            />
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='text-3xl font-bold text-white'>{pokemon?.name}</h1>
            <img className='w-24' src={pokemon?.sprites.front_default} alt={pokemon?.name} />
        </div>

        <Button
            onClick={() => {
                setPokemon(pokemon)
            }}
            text='capturar'
            className='w-24 rounded-xl'
        />
        <Button
            onClick={ removePokemon }
            text='liberar'
            className='w-24 rounded-xl'
        />

    </div>)
}
