import Image from "next/image";

export default function Presentacion() {
    return (
        <section className="py-12 bg-gray-100 text-left">
            <div className="container mx-auto text-lg text-gray-700">
                <div className="text-center">
                    <h2 className="text-4xl mb-4"><b>Parral de Sombra</b>, para tus espacios de comfort</h2>
                    <p className="">
                        Disfrutá de tus espacios frescos y sombreados al aire libre.
                    </p>
                    <p><b>La sensación de que estás bajo la sombra de un árbol.</b></p>
                    <p className="">
                        Son ideales para exteriores, quinchos, piscinas.
                    </p>
                </div>
            </div>
        </section>
    );
}
