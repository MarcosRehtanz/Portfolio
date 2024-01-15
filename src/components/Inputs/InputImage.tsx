import React, { useState } from 'react'

export const useImage = () => {
  const [image, setImage]: Array<any> = useState()

  const updateImage = (event:any) => {

    const file = event.target.files[0];

    if (file) {
      const reader: any = new FileReader();
      reader.onload = () => {
        const base64String: any = reader.result.split(',')[1];
        setImage(`data:image/jpeg;base64,${base64String}`)
      };
      reader.readAsDataURL(file);

    }
  }

  return { image, updateImage }
}

interface InputType {
  handleChange: React.ChangeEventHandler<HTMLInputElement>
  name?: string
  className?: string
}

export const InputImage = ({ handleChange, name, className }: InputType) => {
  return <input className={className} type="file" name={name} accept='image/*' onChange={handleChange} />
}

interface ImageType {
  width?: String
  height?: String
  src?: string
  name?: string
  className?: string
}

export const ImageRender = ({ width, height, src, name, className }: ImageType) => {
  return src && <div className={className} ><img width={`${width}`} height={`${height}`} src={src} alt={`${name}`} /></div>
}

interface File {
  className?: String
  imageClassName?: String
  inputClassName?: String
  name?: String
}

const FileInputImage = ({ className, imageClassName, inputClassName, name }: File) => {

  const { image, updateImage } = useImage()

  return (<div className={`${className}`}>
    <InputImage className={`${inputClassName}`} handleChange={updateImage} name={`${name}`} />
    <ImageRender className={`${imageClassName}`} src={image} name={`${name}`} />
  </div>)

}

export default FileInputImage