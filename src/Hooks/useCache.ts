import React from 'react'

const useCache = () => {

    const [cache, setCache] = React.useState({})

    const addInCache = (key: number | string, element: any ) => {
        setCache(old => ({
            ...old,
            [key]: element
        }))
    }

    return {cache, addInCache}
}

export default useCache