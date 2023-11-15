import React from 'react'
import FileInputImage, { ImageRender, InputImage, useImage } from '../../components/Inputs/InputImage'
import { InputPDF, usePDF } from '../../components/Inputs/InputPDF'

export const Office = () => {
    const { image, updateImage } = useImage()
    const { pdf, updatePDF } = usePDF()
    return (<div className='flex justify-center'>
        {/* <FileInputImage className='w-28 overflow-hidden' />
        <InputPDF handleChange={updateImage} /> */}

        {/* <iframe
        src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7130028331462184960" 
        height="1432" width="504" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe> */}
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7130028331462184960?compact=3"
        height="399" width="710" frameborder="0" allowfullscreen="" title="Publicación integrada"></iframe>
        
    </div>)
}
