import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../public/global.css'
import Providers from './Providers'
import Tabs from '@/components/Tabs'


const Layout = ({children}) => {
  return (
    <html lang='en'>
      <title>Movies
      </title>
      
      <body>
    <Providers>
        <Header/>
        <Tabs/>
        
        {children}
        </Providers>
        <Footer/>
    
      
      </body>
  </html>
  )
}
export default Layout