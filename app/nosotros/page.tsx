"use client";
import React from "react";
import Image from "next/image";

export default function Nosotros() {
  return (
    <main className="relative">
      <div className=" text-white relative min-h-screen ">
        <div
          style={{ backgroundImage: "url('/img/nosotros-bg.png')" }}
          className="absolute bg-cover bg-center top-0 left-0 w-full h-full z-[-1] "
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[-1]"></div>
        <div className="absolute top-0 left-0 w-full h-full z-[0] flex flex-col justify-between">
          <div />
          <div className="pl-20 text-6xl font-semibold">
            <h1>GRUPO SLP</h1>
          </div>
          <div className="flex justify-around py-6 w-full">
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
        </div>
      </div>
      <section className="bg-white py-12 px-8 flex items-center">
        <div className="flex px-16 gap-16">
          <Image
            width={500}
            height={500}
            src="/img/img-11.png"
            alt="Misión"
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-4">Quiénes somos</h2>
          <p className=" text-gray-700">
            Somos una empresa 100% mexicana, que nace de una familia dedicada a
            la construcción. Iniciamos vendiendo lámparas básicas en
            autoservicios y abarrotes; sin embargo, hoy somos reconocidos como
            especialistas en iluminación, tanto de interiores como de
            exteriores, con productos certificados que enfatizan en su diseño y
            durabilidad.<br></br>
            <br></br>
            Tenemos más de 20 años en el mercado, y nuestra oferta de valor es
            la atención personalizada: no solo ofrecemos luminarias, brindamos
            un servicio que incluye la asistencia al momento de instalar.
            Adicionalmente, ¡estamos comprometidos con nuestro planeta! Cuidamos
            que cada producto cuenten con tecnologías innovadoras para el ahorro
            de energía y materiales que se puedan reciclar.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-20">
        <h2 className="text-3xl font-bold text-gray-800 my-6">
          + sobre grupo SLP
        </h2>
        <p className="text-gray-600 mb-4 ">
          Nuestro despunte comenzó con la introducción de las lámparas
          fluorescentes compactas; a partir de ello, hemos trabajado hasta
          convertirnos en un referente, con <br></br>soluciones integrales y dos
          unidades de negocio: comercializadora y fábrica.<br></br>
          <br></br> La Familia SLP está compuesta por diferentes profesionales,
          constantemente capacitados, que aportan su conocimiento y experiencia
          para brindarte atención oportuna.<br></br> Contamos con un equipo de
          investigación y desarrollo, equipo de proyectos, especialista en
          productos, mercadotecnia, administración, distribución, ingeniería,
          fuerza de <br></br>ventas, manufactura, calidad, entre otras áreas
          especializadas.<br></br> <br></br>En la planta, gran parte de la
          nómina son mujeres; ellas se encargan de armar los productos, de
          realizar ensamble, empalme y las pruebas de calidad previas a la
          <br></br>
          comercialización. <br></br>
          <br></br>Nuestras oficinas en China tienen la tarea de estudiar la
          calidad de las luminarias que se importan, hacen la compra de
          productos y abastecen a las bodegas. Contamos <br></br>con tres
          bodegas ubicadas estratégicamente; dos en el Valle de México y una en
          Monterrey. Desde ellas se realiza la distribución de luminarias por
          toda la República<br></br> Mexicana, de acuerdo con tu ubicación y la
          de cada cliente. Nuestra bodega más importante se encuentra en
          Tlanepark; un parque industrial a las afueras de la Ciudad <br></br>de
          México, con infraestructura especialmente creada para una ágil
          introducción y extracción de productos. Este punto es conocido como
          nuestro Centro de Distribución<br></br> (CEDI), mismo que destina un
          piso completo al área de manufactura. <br></br> <br></br>Equipada con
          lo último en tecnología e instrumentos profesionales, nuestra fábrica
          transforma materias primas en artículos duraderos. Tiene la capacidad
          de crear hasta <br></br>30,000 configuraciones de lámparas, y la
          indumentaria correcta para pruebas de calidad, monitoreo y garantía.
          <br></br>
          <span className="text-neutral-600 font-semibold">
            ¡Probamos el 100% de los productos que fabricamos!
          </span>
        </p>
      </div>
      <div className="flex justify-between items-center bg-white p-10 px-36 text-gray-800">
        <div className="w-2/3">
          <h2 className="text-4xl font-bold mb-4 ">
            Entre nuestras herramientas <br></br> destacan
          </h2>
          <ul className="list-disc ml-5 space-y-3">
            <li>
              Máquinas de medición para pruebas de IP (protección de ingreso),
              <br></br>
              subacuáticas, fotométricas, temperatura de color, vibración y
              <br></br>
              envejecimiento acelerado.
            </li>
            <li>
              Esfera de Ulbricht para evaluar la temperatura de cada luminaria,
              <br></br>
              su calidad de luz, factor de potencia, consumo real de energía,
              <br></br>
              entre otros parámetros específicos por producto
            </li>
            <li>
              Hornos para pintar, maquinaria para montar LEDs y hacer<br></br>
              ensambles.
            </li>
          </ul>
          <p className="pt-6">
            ¡Encuentra nuestros productos en tiendas físicas y también a través
            de <br></br> nuestra tienda online! Contamos con presencia en
            abarrotes y <br></br> autoservicios; sin embargo, podemos proveerte
            lámparas<br></br> personalizadas y luminarias confeccionadas para
            proyectos únicos.
          </p>
        </div>
        <div className="w-1/3 flex justify-center ">
          <Image
            width={500}
            height={500}
            src="/img/img-12.png"
            alt="Logo 5"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-white p-10 text-gray-800 px-36">
        <h2 className="text-4xl font-bold mb-3">Nuestras marcas</h2>
        <p className="mb-5">
          ¡Materializamos tus ideas a partir de nuestra experiencia!
        </p>
        <p className="mb-5">
          Trabajamos en ofrecerte soluciones personalizadas de acuerdo con tu
          espacio. Nuestra variedad de marcas posee los más altos índices de
          calidad y cumple con las<br></br> normas requeridas en México, y
          algunas específicas dependiendo la familia de producto. ¡Todas
          nuestras luminarias tienen garantía de 1 a 7 años! Asimismo, tenemos
          <br></br>
          luminarias customizables que elaboramos desde cero con atención y
          cuidado.
        </p>
        <ul className="list-none space-y-2 mb-5">
          <li>NOM-003</li>
          <li>NOM-058</li>
          <li>NOM-031</li>
          <li>NOM-030</li>
          <li>NOM-017</li>
          <li>NOM-028</li>
          <li>PAESE</li>
          <li>Hipoteca Verde</li>
        </ul>
        <Image
          width={200}
          height={100}
          src="/img/logo-9.png"
          alt="Logo 5"
          className="h-8 mr-1"
        />
        {/* Brillamax */}
        <p className="pt-16 ">
          Orgullosamente nuestra primera marca.
          <br></br> <br></br>Su calidad y variedad está dirigida a diferentes
          segmentos industriales; desde fábricas, oficinas, hospitales,
          escuelas, alumbrado público y reflectores, hasta productos <br></br>
          decorativos. Gracias a su cuerpo hecho de aluminio, un vulvo de LED
          podría iluminar tus espacios durante todo el día. Además, soporta
          variaciones de voltaje y ayuda a <br></br>disipar mejor el calor.
          <br></br>
          <br></br>
          <span className="font-bold text-gray-700">
            Este producto puede ser personalizado.
          </span>
        </p>
        <Image
          width={200}
          height={100}
          src="/img/logo-10.png"
          alt="Logo 5"
          className="h-8 mr-1 "
        />
        <p className="pt-16 ">
          Enfocada al diseño arquitectónico, exteriores, paisajismo y luminarias
          subacuaticas.
        </p>
        <p>
          Es un producto de fabricación nacional, que se realiza en un tiempo
          máximo de dos semanas, pensado para grandes proyectos. Cuenta con más
          de 30,000 configuraciones hechas a tu medida, óptica para iluminación
          específica y colores que enfatizarán la belleza de tu espacio.
          Disponible en tecnología de radiofrecuencia y tecnología DMX.
        </p>
        <span className="font-bold text-gray-700">
          Pregunta por nuestro servicio de asesoría y acompañamiento.
        </span>
        <Image
          width={200}
          height={100}
          src="/img/logo-11.png"
          alt="Logo 5"
          className="h-8 mr-1"
        />
        <p className="pt-16 ">
          Enfocada al diseño arquitectónico, exteriores, paisajismo y luminarias
          subacuaticas.
        </p>
        <p>
          Es un producto de fabricación nacional, que se realiza en un tiempo
          máximo de dos semanas, pensado para grandes proyectos. Cuenta con más
          de 30,000 configuraciones hechas a tu medida, óptica para iluminación
          específica y colores que enfatizarán la belleza de tu espacio.
          Disponible en tecnología de radiofrecuencia y tecnología DMX.
        </p>
        <span className="font-bold text-gray-700">
          Pregunta por nuestro servicio de asesoría y acompañamiento.
        </span>
        <Image
          width={50}
          height={80}
          src="/img/logo-12.png"
          alt="Logo 5"
          className="h-8 mr-1"
        />
      </div>
    </main>
  );
}
