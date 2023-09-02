
import { CldImage } from "next-cloudinary";
import cloudinary from "cloudinary"
import CloudinaryImage from "../gallery/cloudinary-image";
import UploadButtton from "../gallery/upload-button";
import { SearchResult } from "../gallery/page";



const Favorites =async () => {
  const results=await cloudinary.v2.search
  .expression('resource_type:image AND tags=favorite')
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
      <h1 className=" text-4xl font-bold">Favorites</h1>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
      {results.resources.map((result)=>(
        <CloudinaryImage key={result.public_id}
        width="400"
  height="300"
  imageData={result}
  path='/favorites'
  alt="an image of somthing"
        />
      ))}
      </div>
      </div>
    </main>
  )
}

export default Favorites

