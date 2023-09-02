import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { Inter } from 'next/font/google'
import { Great_Vibes } from 'next/font/google';


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const greatVibes = Great_Vibes({
  weight:'400',
  subsets: ['latin'],
  variable: '--font-great-vibes',
})

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav() {
  return (
    // <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center ">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <h1 className='font-mono text-4xl'>{siteConfig.name}</h1>
      </Link>

    // </div>
  )
}
