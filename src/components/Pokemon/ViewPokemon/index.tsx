import React, { Fragment } from "react";
import LazyImagePokemon from "./LazyImagePokemon";

type Props = Omit<Parameters<typeof LazyImagePokemon>[0], "alt"> & {
  name: string;
};

const ViewPokemon = ({ loading, error, src, name }: Props) => {
  return (
    <Fragment>
      <div className="h-9 flex items-center justify-center">
        <h1 className="text-3xl font-bold text-white">
          {loading ? "Loading.." : error ? "?" : name}
        </h1>
      </div>
      <div className="w-24 h-24 flex items-center justify-center">
        <LazyImagePokemon
          loading={loading}
          error={error}
          src={src}
          alt={name}
        />
      </div>
    </Fragment>
  );
};

export default ViewPokemon;
