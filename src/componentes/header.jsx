import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <div className="flex justify-between items-center text-left"> 
    <div>
      <Image src="/Logo_icono.png" alt="Logo_parralero" width="150" height="150" className='rounded-full' />
    </div>
    <div className='text-left'>
      <h1 className='text-5xl text-black hover:text-white'><b>Parraleros</b></h1>
      <h2 className='text-2xl text-black hover:text-white'>Espacios Sombreados con estilo</h2>
      </div>
    </div>
  );
}