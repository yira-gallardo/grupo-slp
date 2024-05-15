"use client";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import dynamic from "next/dynamic";
import Image from "next/image";

const Swiper = dynamic(() => import("swiper/react").then((mod) => mod.Swiper), {
  ssr: false,
});

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      className="my-8 mx-auto bg-[#F4F3EF] "
    >
      <SwiperSlide>
        <div className="flex items-center h-[600px]">
          <div className="w-1/2 pl-24 py-16">
            <h3 className="text-6xl font-bold text-left mb-8">Visión</h3>
            <p className="text-2xl text-left leading-loose">
              Ofrecer soluciones integrales y específicas en iluminación para
              diversos espacios conceptuales y funcionales, brindando
              oportunidades de negocios para nuestros clientes.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src="/img/img-1.png"
              alt="Lámpara decorativa"
              width={600}
              height={600}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center h-[600px]">
          <div className="w-1/2 pl-24 py-16">
            <h3 className="text-6xl font-bold text-left mb-8">Misión</h3>
            <p className="text-2xl text-left leading-loose">
              Ser la empresa líder en el ramo de la iluminación, responsable,
              eficiente y comprometida con el medio ambiente, teniendo como
              prioridad la satisfacción del cliente. Ofreciendo soluciones
              innovadoras y productos de excelente calidad.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src="/img/img-5.png"
              alt="Lámpara decorativa"
              width={600}
              height={600}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center h-[600px]">
          <div className="w-1/2 pl-24 py-16">
            <h3 className="text-6xl font-bold text-left mb-8">Valores</h3>
            <p className="text-2xl text-left leading-loose">
              Respeto por nuestros clientes con productos de calidad y
              durabilidad. Trabajo en equipo, ofreciendo a nuestros socios la
              oportunidad de desarrollar sus proyectos y negocios. Compromiso
              con el cuidado del medio ambiente y el ahorro energético.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src="/img/img-6.png"
              alt="Lámpara decorativa"
              width={600}
              height={600}
            />
          </div>
        </div>
      </SwiperSlide>
      {/* Add more slides as needed */}
    </Swiper>
  );
};

export default Slider;
