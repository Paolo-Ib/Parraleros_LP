"use client"
import { motion } from "motion/react";

import Image from "next/image";

export default function Banner() {
  return (
      <section>
    <motion.div 
    className="flex justify-center py-4"
        initial={{ opacity: 0, scale: 0.8 }} // Estado inicial al cargar
        animate={{ opacity: 1, scale: 1 }} // Animación al aparecer
        transition={{ duration: 1 }} // Duración de la animación
        whileHover={{ scale: 1.1 }} // Efecto de zoom al pasar el mouse
    >
      <Image 
        src="/LP_web.png" 
        alt="Logo Parraleros" 
        width={1200} 
        height={800} 
        className="object-cover"
      />
    </motion.div>
      <div className='text-center px-6'>
      <h1 className='text-2xl'>Contactános</h1>
      </div>
    </section>
  )
}

