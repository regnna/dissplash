"use client"
import { CldImage } from 'next-cloudinary'
import { Icons } from "@/components/icons"
import { Heart } from '@/components/iconz/heart'
import React, { useTransition } from 'react'
import { setAsFavoriteAction } from './actions'
import { SearchResult } from './page'
import { FullHeart } from '@/components/iconz/fullheart'
const CloudinaryImage=(props:any & {imageData: SearchResult ; path:string})=>{
  const [transition,startTransition]=useTransition()

  const {imageData}=props;

  const isFavorite=imageData.tags.includes('favorite')

  return(
    <div className='relative'>

  <CldImage {...props}
  src={imageData.public_id}/>
  {/* <Icons.heart className=" absolute top-2 right-2" /> */}
  {isFavorite?
  (<FullHeart onClick={()=>{
  startTransition(()=>{
  setAsFavoriteAction(imageData.public_id,true,props.path)

  });
}}
 className=" absolute top-2 right-2 text-red-500
 hover:text-white hover:cursor-pointer"/>)

:(
  <Heart onClick={()=>{
  startTransition(()=>{
  setAsFavoriteAction(imageData.public_id,false,props.path)

  });
}}
 className="text-white absolute top-2 right-2 hover:text-red-500 hover:cursor-pointer"/>
)}

  </div>
  )
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
