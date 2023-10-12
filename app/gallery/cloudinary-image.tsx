"use client"
import { CldImage, CldImageProps } from 'next-cloudinary'
import { Icons } from "@/components/icons"
import { Heart } from '@/components/iconz/heart'
import React, { useState, useTransition } from 'react'
import { setAsFavoriteAction } from './actions'
import { SearchResult } from './page'
import { FullHeart } from '@/components/iconz/fullheart'
import { ImageMenu } from '@/components/iamge-menu'
const CloudinaryImage=(props:{imageData: SearchResult ; onUnheart?:(
  ubheartedResource:SearchResult
)=>void; } &Omit<CldImageProps,"src">)=>{
  const [transition,startTransition]=useTransition()

  const {imageData,onUnheart}=props;

  // const isFavorite=imageData.tags.includes('favorite')

  const [isFavorited,setIsFavorited]=useState(
    imageData.tags.includes('favorite')
  )

  return(
    <div className='relative'>

  <CldImage {...props}
  src={imageData.public_id}/>
  {/* <Icons.heart className=" absolute top-2 right-2" /> */}
  {isFavorited?
  (<FullHeart onClick={()=>{
    onUnheart?.(imageData)
    setIsFavorited(false)

  startTransition(()=>{
  setAsFavoriteAction(imageData.public_id,false)

  });
}}
 className=" absolute top-2 left-2 text-red-500
 hover:text-white hover:cursor-pointer"/>)

:(
  <Heart onClick={()=>{
    setIsFavorited(true)
  startTransition(()=>{
  setAsFavoriteAction(imageData.public_id,true)

  });
}}
 className="text-white absolute top-2 left-2 hover:text-red-500 hover:cursor-pointer"/>
)}
<ImageMenu image={imageData}/>
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
