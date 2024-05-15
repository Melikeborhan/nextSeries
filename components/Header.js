"use client"
import React, { useState } from 'react';
import  {useRouter}  from 'next/navigation';
import ThemeComp from '@/components/themeComp';
import { PiFilmSlateDuotone } from "react-icons/pi";

const Header = () => {
  const [keyword,setKeyword] = useState('')
  const router = useRouter();
  

  const searchFunc = (e)=>{
    if(e.key === 'Enter' &&  keyword.length>= 3 || e.type === 'click'){
      router.push(`/search/${keyword}`)
    }
  }
console.log('çalışıyor')
  return (
    <nav className="bg-gradient-to-r from-black via-red-800 to-red-900 flex lg:flex-row items-center justify-center lg:gap-5 md:gap-5 p-3 lg:p-12 h-20 w-full">

      <div className="lg:flex sm:flex sm:items-center sm:justify-between lg:items-center lg:justify-between  lg:gap-4 lg:px-8  sm:px-1">
        <div className="lg:p-10">
      <PiFilmSlateDuotone className='text-white  ' size={50}/>
      </div>
      <div className='lg:items-center lg:justify-between lg:flex-row '>
        <ThemeComp  size={50} />
        </div>
        
      </div>

      
      <div className="flex-grow flex items-center justify-center bg-white rounded-lg shadow">
  <input
    onChange={e => setKeyword(e.target.value)}
    onKeyDown={searchFunc} 
    className="dark:text-black font-bold w-full lg:w-auto flex-grow sm:px-2 sm:py-1 rounded-l-lg bg-transparent"
    type="text"
    placeholder="Search"
  />
  <button
    onClick={searchFunc}
    type="button"
    className="px-4 py-2 text-white bg-red-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-none font-semibold rounded-r-lg"
  >
    Search
  </button>
</div>

      

      <div className="flex lg:gap-1 sm:gap-1 font-bold">
        <a href="/" className="lg:px-2 sm:px-1 text-base hover:text-black">About</a>
        <a href="/" className="lg:px-2 sm:px-1 text-base hover:text-black">Sign in</a>
      </div>
    </nav>
  );
}

export default Header