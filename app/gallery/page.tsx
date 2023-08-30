
import { CldImage } from "next-cloudinary";
import UploadButtton from "./upload-button";
import cloudinary from "cloudinary"
import CloudinaryImage from "./cloudinary-image";

type SearchResult={
  public_id:string
}

const GalleryPage =async () => {
  const results=await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('created_at','desc')
  .max_results(30)
  .execute() as {resources:SearchResult[]};
  // .then(result=>console.log(result));
  // console.log(results)
  return (
    <main >
      <div className="flex flex-col gap-8">
      <div className="flex justify-between">
      <h1 className=" text-4xl font-bold">Gallery</h1>
      <UploadButtton/>
      </div>
      <div className="grid grid-cols-4 gap-4">
      {results.resources.map((result)=>(
        <CloudinaryImage key={result.public_id}
        width="400"
  height="300"
  src={result.public_id}
  alt="an image of somthing"
        />
      ))}
      </div>
      </div>
    </main>
  )
}

export default GalleryPage

