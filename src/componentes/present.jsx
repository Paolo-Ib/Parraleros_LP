import Image from "next/image";

export default function Presentacion() {
    return (
        <section className="py-12 bg-gray-100 text-left">
            <div className="container mx-auto text-lg text-gray-700">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4"><b>Parral de Sombra</b>, para tus espacios de comfort</h2>
                    <p className="">
                        Disfrutá de tus espacios frescos y sombreados al aire libre.
                    </p>
                    <p><b>La sensación de que estás bajo la sombra de un árbol.</b></p>
                    <p className="">
                        Son ideales para exteriores, quinchos, piscinas.
                    </p>
                </div>
                {/*<div className="columns-2 m-3">
                    <Image src="/Parral 01.jpeg" width="300" height="600" alt="Parra01" className="p-3" />
                    <Image src="/Parral 11.jpeg" width="300" height="600" alt="Parra11" className="p-3"/>
                    <Image src="/Parral 05.jpeg" width="300" height="800" alt="Parra05" className="p-3"/>
                    <Image src="/Parral 14.jpeg" width="300" height="600" alt="Parra14" className="p-3"/>
                </div>*/}
            </div>
        </section>
    );
}
