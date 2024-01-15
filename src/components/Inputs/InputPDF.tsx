import React, { useState } from 'react'


export const usePDF = () => {

    const [pdf, setPDF] = useState()

    const updatePDF = (event) => {

        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader()

            reader.onload = (e) => {

                if (e.target) {

                    const content: any = e.target.result
                    setPDF(content)
                    console.log(content);
                }
            }

            reader.readAsText(file)
        }
    }

    return { pdf, updatePDF}

}

export const InputPDF = ( {handleChange} ) => {
    return (
        <div>
            <input onChange={handleChange} accept="application/pdf" />

        </div>
    )

}
