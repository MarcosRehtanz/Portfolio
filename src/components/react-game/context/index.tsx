import React from "react"
import { useToggle } from "../../../Hooks/useToggle"

export const ToggleContext: React.Context<any> = React.createContext({})
export const LevelContext: React.Context<any> = React.createContext({})



const GameProvider = ({ children }) => {
    const toggle = useToggle(false)
    const [level, setLevel] = React.useState({ sizeBlock: 20, speed: 4 })
    const selectLevel = (l: number) => {
        switch (l) {
            case 1: return { sizeBlock: 48, speed: 6 }
            case 2: return { sizeBlock: 40, speed: 8 }
            case 3: return { sizeBlock: 30, speed: 6 }
            case 4: return { sizeBlock: 24, speed: 8 }
            default: return { sizeBlock: 20, speed: 10 }
        }
    }
    const setter = (id: number) => setLevel(selectLevel(Math.ceil(id / 202)))

    return (
        <ToggleContext.Provider value={toggle} >
            <LevelContext.Provider value={{ level, setLevel: setter }}>
                {children}
            </LevelContext.Provider>
        </ToggleContext.Provider>
    )
}
export default GameProvider