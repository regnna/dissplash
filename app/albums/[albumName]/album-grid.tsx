// 'use state'
import { CldImage } from "next-cloudinary";
// import UploadButtton from "./upload-button";
import cloudinary from "cloudinary"
// import CloudinaryImage from "./cloudinary-image";
import ImageGrid from "@/components/image-grid";
// import { SearchResult } from "./page";
import { SearchResult } from "@/app/gallery/page";
import CloudinaryImage from "@/app/gallery/cloudinary-image";




const AlbumGrid = ({images}:{images:SearchResult[]}) => {


  // console.log("results",results)
  // .then(result=>console.log(result));
  // console.log(results)
  return (

<ImageGrid images={images} getImage={(imageData:SearchResult)=>{
  return<CloudinaryImage key={imageData.public_id}
        width="400"
  height="300"
  imageData={imageData}
  // path='/gallery'
  alt="an image of somthing"
        />
}}/>

  )
}

export default AlbumGrid

