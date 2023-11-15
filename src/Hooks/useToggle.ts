import React, { useState } from 'react'

export interface Toggle {
    toggle: boolean
    toggleOn: () => void
    toggleOff: () => void
    toggleSwitch: () => void
}

export const useToggle = (initial: boolean = false): Toggle => {

    const [toggle, setToggle] = useState(initial)

    return ({
        toggle,
        toggleOn: () => { setToggle(true) },
        toggleOff: () => { setToggle(false) },
        toggleSwitch: () => { setToggle(old => !old) },
    })
}
