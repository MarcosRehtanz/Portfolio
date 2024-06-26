import React, { useEffect, useState } from "react";
import { Button } from "../../Button/Button";

type Props = {
  id: number;
  previewPokemon: Function;
  nextPokemon: Function;
  inputPokemon: Function;
};

const Pagination = ({
  id,
  previewPokemon,
  nextPokemon,
  inputPokemon,
}: Props) => {
  const [idPokemon, setIdPokemon] = useState(id);
  const handleChange = (value: number): void => {
    if (value < 1) setIdPokemon(1010);
    else if (value > 1010) setIdPokemon(value % 10 | 1);
    else setIdPokemon(value);
  };
  const handleBlur = (value: number) => {
    inputPokemon(value);
  };

  useEffect(() => setIdPokemon(id), [id]);

  return (
    <div className="flex nowrap">
      <Button
        onClick={() => (id > 1 ? previewPokemon() : inputPokemon(1010))}
        text="Prev"
        className="rounded-l-xl"
      />
      <input
        className="w-14 text-center"
        type="number"
        onChange={({ target }) => handleChange(+target.value)}
        onBlur={({ target }) => handleBlur(+target.value)}
        onKeyDown={({ code }) => code === "Enter" && inputPokemon(idPokemon)}
        value={idPokemon}
      />
      <Button
        onClick={() => (id < 1010 ? nextPokemon() : inputPokemon(1))}
        text="Next"
        className="rounded-r-xl"
      />
    </div>
  );
};

export default Pagination;
