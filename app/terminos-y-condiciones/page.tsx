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
      title: "1 - Términos de la tienda en línea",
      content:
        "Al utilizar este sitio, declaras que tienes al menos la mayoría de edad en tu estado o provincia de residencia, o que tienes la mayoría de edad en tu estado o provincia de residencia y que nos has dado tu consentimiento para permitir que cualquiera de tus dependientes menores use este sitio. No puedes usar nuestros productos con ningún propósito ilegal o no autorizado tampoco puedes, en el uso del Servicio, violar cualquier ley en tu jurisdicción (incluyendo, pero no limitado a las leyes de derecho de autor). No debes transmitir gusanos, virus o cualquier código de naturaleza destructiva. El incumplimiento o violación de cualquiera de estos Términos darán lugar al cese inmediato de tus Servicios.",
    },
    {
      title: "2 - Condiciones generales",
      content:
        "Nos reservamos el derecho de rechazar la prestación de servicio a cualquier persona, por cualquier motivo y en cualquier momento. Entiendes que tu contenido (sin incluir la información de tu tarjeta de crédito), puede ser transferida sin encriptar e involucrar a) transmisiones a través de varias redes; y b) cambios para ajustarse o adaptarse a los requisitos técnicos de conexión de redes o dispositivos. La información de tarjetas de crédito está siempre encriptada durante la transferencia a través de las redes. Estás de acuerdo con no reproducir, duplicar, copiar, vender, revender o explotar cualquier parte del Servicio, uso del Servicio, acceso al Servicio o cualquier contacto en el sitio web a través del cual se presta el servicio, sin el expreso permiso de nuestra parte. Los títulos utilizados en este acuerdo se incluyen solo por conveniencia y no limita o afecta a estos Términos.",
    },
    {
      title: "3 - Exactitud, exhaustividad y actualidad de la información",
      content:
        "No nos hacemos responsables si la información disponible en este sitio no es exacta, completa o actual. El material en este sitio es provisto solo para información general y no debe confiarse en ella o utilizarse como la única base para la toma de decisiones sin consultar, primeramente, información más precisa, completa u oportuna. Cualquier dependencia en el material de este sitio es bajo su propio riesgo. Este sitio puede contener cierta información histórica. La información histórica no es necesariamente actual y es provista únicamente para tu referencia. Nos reservamos el derecho de modificar los contenidos en cualquier momento, pero no tenemos la obligación de actualizar cualquier información e nuestro sitio. Aceptas que es tu responsabilidad monitorear los cambios en él.",
    },
    {
      title: "4 - Modificaciones al servicio y precios",
      content:
        "Los precios de nuestros productos están sujetos a cambio sin previo aviso. Nos reservamos el derecho de modificar o discontinuar el Servicio (o cualquier parte del contenido) en cualquier momento. No seremos responsables ante ti o alguna tercera parte por cualquier modificación, cambio de precio, suspensión o discontinuidad del Servicio.",
    },
    {
      title: "5 - Productos o servicios (si aplicable)",
      content:
        "Ciertos productos o servicios pueden estar disponibles exclusivamente en nuestra tienda en línea. Estos pueden tener cantidades limitadas y estar sujetos a devolución o cambio únicamente de acuerdo con nuestra política de devolución. Nos hemos esforzado en mostrar los colores y las imágenes de nuestros productos de la tienda en línea con la mayor precisión posible. No podemos garantizar que el monitor de tu computadora los muestre de manera exacta. Nos reservamos el derecho, pero no estamos obligados, a limitar las ventas de nuestros productos o servicios a cualquier persona, región geográfica o jurisdicción. Podemos ejercer este derecho basados en cada caso. Nos reservamos también el derecho de limitar las cantidades de los productos o servicios que ofrecemos. Todas las descripciones de productos o precios están sujetos a cambios en cualquier momento sin previo aviso, a nuestra sola discreción. Podremos discontinuar cualquier producto en cualquier momento. No garantizamos que la calidad de los productos, servicios u otro material que compres u obtengas cumplas tus expectativas, o que cualquier error en el Servicio será corregido.",
    },
    {
      title: "6 - Exactitud de facturación e información de cuenta",
      content:
        "Nos reservamos el derecho de rechazar cualquier pedido que realices con nosotros. Podemos, a nuestra discreción, limitar o cancelar las cantidades compradas por persona, por hogar o por pedido. Estas restricciones pueden incluir pedidos realizados por o bajo la misma cuenta de cliente, la misma tarjeta y/o pedidos que utilicen la misma facturación y/o dirección de envío. En caso de que hagamos algún cambio o cancelación de tu orden, podemos intentar notificarte vía correo electrónico, dirección de facturación y/o número de teléfono proporcionado al momento de realizar el pedido. Nos reservamos el derecho de limitar o prohibir las órdenes que, a nuestro juicio, parezcan ser colocadas por concesionarios, revendedores o distribuidores. Te comprometes a proporcionar información actual, completa y precisa de la compra y cuenta utilizada para todas las compras realizadas en nuestra tienda. Te comprometes a actualizar rápidamente tu cuenta y otra información, incluyendo tu dirección de correo electrónico y números de tarjetas de crédito y fechas de vencimiento, para que podamos completar tus transacciones y contactarte cuando sea necesario. Para más detalles, por favor revisa nuestra Política de Devoluciones.",
    },
    {
      title: "7 - Herramientas opcionales",
      content:
        "Es posible que te proporcionemos acceso a herramientas de terceros que no monitoreamos y sobre las cuales no tenemos control ni entrada. Reconoces y aceptas que proporcionamos acceso a ellas tal cual y según disponibilidad sin garantías, representaciones o condiciones de ningún tipo y sin ningún respaldo. No tendremos responsabilidad alguna derivada de o relacionada con tu uso de herramientas proporcionadas por terceras partes. Cualquier uso que hagas de las herramientas opcionales que se ofrecen a través del sitio, es bajo tu propio riesgo y discreción. Debes asegurarte de estar familiarizado con ellas y aprobar los términos bajo los cuales estas herramientas operan. También es posible que, en el futuro, te ofrezcamos nuevos servicios y/o características a través del sitio web (incluyendo el lanzamiento de nuevas herramientas y recursos). Estas nuevas características y/o servicios también estarán sujetos a estos Términos de Servicio.",
    },
    {
      title: "8 - Enlaces de terceras partes",
      content:
        "Cierto contenido, productos y servicios disponibles vía nuestro Servicio puede incluir material de terceras partes. Enlaces de terceras partes en este sitio, pueden direccionarte a sus respectivos sitios que no están afiliados con nosotros. No nos responsabilizamos de examinar o evaluar su contenido o exactitud, y no garantizamos ni tendremos ninguna obligación o responsabilidad por cualquier material, sitios web, productos o servicios de terceros. No nos hacemos responsables de cualquier daño relacionado con la adquisición o utilización de bienes, servicios, recursos, contenidos o cualquier otra transacción realizada en conexión con sitios web de terceros. Por favor, revisa cuidadosamente las políticas y prácticas de terceros y asegúrate de entenderlas antes de participar en cualquier transacción. Quejas, reclamos, inquietudes o preguntas respecto a productos de terceros, deben ser dirigidas a la tercera parte",
    },
    {
      title: "9 - Comentarios de usuario, captación y otros envíos",
      content:
        "Si a pedido nuestro envías ciertas presentaciones específicas (por ejemplo, para la participación en concursos), o sin pedido de nuestra parte envías ideas creativas, sugerencias, proposiciones, planes u otros materiales por cualquier medio, aceptas que podemos en cualquier momento, sin restricción, editar, copiar, publicar, distribuir o utilizar a placer los comentarios que nos hayas enviado. No tenemos ni tendremos ninguna obligación 1) de mantener confidencialmente ningún comentario, 2) de pagar compensación por comentarios o 3) de responder a comentarios. Nosotros podemos, pero no tenemos obligación de, monitorear, editar o remover contenido que consideremos sea ilegítimo, ofensivo, amenazante, calumnioso, difamatorio, pornográfico, obsceno u objetable o viole la propiedad intelectual de cualquiera de las partes o los Términos de Servicio. Aceptas que tus comentarios no violarán los derechos de terceras partes, incluyendo derechos de autor, marca, privacidad, personalidad u otro derechos personal o de propiedad. Asimismo, aceptas que tus comentarios no contienen material difamatorio o ilegal, abusivo u obsceno, o contienen virus informáticos u otro malware que pudiera, de alguna manera, afectar el funcionamiento del Servicio o de cualquier sitio web relacionado. No puedes utilizar una dirección de correo electrónico falsa, usar otra identidad que no sea legítima, o engañar a terceras partes o a nosotros en cuanto al origen de tus comentarios. Tú eres el único responsable por los comentarios que haces y su precisión. No nos hacemos responsables y no asumimos ninguna obligación con respecto a los comentarios publicados por ti o cualquier tercer parte.",
    },
    {
      title: "10 - Información personal",
      content:
        "La información personal que presentes a través de nuestro sitio web, se rige por nuestra Política de Privacidad. Consúltala antes de proporcionar cualquier dato sensible",
    },
    {
      title: "11 - Errores, inexactitudes y omisiones",
      content:
        "Eventualmente, puede haber información en nuestro sitio o en el Servicio que contenga errores tipográficos, inexactitudes u omisiones que puedan estar relacionadas con las descripciones de productos, precios, promociones, ofertas, gastos de envío del producto, el tiempo de tránsito y la disponibilidad. Nos reservamos el derecho de corregir los errores, inexactitudes u omisiones y de cambiar o actualizar la información o cancelar pedidos si alguna información en el sitio web es inexacta, sin previo aviso (incluso después de que hayas enviado tu orden). No asumimos ninguna obligación de actualizar, corregir o aclarar la información en el Servicio o en cualquier sitio web relacionado, incluyendo, sin limitación, la información de precios, excepto cuando sea requerido por la ley. Ninguna especificación actualizada o fecha de actualización aplicada en el Servicio o en cualquier sitio web relacionado, debe ser tomada para indicar que toda la información en el Servicio o en cualquier sitio web relacionado ha sido modificada o actualizada.",
    },
    {
      title: "12 - Usos prohibidos",
      content:
        "En adición a otras prohibiciones, como se establece en los Términos de Servicio, se prohibe el uso del sitio o su contenido: a) para ningún propósito ilegal; b) para pedirle a otros que realicen o participen en actos ilícitos; c) para violar cualquier regulación, reglas, leyes internacionales, federales, provinciales, estatales u ordenanzas locales; d) para infringir o violar el derecho de propiedad intelectual nuestro o de terceras partes; e) para acosar, abusar, insultar, dañar, difamar, calumniar, desprestigiar, intimidar o discriminar por razones de género, orientación sexual, religión, etnia, raza, edad, nacionalidad o discapacidad; f) para presentar información falsa o engañosa; g) para cargar o transmitir virus o cualquier tipo de código malicioso que sea o pueda ser utilizado en cualquier forma que pueda comprometer la funcionalidad o el funcionamiento del Servicio o de cualquier sitio web relacionado; h) para recopilar o rastrear información personal de otros; i) para generar spam, phish, pham, pretext, spider, crawl o scrape; j) para cualquier propósito obsceno o inmoral; k) para interferir con o burlar elementos de seguridad del Servicio o cualquier sitio web relacionado, otros sitios o Internet. Nos reservamos el derecho de suspender el uso del Servicio o cualquier sitio web relacionado por violar cualquiera de los ítems de los usos prohibidos.",
    },
    {
      title: "13 - Exclusión de garantías; limitación de responsabilidad",
      content:
        "No garantizamos ni aseguramos que el uso de nuestro servicio será ininterrumpido, puntual, seguro o libre de errores. No garantizamos que los resultados que se puedan obtener del uso del servicio serán exactos o confiables. Aceptas que ocasionalmente podemos quitar el servicio por periodos de tiempo indefinidos o cancelarlo sin previo aviso. Aceptas expresamente que el uso de, o la posibilidad de utilizar el servicio es bajo tu propio riesgo. El servicio y todos los productos proporcionados a través del servicio son (salvo lo expresamente manifestado por nosotros) proporcionados tal cual y según esté disponible, sin ningún tipo de representación, garantías, o condiciones expresas o implícitas, incluidas todas las garantías o condiciones de comercialización, calidad comercializable, la aptitud para un propósito particular, durabilidad, título y no infracción. En ningún caso Philco Iluminación, nuestros directores, funcionarios, empleados, afiliados, agentes, contratistas, internos, proveedores, prestadores de servicios o licenciantes serán responsables por cualquier daño, pérdida, reclamo o consecuentes de cualquier tipo, incluyendo, sin limitación, pérdida de beneficios, pérdida de ingresos, pérdida de ahorros, pérdida de datos, costos de reemplazo o cualquier daño similar, ya sea basado en contrato, agravio (incluyendo negligencia), responsabilidad estricta o de otra manera, como consecuencia del uso de cualquiera de los servicios o productos adquiridos mediante el servicio, o por cualquier otro relacionado con el uso del servicio o cualquier producto, incluyendo pero no limitando, cualquier error u omisión de contenido, o cualquier pérdida o daño incurridos como resultado de la utilización del servicio o producto puesto a disposición a través nuestro. Debido a que algunos estados o jurisdicciones no permiten la exclusión o la limitación de responsabilidades por daños consecuenciales o incidentales, en tales estados o jurisdicciones nuestra responsabilidad se limitará en la medida máxima permitida por la leyla exclusión o la limitación de responsabilidad por daños consecuenciales o incidentales, en tales estados o jurisdicciones, nuestra responsabilidad se limitará en la medida máxima permitida por la ley.",
    },
    {
      title: "14 - Indemnización",
      content:
        "Aceptas indemnizar, defender y mantener incólume Ventor Internacional y nuestras matrices, subsidiarias, afiliados, socios, funcionarios, directores, agentes, contratistas, concesionarios, proveedores de servicios, subcontratistas, proveedores internos y empleados, de cualquier reclamo o demanda, incluyendo honorarios razonables de abogados, hechos por cualquier tercero a causa o como resultado de tu incumplimiento de las Condiciones de Servicio o de los documentos que incorporan como referencia, o la violación de cualquier ley o de los derechos de un tercero.",
    },
    {
      title: "15 - Divisibilidad",
      content:
        "En el caso de que se determine que cualquier disposición de estas Condiciones de Servicio sea ilegal, nula o inejecutable, dicha disposición seguirá siendo efectiva a obtener la máxima permitida por la ley aplicable, y la parte no exigible se considerará separada de estos Términos de Servicio. Esto no afectará la validez de las disposiciones restantes.",
    },
    {
      title: "16 - Rescisión",
      content:
        "Las obligaciones y responsabilidades de las partes que hayan incurrido con anterioridad a la fecha de terminación de este acuerdo, sobrevivirán a todos sus efectos. Estas Condiciones de servicio son efectivas a menos que y hasta que sean terminadas por ti o por nosotros. Puedes concluir estos Términos de Servicio en cualquier momento, al avisarnos que ya no deseas utilizarlos o cuando dejes de usar nuestro sitio web. Si a nuestro juicio, fallas o se sospechas que has fallado en el cumplimiento de cualquier término o disposición de estas Condiciones de Servicio, podemos terminar este acuerdo en cualquier momento sin previo aviso. Aun así, seguirás siendo responsable de todos los montos adeudados hasta la fecha de terminación. En consecuencia, podemos negarte el acceso a nuestro servicio (o a cualquier parte del mismo).",
    },
    {
      title: "17 - Acuerdo completo",
      content:
        "Estas Condiciones y las políticas o reglas de operación publicadas en este sitio, constituyen el acuerdo completo y el entendimiento entre tú y nosotros, rigen el uso del Servicio y reemplazan cualquier acuerdo, comunicación y propuestas anteriores o contemporáneas, ya sean orales o escritas (incluyendo, pero no limitando cualquier versión previa de los Términos de Servicio). Cualquier ambigüedad en la interpretación de estas Condiciones, no actuará en contra del equipo de redacción.",
    },
    {
      title: "18 - Ley",
      content:
        "Estas Condiciones y cualquier acuerdo aparte en el que te proporcionemos servicios, se regirán e interpretarán en conformidad con las leyes del Estado de México.",
    },
    {
      title: "19 - Cambios en los términos de servicio",
      content:
        "Puedes revisar la versión más actualizada de los Términos de Servicio desde esta página, en cualquier momento. Nos reservamos el derecho, a nuestra sola discreción, de actualizar, modificar o reemplazar cualquier parte de estas Condiciones mediante la publicación de las actualizaciones o cambios en nuestro sitio web. Es tu responsabilidad revisarlas periódicamente para verificar los cambios. El uso continuó de nuestro sitio web o de nuestros servicios, después de la publicación de cualquier cambio en estas Condiciones, implica su aceptación.",
    },
    {
      title: "20 - Información de contacto",
      content:
        "Preguntas acerca de los Términos de Servicio deben ser enviadas a ventas_online@ventorinternacional.com",
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
              Términos y Condiciones
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
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: -10 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-black">
            Este sitio web es operado por Philco Iluminación (Comercializadora
            Soluciones Lumínicas Plus). En todo el sitio, los términos
            “nosotros”, “nos” y “nuestro” se refieren a Philco Iluminación.
            Philco Iluminación ofrece este sitio web, incluyendo toda la
            información, herramientas y servicios disponibles para ti en este
            sitio, el usuario, está condicionado a la aceptación de todos los
            términos, condiciones, políticas y notificaciones aquí establecidos.
            Al visitar nuestro sitio y/o comprar algo de nosotros, participas en
            nuestro “Servicio” y aceptas los siguientes términos y condiciones
            (“Términos de Servicio”, “Términos”), incluídos todos los términos y
            condiciones adicionales y las políticas a las que se hace referencia
            en el presente documento y/o disponible a través de hipervínculos.
            Estas Condiciones de Servicio se aplican a todos los usuarios del
            sitio, incluyendo sin limitación a usuarios que sean navegadores,
            proveedores, clientes, comerciantes, y/o colaboradores de contenido.
          </p>
          <p className="text-black">
            Cualquier función nueva o herramienta que se añadan a la tienda
            actual, también estarán sujetas a los Términos de Servicio. Puedes
            revisar la versión actualizada de los Términos de Servicio, en
            cualquier momento en esta página. Nos reservamos el derecho de
            actualizar, cambiar o reemplazar cualquier parte de los Términos de
            Servicio mediante la publicación de actualizaciones y/o cambios en
            nuestro sitio web. Es tu responsabilidad chequear esta página
            periódicamente para verificar cambios. Tu uso contínuo o el acceso
            al sitio web después de la publicación de cualquier cambio
            constituye la aceptación de dichos cambios.
          </p>
        </motion.div>
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
