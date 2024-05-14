"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { FaRegMoon } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false)
  const {systemTheme,theme,setTheme} = useTheme()


  useEffect(()=>{
    setMounted(true)

  },[])

  //theme rengı kontrolu 
  const themeMode = theme === "system" ? systemTheme : theme


  return (
    <div>
      {
        mounted && (
          themeMode === "dark" ? 
          <CiLight onClick={() => setTheme('light')}    className='cursor-pointer ' size={25}   />:
          <FaRegMoon  onClick={() => setTheme('dark')}  className='cursor-pointer text-white' size={25}   />
        )
      }
        
    </div>
  )
}

export default ThemeComp