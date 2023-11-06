import React from 'react'

interface C {
    canvasRef: React.MutableRefObject<null>
    width?: number
    height?: number
}

export const Canvas = ({ canvasRef, width = 240, height = 240 }: C): React.JSX.Element => {
    return (
        <canvas
            ref={canvasRef}
            width={width}
            height={height}
            className='border'
        >
            An alternative text describing what your canvas displays.
        </canvas>
    )
}
