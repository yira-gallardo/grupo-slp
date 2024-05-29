"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Nosotros() {
  return (
    <main className="relative">
      {/* HEADER */}
      <header className="relative h-screen flex items-center p-4 lg:pl-20 custom-mt-20 text-white">
        <div
          className="absolute top-0 right-0 w-full h-full z-[-1]  bg-cover bg-center"
          style={{ backgroundImage: "url('/img/nosotros-bg.png')" }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[-1]"></div>
        <div className="relative flex flex-col justify-center lg:justify-between h-full w-full">
          <div />
          <div className="max-w-[600px]">
            <div className="divider w-[200%] h-[1px] bg-white my-8 relative left-[-100%]" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1 className="text-6xl font-bold ml-4">GRUPO SLP</h1>
            </motion.div>
            <div className="divider w-[200%] h-[1px] bg-white my-8 relative left-[-100%]" />
          </div>
          <div className="hidden lg:flex w-full justify-around p-8">
            <div className="flex items-center">
              <Image
                width={200}
                height={100}
                src="/img/logo-1.png"
                alt="Logo 1"
                className="h-[20px] w-auto"
              />
            </div>
            <div className="flex items-center">
              <Image
                width={200}
                height={100}
                src="/img/logo-2.png"
                alt="Logo 2"
                className="h-[20px] w-auto"
              />
            </div>
            <div className="flex items-center">
              <Image
                width={200}
                height={100}
                src="/img/logo-3.png"
                alt="Logo 3"
                className="h-[20px] w-auto"
              />
            </div>
            <div className="flex items-center">
              <Image
                width={200}
                height={100}
                src="/img/logo-4.png"
                alt="Logo 4"
                className="h-[20px] w-auto"
              />
            </div>
            <div className="flex items-center">
              <Image
                width={200}
                height={100}
                src="/img/logo-5.png"
                alt="Logo 5"
                className="h-[20px] w-auto"
              />
            </div>
          </div>
          <div className="text-center p-4 lg:p-0 mt-2 block w-full lg:hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <Image
                width={200}
                height={100}
                src="/img/logo-1.png"
                alt="Logo 1"
                className="h-[20px] w-auto inline-block m-2"
              />
              <Image
                width={200}
                height={100}
                src="/img/logo-2.png"
                alt="Logo 2"
                className="h-[20px] w-auto inline-block m-2"
              />
              <Image
                width={200}
                height={100}
                src="/img/logo-3.png"
                alt="Logo 3"
                className="h-[20px] w-auto inline-block m-2"
              />
              <Image
                width={200}
                height={100}
                src="/img/logo-4.png"
                alt="Logo 4"
                className="h-[20px] w-auto inline-block m-2"
              />
              <Image
                width={200}
                height={100}
                src="/img/logo-5.png"
                alt="Logo 5"
                className="h-[20px] w-auto inline-block m-2"
              />
            </motion.div>
          </div>
        </div>
      </header>
      {/* QUIENES SOMOS */}
      <section className="bg-white p-4 lg:pt-16 lg:px-16 flex items-center mb-4">
        <div className="block lg:flex gap-8 items-center">
          <div className="w-full lg:w-1/2 mb-4">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: 10 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Image
                width={500}
                height={500}
                src="/img/img-11.png"
                alt="Misión"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">Quiénes somos</h2>
              <p className=" text-gray-700">
                Somos una empresa 100% mexicana, que nace de una familia
                dedicada a la construcción. Iniciamos vendiendo lámparas básicas
                en autoservicios y abarrotes; sin embargo, hoy somos reconocidos
                como especialistas en iluminación, tanto de interiores como de
                exteriores, con productos certificados que enfatizan en su
                diseño y durabilidad.
              </p>
              <p>
                Tenemos más de 20 años en el mercado, y nuestra oferta de valor
                es la atención personalizada: no solo ofrecemos luminarias,
                brindamos un servicio que incluye la asistencia al momento de
                instalar. Adicionalmente, ¡estamos comprometidos con nuestro
                planeta! Cuidamos que cada producto cuenten con tecnologías
                innovadoras para el ahorro de energía y materiales que se puedan
                reciclar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* MAS INFO */}
      <section className="bg-white p-4 lg:px-16 mb-4">
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.95, x: 10 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 my-6">
            + sobre grupo SLP
          </h2>
          <p>
            Nuestro despunte comenzó con la introducción de las lámparas
            fluorescentes compactas; a partir de ello, hemos trabajado hasta
            convertirnos en un referente, con soluciones integrales y dos
            unidades de negocio: comercializadora y fábrica.
          </p>
          <p>
            La Familia SLP está compuesta por diferentes profesionales,
            constantemente capacitados, que aportan su conocimiento y
            experiencia para brindarte atención oportuna. Contamos con un equipo
            de investigación y desarrollo, equipo de proyectos, especialista en
            productos, mercadotecnia, administración, distribución, ingeniería,
            fuerza de ventas, manufactura, calidad, entre otras áreas
            especializadas.
          </p>
          <p>
            En la planta, gran parte de la nómina son mujeres; ellas se encargan
            de armar los productos, de realizar ensamble, empalme y las pruebas
            de calidad previas a la comercialización.
          </p>
          <p>
            Nuestras oficinas en China tienen la tarea de estudiar la calidad de
            las luminarias que se importan, hacen la compra de productos y
            abastecen a las bodegas. Contamos con tres bodegas ubicadas
            estratégicamente; dos en el Valle de México y una en Monterrey.
            Desde ellas se realiza la distribución de luminarias por toda la
            República Mexicana, de acuerdo con tu ubicación y la de cada
            cliente. Nuestra bodega más importante se encuentra en Tlanepark; un
            parque industrial a las afueras de la Ciudad de México, con
            infraestructura especialmente creada para una ágil introducción y
            extracción de productos. Este punto es conocido como nuestro Centro
            de Distribución (CEDI), mismo que destina un piso completo al área
            de manufactura.
          </p>
          <p>
            Equipada con lo último en tecnología e instrumentos profesionales,
            nuestra fábrica transforma materias primas en artículos duraderos.
            Tiene la capacidad de crear hasta 30,000 configuraciones de
            lámparas, y la indumentaria correcta para pruebas de calidad,
            monitoreo y garantía.<br></br>
            <b>¡Probamos el 100% de los productos que fabricamos!</b>
          </p>
        </motion.div>
      </section>
      {/* HEERAMIENTAS */}
      <section className="bg-white p-4 lg:px-16 lg:pt-8">
        <div className="block lg:flex gap-8 items-center">
          <div className="lg:hidden w-full lg:w-1/2 mb-8">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Image
                width={500}
                height={500}
                src="/img/img-12.png"
                alt="Logo 5"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <h2 className="text-4xl font-bold mb-8">
                Entre nuestras herramientas destacan:
              </h2>
              <ul className="list-disc ml-5 space-y-3">
                <li>
                  <p>
                    Máquinas de medición para pruebas de IP (protección de
                    ingreso),
                    <br></br>
                    subacuáticas, fotométricas, temperatura de color, vibración
                    y envejecimiento acelerado.
                  </p>
                </li>
                <li>
                  <p>
                    Esfera de Ulbricht para evaluar la temperatura de cada
                    luminaria,
                    <br></br>
                    su calidad de luz, factor de potencia, consumo real de
                    energía, entre otros parámetros específicos <br></br> por
                    producto
                  </p>
                </li>
                <li>
                  <p>
                    Hornos para pintar, maquinaria para montar LEDs y hacer
                    ensambles.
                  </p>
                </li>
              </ul>
              <p className="pt-6">
                ¡Encuentra nuestros productos en tiendas físicas y también a
                través de nuestra tienda online! <br></br> Contamos con
                presencia en abarrotes y autoservicios;<br></br> sin embargo,
                podemos proveerte lámparas personalizadas y luminarias
                confeccionadas para proyectos únicos.
              </p>
            </motion.div>
          </div>
          <div className="hidden lg:block w-full lg:w-1/2">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Image
                width={500}
                height={500}
                src="/img/img-12.png"
                alt="Logo 5"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* MARCAS */}
      <section className="bg-white p-4 lg:px-16 lg:pt-8 mb-32">
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.95, x: -10 }}
          transition={{ duration: 1, delay: 0.1 }}
        >
          <h2 className="text-4xl font-bold mb-3">Nuestras marcas</h2>
          <p>¡Materializamos tus ideas a partir de nuestra experiencia!</p>
          <p>
            Trabajamos en ofrecerte soluciones personalizadas de acuerdo con tu
            espacio. Nuestra variedad de marcas posee los más altos índices de
            calidad y cumple con las normas requeridas en México, y algunas
            específicas dependiendo la familia de producto. ¡Todas nuestras
            luminarias tienen garantía de 1 a 7 años! Asimismo, tenemos
            luminarias customizables que elaboramos desde cero con atención y
            cuidado.
          </p>
          <ul className="mb-16">
            <li>
              <p>NOM-003</p>
            </li>
            <li>
              <p>NOM-058</p>
            </li>
            <li>
              <p>NOM-031</p>
            </li>
            <li>
              <p>NOM-030</p>
            </li>
            <li>
              <p>NOM-017</p>
            </li>
            <li>
              <p>NOM-028</p>
            </li>
            <li>
              <p>PAESE</p>
            </li>
            <li>
              <p>Hipoteca verde</p>
            </li>
          </ul>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.95, x: -10 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image
            width={200}
            height={100}
            src="/img/logo-9.png"
            alt="Logo 5"
            className="h-8 mt-16 mb-4"
          />
        </motion.div>
        {/* Brillamax */}
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.95, x: -10 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>
            Orgullosamente nuestra primera marca. Su calidad y variedad está
            dirigida a diferentes segmentos industriales; desde fábricas,
            oficinas, hospitales, escuelas, alumbrado público y reflectores,
            hasta productos decorativos. Gracias a su cuerpo hecho de aluminio,
            un vulvo de LED podría iluminar tus espacios durante todo el día.
            Además, soporta variaciones de voltaje y ayuda a disipar mejor el
            calor.
          </p>
          <p>
            <span className="font-bold text-gray-700">
              Este producto puede ser personalizado.
            </span>
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.95, x: -10 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image
            width={200}
            height={100}
            src="/img/logo-10.png"
            alt="Logo 5"
            className="h-8 mt-16 mb-4"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.95, x: -10 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>
            Enfocada al diseño arquitectónico, exteriores, paisajismo y
            luminarias subacuaticas.
          </p>
          <p>
            Es un producto de fabricación nacional, que se realiza en un tiempo
            máximo de dos semanas, pensado para grandes proyectos. Cuenta con
            más de 30,000 configuraciones hechas a tu medida, óptica para
            iluminación específica y colores que enfatizarán la belleza de tu
            espacio. Disponible en tecnología de radiofrecuencia y tecnología
            DMX.
          </p>
          <p>
            <span className="font-bold text-gray-700">
              Pregunta por nuestro servicio de asesoría y acompañamiento.
            </span>
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.95, x: -10 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image
            width={200}
            height={100}
            src="/img/logo-11.png"
            alt="Logo 5"
            className="h-8 mt-16 mb-4"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.95, x: -10 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>
            Enfocada al diseño arquitectónico, exteriores, paisajismo y
            luminarias subacuaticas.
          </p>
          <p>
            Es un producto de fabricación nacional, que se realiza en un tiempo
            máximo de dos semanas, pensado para grandes proyectos. Cuenta con
            más de 30,000 configuraciones hechas a tu medida, óptica para
            iluminación específica y colores que enfatizarán la belleza de tu
            espacio. Disponible en tecnología de radiofrecuencia y tecnología
            DMX.
          </p>
          <p>
            <span className="font-bold text-gray-700">
              Pregunta por nuestro servicio de asesoría y acompañamiento.
            </span>
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.95, x: -10 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Image
            width={30}
            height={120}
            src="/img/logo-12.png"
            alt="Logo 5"
            className="h-8 mt-16 mb-4"
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.95, x: -10 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>
            Enfocada al diseño arquitectónico, exteriores, paisajismo y
            luminarias subacuaticas.
          </p>
          <p>
            Es un producto de fabricación nacional, que se realiza en un tiempo
            máximo de dos semanas, pensado para grandes proyectos. Cuenta con
            más de 30,000 configuraciones hechas a tu medida, óptica para
            iluminación específica y colores que enfatizarán la belleza de tu
            espacio. Disponible en tecnología de radiofrecuencia y tecnología
            DMX.
          </p>
          <p>
            <span className="font-bold text-gray-700">
              Pregunta por nuestro servicio de asesoría y acompañamiento.
            </span>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
