// 'use client'
import { cn } from "@/lib/utils"
import { Button } from "./button"
import cloudinary from "cloudinary"


import Link from "next/link"
import { Folder } from "@/app/albums/page"
import { useState } from "react"
const SideMenu = async () => {
  const {folders}=(await cloudinary.v2.api.root_folders()) as {
    folders:Folder[]
  }
  // const [show,setShow]=useState(false)
  return (
     <div className={cn("pb-12 w-1/6 h-screen bg-accent fixed")}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h1 className="mb-2 px-4 text-lg font-semibold tracking-tight uppercase bg-secondary rounded-lg">
            Manage
          </h1>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start font-extrabold" asChild>
              <Link href="/gallery">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 h-4 w-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
              Gallery
              </Link>
            </Button>
            <Button asChild     variant="ghost"  className="w-full justify-start font-extrabold">
              <Link href="/albums">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 w-4 h-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
</svg>
              Albums
</Link>

            </Button>

             {folders.map((folder:any)=>(
            <Button key={folder.name} asChild
            className="w-full justify-start flex gap-2" variant="ghost">
              <Link href={`/albums/${folder.path}`} className="pl-8">{folder.name}</Link>
            </Button>
            ))}

            <Button variant="ghost" className="w-full justify-start font-extrabold" asChild>
              <Link href='favorites'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-2 h-4 w-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

              Favourite
              </Link>
            </Button></div>
            </div>
            </div>
            </div>
  )
}

export default SideMenu
