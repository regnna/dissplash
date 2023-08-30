"use client"
import { CldImage } from 'next-cloudinary'
import React from 'react'
const CloudinaryImage=(props:any)=>{
  return<CldImage {...props}/>
}
// const CloudinaryImage = ({public_id,...props}:{public_id:string}) => {
//   return (
//     <CldImage
//   src={public_id}
//   sizes="100vw"
//   alt="Description of my image"
// />
//   )
// }

export default CloudinaryImage
