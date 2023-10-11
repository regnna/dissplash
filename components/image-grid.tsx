import CloudinaryImage from '@/app/gallery/cloudinary-image'
import { SearchResult } from '@/app/gallery/page'
import React, { ReactNode } from 'react'

const max_cols=4



const ImageGrid = ({images,getImage}:{images:SearchResult[],getImage:(imageData:SearchResult)=>
  ReactNode;
}) => {
  function getColumns(colIndex:number){
    return images.filter((resource, idx)=>
       idx%max_cols===colIndex
    )
  }
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {[getColumns(0),getColumns(1),getColumns(2),getColumns(3)].map((column,idx)=> <div key={idx} className="flex flex-col gap-4">
{column.map(getImage)}
        </div>)}

      </div>
  )
}

export default ImageGrid
