import React, { useContext, useEffect } from "react";
import { usePokemon } from "../../Hooks/Pokemon/usePokemon";
import { Button } from "../Button/Button";
import { LevelContext, ToggleContext } from "../react-game/context";
import { CachePokemonContext } from "../../pages/Games/Games";
import RadarPokemon from "./Radar";
import Pagination from "./Pagination";
import ViewPokemon from "./ViewPokemon";

export const Pokemon = () => {
  const {
    pokemon,
    id,
    loading,
    error,
    previewPokemon,
    nextPokemon,
    inputPokemon,
  } = usePokemon();
  const { toggleOn } = useContext(ToggleContext);
  const { setCachePokemon } = useContext(CachePokemonContext);
  const { setLevel } = useContext(LevelContext);

  const handleCapture = () => {
    setCachePokemon(pokemon);
    toggleOn();
    setLevel(id);
  };

  // useEffect(() => {
  //   console.log(pokemon);
  // }, [loading, error, pokemon]);

  return (
    <div className="min-w-[256px] w-fit min-h-[60px] m-auto p-6 rounded-xl bg-[--color-1] flex flex-row flex-wrap justify-center items-center">
      <div className="w-max flex flex-col justify-center items-center">
        <Pagination {...{ id, previewPokemon, nextPokemon, inputPokemon }} />

        <div className="flex flex-col items-center">
          <ViewPokemon
            loading={loading}
            error={error}
            src={pokemon?.sprites.front_default}
            name={pokemon?.name}
          />

          <Button
            onClick={handleCapture}
            text="capturar"
            className="w-24 rounded-xl"
          />
        </div>
      </div>
      <RadarPokemon data={pokemon?.stats} />
    </div>
  );
};
