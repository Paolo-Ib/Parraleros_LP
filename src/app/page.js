import Header from "@/componentes/header";
import Footer from "@/componentes/footer";
import Presentacion from "@/componentes/present";
import Variedades from "@/componentes/variety";
import Carrusel from "@/componentes/carrusel";
import Image from "next/image";
import Banner from "@/componentes/banner";
import { agbalumo, poppins, montserrat } from "@/lib/fonts";

const slides = [
  "/Parral01.png",
  "/Parral06.png",
 "/Parral09.png",
  "/Parral11.png",
  "/Parral14.png",
];

export default function Home() {
  return (
    
    <main className={`${agbalumo.variable} ${poppins.variable} ${montserrat.variable}`}>
      <div className="px-8 sm:px-8 py-2 sm:py-3 bg-amber-400 hover:bg-gray-500">
        <Header />
      </div>
      <div>
        <Presentacion />
      </div>
      <div className="justify-center">
        <div className="min-w-96">
          <Carrusel >
            {slides.map((e, index) => (
              <Image key={index} src={e} alt="Slides" /*layout="responsive"*/ width={1200} height={800} />
            ))}
          </Carrusel>
          </div>
        </div>
      <div>
        <Variedades />
        <Banner />
      </div>
      <div>
        <Footer />
      </div>
      </main>
    
  );
}
