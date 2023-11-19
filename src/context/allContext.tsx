import React, { createContext } from "react";
import unitGlobalContext from "./unitGlobalContext";
import useCache from "../Hooks/useCache";

export const pokemonContext: React.Context<any> = createContext([])
export const cacheContext: React.Context<any> = createContext({})

const ContextProvider = ({ children }): React.JSX.Element => {

    const pokemon = unitGlobalContext('pokemon')
    const cache = useCache()

    return (
        <pokemonContext.Provider value={pokemon}>
            <cacheContext.Provider value={cache}>
                {children}
            </cacheContext.Provider>
        </pokemonContext.Provider>
    )
}

export default ContextProvider