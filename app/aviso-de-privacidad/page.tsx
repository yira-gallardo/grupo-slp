"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AvisoDePrivacidad() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionToggle = (index: any) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  // AQUI AGREGAS Y QUITAS PREGUNTAS Y RESPUESTAS
  const accordionData = [
    {
      title: "¿Qué datos personales recabamos?",
      content:
        "Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar tus datos personales de distintas formas: cuando nos los proporcionas directamente, cuando visitas nuestro sitio de Internet o utilizas nuestros servicios en línea y cuando obtenemos información a través de otras fuentes que están permitidas por la ley.",
    },
    {
      title: "¿Para qué fines utilizamos tus datos personales?",
      content:
        "Utilizamos tus datos personales para las siguientes finalidades: finalidades administrativas relacionadas con el desempeño de las obligaciones contractuales y/o comerciales relativas, así como para el desempeño de las obligaciones de ley aplicables para darte de alta como cliente o proveedor, con fines de contratación.",
    },
    {
      title: "¿Cómo puedes ejercer tus derechos ARCO?",
      content:
        "Puedes ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO) al tratamiento de tus datos personales a través de la presentación de la solicitud correspondiente. Para más información sobre los procedimientos y requisitos para el ejercicio de estos derechos, puedes ponerte en contacto con nuestro departamento de datos personales.",
    },
  ];

  return (
    <main className="relative">
      {/* HEADER */}
      <header className="relative flex items-center px-16 py-32">
        <div className="relative flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }} // Ajusta el delay según necesites
          >
            <h3 className="text-base font-semibold mb-2.5">
              INFORMACIÓN GENERAL
            </h3>
          </motion.div>
          <div className="divider w-[200%] h-[1px] bg-black my-8 relative left-[-100%]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2 className="text-left text-5xl font-bold">
              Aviso de Privacidad
            </h2>
          </motion.div>

          {/* Segunda división */}
          <div className="divider w-[200%] h-[1px] bg-black my-8 relative left-[-100%]" />

          {/* Sección de logo con animación */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="mt-2 ml-4 flex items-center pt-12 ">
              <Image
                width={500}
                height={500}
                src="/img/logos.png"
                alt="Logo 1"
                className="h-[20px] w-auto"
              />
            </div>
          </motion.div>
        </div>
      </header>
      {/* INFO */}
      <section className="bg-white px-16 mb-4 text-black">
        <p className="text-black">
          Con el fin de asegurar la protección y privacidad de tus datos
          personales, así como de regular el acceso, rectificación, cancelación
          y oposición del manejo de los mismos, hemos desarrollado una política
          de privacidad que ayude a comprender la manera en que se utiliza tu
          información en conformidad con el artículo 16 de la Constitución
          Política de los Estados Unidos Mexicanos y los artículos 1, 15 y 16 de
          la Ley Federal de Protección de Datos Personales en Posesión de
          Particulares.
        </p>
        <p className="text-black">
          Por lo anterior, Comercializadora Soluciones Lumínicas Plus S.A. de
          C.V., persona moral debidamente constituida conforme a las leyes de la
          República Mexicana, con domicilio fiscal en Av. Lomas de Sotelo 1102
          int. 200 y 202, col. Lomas Hermosa, Miguel Hidalgo, Ciudad de México,
          México, es el responsable del tratamiento de tus datos personales.
          Recabamos tus datos para las siguientes finalidades: finalidades
          administrativas relacionadas con el desempeño de las obligaciones
          contractuales y/o comerciales relativas, así como para el desempeño de
          las obligaciones de ley aplicables para darte de alta como cliente o
          proveedor, con fines de contratación.
        </p>
      </section>
      {/* ACCORDION */}
      <section className="bg-white mb-4 text-black p-32">
        <div className="accordion">
          {accordionData.map((item, index) => (
            <div key={index} className="accordion-item mb-8">
              <div
                className="accordion-title flex text-2xl font-bold py-8 border-t-4 border-black cursor-pointer"
                onClick={() => handleAccordionToggle(index)}
              >
                <div>{item.title}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ml-auto transition-transform duration-200 ${
                    openAccordion === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                className={`accordion-content transition-max-height duration-200 overflow-hidden ${
                  openAccordion === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="pt-4">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
