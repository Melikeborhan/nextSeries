"use client"
import React from 'react';
import { TiSocialGithub, TiSocialGooglePlusCircular } from "react-icons/ti";


// Genel yönlendirme fonksiyonu
const Footer = () => {
  
  const redirectTo = (url) => {
    window.location.href = url;
  };

  return (
    <div>
      <footer className='h-24 w-full bg-gradient-to-r from-red-900 via-red-800 to-black'>
        <div className='flex cursor-pointer justify-center items-center space-x-2'>
          <TiSocialGithub size={48} onClick={() => redirectTo('https://github.com/')} />
          <TiSocialGooglePlusCircular size={30} onClick={() => redirectTo('https://www.google.com/')} />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
