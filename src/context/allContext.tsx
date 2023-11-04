import React, { createContext } from "react";
import unitGlobalContext from "./unitGlobalContext";

export const pokemonContext: React.Context<any> = createContext([])

const ContextProvider = ({ children }): React.JSX.Element => {

    const pokemon = unitGlobalContext( 'pokemon' )

    return (
        <pokemonContext.Provider value={pokemon}>
            {children}
        </pokemonContext.Provider>
    )
}

export default ContextProvider