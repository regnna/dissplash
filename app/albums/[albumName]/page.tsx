
import { CldImage } from "next-cloudinary";
// import UploadButtton from "./upload-button";
import cloudinary from "cloudinary"
// import CloudinaryImage from "./cloudinary-image";
import AlbumGrid from "./album-grid";
import { SearchResult } from "@/app/gallery/page";
import CloudinaryImage from "@/app/gallery/cloudinary-image";
import { ForceRefresh } from "@/components/force-refresh";



const GalleryPage =async ({
  params:{
    albumName
  }
}:{params:{albumName:string}}) => {
  const results=await cloudinary.v2.search
  .expression(`resource_type:image AND folder=${albumName}`)
  .sort_by('created_at','desc')
  .with_field('tags')
  .max_results(30)
  .execute() as {resources:SearchResult[]};


  // console.log("results",results)
  // .then(result=>console.log(result));
  // console.log(results)
  return (
    <main >
      <ForceRefresh/>
      <div className="flex flex-col gap-8">
      <div className="flex justify-between">
      <h1 className=" text-4xl font-bold">{albumName}'s  Album   </h1>
      </div>
      {/* <GalleryGrid
      images={results.resources}
      /> */}
<AlbumGrid images={results.resources}/>
      </div>
    </main>
  )
}

export default GalleryPage

