import Image from "next/image";

export default function Variedades() {
  return (
    <>
      <section className="py-12 px-12 border rounded-lg text-justify">
        <h2 className="text-3xl mb-4 text-center"><b>Parral de Sombra</b> - Características</h2>
        <p>Los Paños vienen de 150 cm por la medida deseada.</p>
        <p>Está compuesta de tela decorativa, super reforzada, antidesgarro y plastificada para que esté expuesta al sol (con filtro UV).</p>
        <p><b>Troqueladas al 75%</b> con forma de hoja, para que sientas que estás bajo la sombra de un árbol.</p>
        <p>Tenemos diferentes opciones de entrega, <b>sin unir</b> para que lo armes en tu casa y toda <b>armada</b> para que directamente la cuelgues.</p>
        <p>Medidas estandarizadas: en <b><i>3x2, 3x3, 3x4, 3x5 y 3x6 (m2)</i></b></p>
      </section>
      <section className="py-12 px-8 grid grid-cols-2 gap-2">

        <div className="p-4 border rounded-lg text-left bg-white">
          <h3 className="text-xl text-center">Linea Clasica</h3>
          <p><b>Filtro UV</b> (plastificada <b><i>del lado expuesto al sol</i></b>) <br />
            <br />
          </p>
          <Image src="/Clasica colores.png" alt="Clasica" width="500" height="300" className="object-cover mb-4 py-10 hover:shadow-2x1" />
        </div>

        <div className="p-4 border rounded-lg text-left bg-white">
          <h3 className="text-xl text-center">Linea Premium</h3>
          <p><b>Filtro UV</b> (plastificado <b><i>de ambos lados</i></b> con el toque justo de versatilidad)</p>
          <Image src="/Premium colores.png" alt="Premium" width="500" height="300" className="object-cover mb-4 py-10 hover:shadow-2xl" />
        </div>

      </section>
    </>
  );
}
