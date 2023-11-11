import React, { useState } from 'react'

export const useToggle = (initial: boolean = false) => {

    const [toggle, setToggle] = useState(initial)

    return ({
        toggle,
        toggleOn: () => setToggle(true),
        toggleOff: () => setToggle(false),
        toggleSwitch: () => setToggle(old => !old),
    })
}
