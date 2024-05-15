import "swiper/css"; // Para estilos básicos
import "swiper/css/navigation";
import Slider from "./components/Slider/Slider";
import Footer from "@/app/components/Footer/Footer";
import Nav from "@/app/components/Nav/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <div className="relative h-screen flex items-center pl-20 custom-mt-20">
        <div
          className="absolute top-0 right-0 w-full h-full z-[-1] blur"
          style={{ backgroundImage: "url('/img/img-1.png')" }}
        />
        <div className="relative flex flex-col items-start">
          <img src="/img/logo.png" alt="Imagen" className="h-28 w-52 ml-4" />
          <div className="text-white pt-10 pl-4">
            <p className="text-left text-5xl font-bold">Aportamos luz</p>
            <p className="text-left mb-1 text-4xl">a tu vida diaria</p>
          </div>
          <div className="mt-2 ml-4 flex items-center space-x-5 pt-12">
            <img src="/img/logo-1.png" alt="Logo 1" className="h-6 w-20 mr-2" />
            <img src="/img/logo-2.png" alt="Logo 2" className="h-6 w-20 mr-2" />
            <img src="/img/logo-3.png" alt="Logo 3" className="h-6 w-20 mr-2" />
            <img src="/img/logo-4.png" alt="Logo 4" className="h-6 w-10 mr-2" />
            <img src="/img/logo-5.png" alt="Logo 5" className="h-6 w-20 mr-2" />
          </div>
        </div>
      </div>
      <section
        className="bg-cover bg-center pt-20 pb-52"
        style={{ backgroundImage: "url('/img/img-3.png')" }}
      >
        <div className="container mx-auto px-4">
          <h2 className=" text-5xl text-black pt-16">
            Somos una empresa <br></br>
            <span className="font-bold">100% mexicana</span>
          </h2>
          <p className="text-black mt-4 py-10">
            Con una proyección mundial para los diferentes mercados de<br></br>
            iluminación. Buscamos innovar constantemente nuestros<br></br>
            productos, incrementando sus características técnicas para <br></br>
            ofrecer soluciones que se adapten a las necesidades <br></br>de
            cualquier proyecto.
          </p>
          <button className="mt-4 px-6 py-3 bg-transparent text-black border border-black rounded-md ">
            Más sobre Grupo SLP
          </button>
        </div>
      </section>
      <section className="flex flex-wrap items-center">
        <div className="mx-auto md:mx-0 w-full md:w-auto h-auto">
          <img src="/img/img-4.png" alt="" className="mx-auto md:mx-0" />
        </div>
        <div className="w-full md:w-1/2 bg-white p-8">
          <h2 className="text-5xl font-bold mb-4">
            Inversión <span className="text-blue-600">responsable</span>
          </h2>
          <p className="text-xl">
            Una pieza clave en el desarrollo y crecimiento de Grupo SLP ha
            <br></br> sido el desarrollo de soluciones cuidadosas con el medio
            ambiente
          </p>
          <br></br>
          <p className="text-xl font-bold">
            Buscamos que nuestros productos cumplan con las <br></br>
            características propias del ahorro de energía
          </p>
          <br></br>
          <p className="text-xl">
            <span className="font-bold">
              Contamos con un reconocimiento por parte del INAH{" "}
            </span>
            como una <br></br>
            empresa que respeta y acata las especificaciones de la iluminación
            <br></br>
            para piezas históricas que requieren cuidados especiales.
          </p>
        </div>
      </section>
      <section>
        <Slider />
      </section>
      <div className="bg-black text-white py-12 px-4 text-center pt-16">
        <h2 className="text-2xl font-semibold mb-6">
          Nuestras marcas son ejemplo de versatilidad y adaptabilidad, tenemos
          <br></br>
          la solución para cualquier proyecto, sin importar su tamaño
        </h2>
        <div className="flex justify-center items-center space-x-10">
          <div className="flex items-center space-x-4">
            <img
              src="/img/logos.png"
              alt="Philco Iluminación"
              className="h-12 "
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
