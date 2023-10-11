"use client"
import { CldImage } from "next-cloudinary";
import cloudinary from "cloudinary"
import CloudinaryImage from "../gallery/cloudinary-image";
import UploadButtton from "../gallery/upload-button";
import { SearchResult } from "../gallery/page";
import { ForceRefresh } from "@/components/force-refresh";
import { useState } from "react";
import ImageGrid from "@/components/image-grid";



const FavoritesList = ({initialResources,}:{initialResources:SearchResult[]}) => {

  const [resources,setResources]=useState(initialResources);
  return (
<ImageGrid images={resources} getImage={(imageData:SearchResult)=>{
  return(<CloudinaryImage key={imageData.public_id}
        width="400"
  height="300"
  imageData={imageData}
  // path='/gallery'
  alt="an image of somthing"
   onUnheart={(unheartedResources)=>{
    setResources((currentResources)=>
      currentResources.filter((resource)=>resource.public_id!=unheartedResources.public_id
      )
    )
  }}
        />)
}}/>
  //     <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
  //     {resources.map((result)=>(
  //       <CloudinaryImage key={result.public_id}
  //       width="400"
  // height="300"
  // imageData={result}
  // alt="an image of somthing"

  //       />
  //     ))}
  //     </div>

  )
}

export default FavoritesList

