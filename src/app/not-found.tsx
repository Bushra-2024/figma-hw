// pages/404.js (or wherever your 404 error page is)
import React from 'react'
import img from '../../public/404-error-page-svg-animation.gif'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <Image 
        src={img} 
        alt="img" 
        layout="fill" 
        objectFit="cover" 
        quality={100} 
		  className="object-cover"
		 />
    </div>
  )
}

export default NotFound
