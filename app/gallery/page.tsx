
import { CldImage } from "next-cloudinary";
import UploadButtton from "./upload-button";
import cloudinary from "cloudinary"
import CloudinaryImage from "./cloudinary-image";
import ImageGrid from "@/components/image-grid";
import GalleryGrid from "./gallery-grid";
import SearchForm from "./search-form";

export type SearchResult={
  public_id:string;
  tags:string[]
}

const GalleryPage =async ({searchParams:{search},}:{searchParams:{search:string;}}) => {
  const results=await cloudinary.v2.search
  .expression(`resource_type:image${search? ` AND tags=${search}`:""}`)
  .sort_by('created_at','desc')
  .with_field('tags')
  .max_results(30)
  .execute() as {resources:SearchResult[]};


  // console.log("results",results)
  // .then(result=>console.log(result));
  // console.log(results)
  return (
    <main >
      <div className="flex flex-col gap-8">
      <div className="flex justify-between">
      <h1 className=" text-4xl font-bold">Gallery</h1>
      <UploadButtton/>
      </div>
      <SearchForm initialSearch={search}/>
      {/* <GalleryGrid
      images={results.resources}
      /> */}
<ImageGrid images={results.resources} getImage={(imageData:SearchResult)=>{
  return<CloudinaryImage key={imageData.public_id}
        width="400"
  height="300"
  imageData={imageData}
  // path='/gallery'
  alt="an image of somthing"
        />
}}/>

      </div>
    </main>
  )
}

export default GalleryPage

