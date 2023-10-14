"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Ghost } from "lucide-react";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export default  function EditPage({searchParams:{publicId},}:{searchParams:{publicId:string;}}) {
  // console.log(publicId);
  const [transformation,setTransformation]=useState<undefined|"gnerative-fill"|"blur"|"removeBackground"|"grayscale"|"pixelate">();
    const [prompt,setPrompt]=useState("")
    const [pendingPrompts,setPendingPrompts]=useState("")


  return(
    <main >
      <div className="flex flex-col gap-8">
      <div className="flex justify-between">
      <h1 className=" text-4xl font-bold">Edit {publicId}</h1>
      {/* <UploadButtton/> */}
      </div>
      <div className="flex gap-4">
       <Button variant="secondary" onClick={()=>setTransformation(undefined)}>Clear</Button>
       <div className="flex flex-col gap-4">
      <Button variant="default" onClick={()=>{setTransformation("gnerative-fill")
      setPrompt(pendingPrompts)
      }}>Apply Generative Fill</Button>
      <Input value={pendingPrompts} onChange={(e)=>setPendingPrompts(e.currentTarget.value)}></Input>
      </div>
      <Button variant="default" onClick={()=>setTransformation("blur")}>Apply Blur</Button>
      <Button variant="default" onClick={()=>setTransformation("grayscale")}>Convert to Gray</Button>
      <Button variant="default" onClick={()=>setTransformation("pixelate")}>Make it Pixel</Button>
      <Button variant="default" onClick={()=>setTransformation("removeBackground")}>Remove the Background</Button>


      </div>

      <div className="grid grid-cols-2 gap-12 justify-items-around">
<CldImage src={publicId} width={300} height={200} alt={`Not Available Image ${publicId}`}/>
{transformation === "gnerative-fill" &&
<CldImage src={publicId} width="300" height={200} alt="Generative-Fill"
crop="pad"
fillBackground={{
  prompt,
}}/>
}
{transformation === "blur" &&
<CldImage src={publicId} width="300" height={200} alt="bluring the image"
crop="pad"
blur="800"/>
}
{transformation === "grayscale" &&
<CldImage src={publicId} width="300" height={200} alt="grayscaling image"
crop="pad"
grayscale/>
}
{transformation === "pixelate" &&
<CldImage src={publicId} width="300" height={200} alt="pixelate"
crop="pad"
pixelate/>
}

{transformation === "removeBackground" &&
<CldImage src={publicId} width="300" height={200} alt="some image"
crop="pad"
removeBackground/>
}
</div>
      </div>
    </main>
  )

}
