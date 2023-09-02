"use server"
import cloudinary from "cloudinary"
import { revalidatePath } from "next/cache"

export async function setAsFavoriteAction(public_id:string,isFavorite:boolean,path:string)
{

  if (isFavorite){
// console.log("removing fovorite from "+public_id)
await cloudinary.v2.uploader.remove_tag("favorite",[public_id])

  }
  else{

    // console.log("Adding favorites ",public_id)
await cloudinary.v2.uploader.add_tag("favorite",[public_id])



  }
revalidatePath(path);

}
