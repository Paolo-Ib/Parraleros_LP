"use client"
import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Carrusel( {children: slides}) {

const [curr, setCurr] = useState(0);

const prev = () =>
  setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
const next = () =>
  setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))
/*
  return (
    <div className='overflow-hidden relative m-5 max-w-full'>
    <div 
    className='flex transition-transform ease-out duration-500'
    style={{ transform: `translateX(-${curr * 100}%)` }}
    >
      {slides}
    </div>
    <div className='absolute inset-0 flex items-center justify-between p-4'>
      <button 
      onClick={prev} 
      className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
      >
        <FiChevronLeft size={40}  />
      </button>
      <button 
      onClick={next} 
      className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
      >
        <FiChevronRight size={40} />
      </button>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            key={i}
            />
          ))}
        </div>
        </div>
      </div>
    </div>
  
  )
}

*/

return (
  <div className="relative m-5 overflow-hidden max-w-screen-lg mx-auto">
    {/* Contenedor de las imágenes */}
    <div
      className="flex transition-transform ease-out duration-500"
      style={{ transform: `translateX(-${curr * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-full" // Asegura que cada slide ocupe el 100% del ancho
        >
          {slide}
        </div>
      ))}
    </div>

    {/* Controles del carrusel */}
    <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 lg:px-8">
      <button
        onClick={prev}
        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
      >
        <FiChevronLeft size={40} />
      </button>
      <button
        onClick={next}
        className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
      >
        <FiChevronRight size={40} />
      </button>
    </div>

    {/* Indicadores del carrusel */}
    <div className="absolute bottom-4 w-full flex justify-center">
      <div className="flex items-center gap-2">
        {slides.map((_, i) => (
          <div
            className={`transition-all w-3 h-3 bg-white rounded-full ${
              curr === i ? "p-2" : "bg-opacity-50"
            }`}
            key={i}
          />
        ))}
      </div>
    </div>
  </div>
);
}