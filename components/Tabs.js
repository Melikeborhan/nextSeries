"use client"
import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


const Tabs = () => {
    const searchParams =useSearchParams()
    const genre = searchParams.get('genre') 


    // console.log("genre",genre);


    const tabs = [

        {
            name:"En Populer",
            url:"popular"
        },
        {
            name:"En Son",
            url:"lastest"
        },
        {
            name:"Yakında Gelecekler",
            url:"upcoming"
        }

    ]


  return (
    <nav className="bg-red-800 p-4 flex justify-center items-center h-16 shadow-2xl">
        <div className="flex  items-center gap-8">
            
            {
                tabs.map((tab,i)=> (
                    <Link className={`curser-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-6 text-gray-800" : "" }`} href={`/?genre=${tab.url}`}>{tab.name}</Link>                ))
            }

        </div>
        </nav>
  )
}

export default Tabs