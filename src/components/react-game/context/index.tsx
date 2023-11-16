import React from "react"
import { useToggle } from "../../../Hooks/useToggle"

export const ToggleContext: React.Context<any> = React.createContext({})
export const ToggleProvider = ({ children }) => {
    const toggle = useToggle(false)
    return (
        <ToggleContext.Provider value={toggle} >
            {children}
        </ToggleContext.Provider>
    )
}

const GameProvider = ({ children }) => {
    return (
        <ToggleProvider>
            {children}
        </ToggleProvider>
    )
}
export default GameProvider