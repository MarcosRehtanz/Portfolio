import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { cacheContext } from "../../context/allContext";

interface Pokemon {
  pokemon: any;
  id: number;
  loading: boolean;
  error: any;
  nextPokemon: Function;
  previewPokemon: Function;
  inputPokemon: Function;
}

export const usePokemon = (initialId: number = 1): Pokemon => {
  const [pokemon, setPokemon] = useState();
  const [id, setId] = useState(initialId);
  const { cache, addInCache } = useContext(cacheContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (cache?.[id]) {
      setPokemon(cache[id]);
      setError(null);
      setLoading(false);
    } else {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(({ data }) => {
          const pokemon = {
            ...data,
            stats: data?.stats.map(
              (stat: { stat: { name: string }; base_stat: string }) => ({
                name: stat?.stat.name.replace("-", "_"),
                base_stat: stat?.base_stat,
              })
            ),
          };
          addInCache(id, pokemon);
          setPokemon(pokemon);
          setError(null);
        })
        .catch((err) => {
          setPokemon(undefined);
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  const nextPokemon = () => setId((oldId) => oldId + 1);
  const previewPokemon = () => setId((oldId) => oldId - 1);
  const inputPokemon = (inputId: number) => setId(inputId);

  return {
    pokemon,
    id,
    loading,
    error,
    nextPokemon,
    previewPokemon,
    inputPokemon,
  };
};
