import { Pokemon } from '../../components/Pokemon/Pokemon'
import Game from '../../components/react-game/Game'
import GameProvider from '../../components/react-game/context'
import { Context, createContext, useState } from 'react'

export const CachePokemonContext: Context<any> = createContext({})

export const Games = () => {

  const [cachePokemon, setCachePokemon] = useState()
  const space = (count: number) => <span className="text-[--color-1]">{'0'.repeat(count)}</span>

  return (<div className="min-h-full flex flex-col justify-center">
    <CachePokemonContext.Provider value={{ cachePokemon, setCachePokemon }}>
      <GameProvider>
        <div
          className="w-max m-auto my-4 p-6 border border-[--color-4] border-dashed rounded-xl bg-[--color-1] flex justify-center gap-8 font-mono text-white">
          <div className="w-max">
            <h1>Laberinto Pokemon</h1>
            <hr />
            <small>🎯 5 Lvl. de dificultad</small><br />
            <small>⏱ Contrarreloj</small>
          </div>
          <div className="flex flex-col justify-center">
            <h1>Control</h1>
            <hr />
            <img width="64" height="64" src="https://img.icons8.com/dusk/64/arrow-keys.png"
                 alt="arrow-keys" />
          </div>
        </div>
        <Pokemon />
        <Game />
      </GameProvider>
    </CachePokemonContext.Provider>
  </div>)
}
