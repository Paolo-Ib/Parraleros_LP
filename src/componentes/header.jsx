"use client"
import Image from 'next/image';
import { motion } from "motion/react";

export default function Header() {
  return (
    <header className="flex justify-between items-center text-left"> 
    <motion.div
    initial={{ opacity: 0.25, scale: 0.7 }} // Estado inicial al cargar
    animate={{ opacity: 1, scale: 1 }} // Animación al aparecer
    transition={{ duration: 1 }} // Duración de la animación
    whileHover={{ scale: 1.15 }} // Efecto de zoom al pasar el mouse
    >
      <Image src="/Logo_icono.png" alt="Logo_parralero" width="150" height="150" className='rounded-full' />
    </motion.div>
    <div className='text-left'>
      <h1 className='text-7xl text-gray-600 hover:text-white font-titulo'><b>Parraleros</b></h1>
      <h2 className='text-2xl text-black hover:text-white font-subtitulo'>Espacios Sombreados con estilo</h2>
      </div>
    </header>
  );
}
