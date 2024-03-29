import React, { useContext } from 'react'
import { usePokemon } from '../../Hooks/Pokemon/usePokemon'
import { Button } from '../Button/Button'
import { LevelContext, ToggleContext } from '../react-game/context'
import { CachePokemonContext } from '../../pages/Games/Games'

export const Pokemon = () => {

    const { pokemon, id, loading, error, previewPokemon, nextPokemon, inputPokemon } = usePokemon()
    const { toggleOn } = useContext(ToggleContext)
    const { setCachePokemon } = useContext(CachePokemonContext)
    const { setLevel } = useContext(LevelContext)

    const handleChange = (value: number): void => {
        if (value < 1) inputPokemon(1010)
        else if (value > 1010) inputPokemon(value % 10 | 1)
        else inputPokemon(value)
    }

    return (<div className='min-w-[256px] w-max h-60 m-auto p-6 rounded-xl bg-[--color-1] flex flex-col justify-center items-center'>

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
            <div className='h-9 flex items-center justify-center'>
                {loading
                    ? <h1 className='font-mono font-bold text-white'>Loading...</h1>
                    : error
                        ? ''
                        : <h1 className='text-3xl font-bold text-white'>{pokemon?.name}</h1>
                }
            </div>
            <div className='w-24 h-24 flex items-center justify-center'>
                {loading
                    ? <img src='error' alt='loading' />
                    : error
                        ? <h1>{error.message}</h1>
                        : < img className='w-24' src={pokemon?.sprites.front_default} alt={pokemon?.name} />
                }
            </div>
        </div>

        <Button
            onClick={() => {
                setCachePokemon(pokemon)
                toggleOn()
                setLevel(id)
            }}
            text='capturar'
            className='w-24 rounded-xl'
        />
        {/* <Button
            onClick={ removePokemon }
            text='liberar'
            className='w-24 rounded-xl'
        /> */}

    </div>)
}
