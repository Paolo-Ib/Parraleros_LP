import React from 'react'
import Image from "next/image";

export default function Banner() {
  return (
      <section>
    <div className="flex justify-center py-4">
      <Image 
        src="/LP_web.png" 
        alt="Logo Parraleros" 
        width={1200} 
        height={800} 
        className="object-cover"
      />
    </div>
      <div className='text-center px-6'>
      <h1 className='text-2xl'>Contactános</h1>
      </div>
    </section>
  )
}

