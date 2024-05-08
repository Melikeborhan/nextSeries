import React, { Children } from 'react'

export const Layout = ( {children}) => {
  return (
   <html lang='en'>
    <body>
    {children}
    </body>

   </html>
  )
}
export default Layout