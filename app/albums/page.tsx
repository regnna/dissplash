
import { CldImage } from "next-cloudinary";
// import UploadButtton from "./upload-button";
import cloudinary from "cloudinary"
// import CloudinaryImage from "./cloudinary-image";
import ImageGrid from "@/components/image-grid";
import { AlbumCard } from "./album-card";
// import GalleryGrid from "./gallery-grid";

export type Folder={
  name:string,path:string
}

const AlbumsPage =async () => {
  const {folders}=(await cloudinary.v2.api.root_folders()) as {
    folders:Folder[]
  }
  // console.log(results)


  // console.log("results",results)
  // .then(result=>console.log(result));
  // console.log(results)
  return (
    <main >
      <div className="flex flex-col gap-8">
      <div className="flex justify-between">
      <h1 className=" text-4xl font-bold">Albums</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
      {folders.map(folder=><AlbumCard key={folder.path}
      folder={folder}/>)}
</div>
      </div>
    </main>
  )
}

export default AlbumsPage

