"use client"
import { Button } from '@/components/ui/button';
import { CldUploadButton } from 'next-cloudinary';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
type UploadResult={
  info: {
    public_id: string;
  };
  event:"success";
};
const UploadButtton = () => {
const [imageId,setImageId]=useState("");
const router=useRouter();
  return (
    <Button
      variant='secondary' asChild
      className="hover:cursor-pointer">
        <div>

       <CldUploadButton
      onUpload={(reslt: UploadResult)=>{
        setImageId(reslt.info.public_id);
        setTimeout(() => {
        router.refresh();

        }, 2000);
      }}
      uploadPreset="oi8qde66" >
<div className='flex flex-row'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 mr-3 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
</svg>

<h2>Upload</h2>
</div>
      </CldUploadButton>
      </div>
      </Button>
  )
}

export default UploadButtton

