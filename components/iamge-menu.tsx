import {
  Cloud,
  Github,
  LifeBuoy,
  LogOut,
  User,
  ImagePlus,
  FolderPlus

} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu from "./iconz/menu"
import { AddToAlbumDialog } from "./add-to-album"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"

export function ImageMenu({image}:{image:SearchResult}) {
  const [open,setOpen]=useState(false)
  return (
    <div className="absolute top-2 right-2">
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" className="w-8 h-8 p-0"><Menu/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48">
        {/* <DropdownMenuLabel className="text-center">IMAGE</DropdownMenuLabel>
        <DropdownMenuSeparator /> */}
        {/* <DropdownMenuGroup > */}
          <DropdownMenuItem className="grid grid-flow-col" asChild onClick={()=>setOpen(false)}>

            <AddToAlbumDialog
image={image} onClose={()=>setOpen(false)}
            />
          </DropdownMenuItem>
        {/* </DropdownMenuGroup> */}
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
