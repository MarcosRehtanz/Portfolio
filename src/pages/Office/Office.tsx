import React from 'react'
import FileInputImage, { ImageRender, InputImage, useImage } from '../../components/Inputs/InputImage'
import { InputPDF, usePDF } from '../../components/Inputs/InputPDF'

export const Office = () => {
    const { image, updateImage } = useImage()
    const { pdf, updatePDF } = usePDF()
    return (<div className='flex justify-center'>
        <FileInputImage className='w-28 overflow-hidden' />
        <InputPDF handleChange={updateImage} />
    </div>)
}
