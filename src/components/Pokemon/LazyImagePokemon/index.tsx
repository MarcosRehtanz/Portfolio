import React from "react";

type Props = {
  loading?: boolean;
  error?: Error;
  src: string;
  alt: string;
};

const LazyImagePokemon = ({ loading, error, src, alt }: Props) => {
  if (loading) return <img src="error" alt="loading" loading="lazy" />;
  if (error) return <h1>{error.message}</h1>;
  return <img className="w-24" src={src} alt={alt} loading="lazy" />;
};

export default LazyImagePokemon;
