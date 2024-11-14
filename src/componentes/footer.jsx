"use client"
import { FaWhatsappSquare, FaInstagramSquare, FaFacebookSquare } from "react-icons/fa";
import { sendGTMEvent } from '@next/third-parties/google';

export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-6 text-center hover:bg-amber-400">
      <div className="flex flex-col items-center space-y-2">
        {/* Información de contacto */}
        <div className="flex items-center space-x-4 hover:text-black">
          <FaWhatsappSquare size={40} className="text-green-500 hover:text-green-700 cursor-pointer" />
          <p className="text-2xl">
            <a 
            href="https://wa.me/+5493704836752"
            onClick={() => sendGTMEvent({ event: 'click_link_GV', value: '17.000' })}
            target="_blank" 
            rel="noopener noreferrer">
              Gustavo: +549 3704-836752
            </a>
            --|--    
            <a 
            href="https://wa.me/+5493704507728" 
            onClick={() => sendGTMEvent({ event: 'click_link_PI', value: '17.000' })}
            target="_blank" 
            rel="noopener noreferrer">
              Paolo: +549 3704-507728
            </a>
          </p>
        </div>
        
        {/* Redes Sociales */}
        <div className="flex space-x-6 mt-4 hover:text-black">
          {/*<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare size={30} className="text-blue-600 hover:text-blue-800" />
          </a>*/}
          <p>Seguinos en:</p>
          <a 
          href="https://www.instagram.com/parraleros" 
          onClick={() => sendGTMEvent({ event: 'click_link_IG', value: '1000' })}
          target="_blank" 
          rel="noopener noreferrer"
          >
            <FaInstagramSquare size={40} className="text-pink-500 hover:text-pink-700 cursor-pointer" />
          </a>
          {/*<a href="https://wa.me/+5493704502381" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare size={30} className="text-green-500 hover:text-green-700" />
          </a>*/}
        </div>
      </div>
    </footer>
  );
}
