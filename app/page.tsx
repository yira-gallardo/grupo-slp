"use client";
import Footer from "@/app/components/Footer/Footer";
import Nav from "@/app/components/Nav/Nav";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      {/* HEADER */}
      <header className="relative h-screen flex items-center pl-20 custom-mt-20">
        <div
          className="absolute top-0 right-0 w-full h-full z-[-1] blur"
          style={{ backgroundImage: "url('/img/img-1.png')" }}
        />
        <div className="relative flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              width={200}
              height={200}
              src="/img/logo.png"
              alt="Imagen"
              className="h-28 w-52 ml-4"
            />
          </motion.div>
          <div className="divider w-[200%] h-[1px] bg-white my-8 relative left-[-100%]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-white">
              <p className="text-left text-5xl font-bold">Aportamos luz</p>
              <p className="text-left mb-1 text-4xl">a tu vida diaria</p>
            </div>
          </motion.div>
          <div className="divider w-[200%] h-[1px] bg-white my-8 relative left-[-100%]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="mt-2 ml-4 flex items-center space-x-5 pt-12 gap-8">
              <Image
                width={200}
                height={100}
                src="/img/logo-1.png"
                alt="Logo 1"
                className="h-[20px] w-auto"
              />
              <Image
                width={200}
                height={100}
                src="/img/logo-2.png"
                alt="Logo 2"
                className="h-[20px] w-auto"
              />
              <Image
                width={200}
                height={100}
                src="/img/logo-3.png"
                alt="Logo 3"
                className="h-[20px] w-auto"
              />
              <Image
                width={200}
                height={100}
                src="/img/logo-4.png"
                alt="Logo 4"
                className="h-[20px] w-auto"
              />
              <Image
                width={200}
                height={100}
                src="/img/logo-5.png"
                alt="Logo 5"
                className="h-[20px] w-auto"
              />
            </div>
          </motion.div>
        </div>
      </header>
      {/* EMPRESA MEXICANA */}
      <section className="min-h-screen relative">
        <div
          className="background absolute top-0 left-0 h-full bg-cover bg-center w-full z-[-2]"
          style={{ backgroundImage: "url('/img/img-3-gray.png')" }}
        />
        <div
          className="background absolute top-0 left-0 h-full bg-cover bg-center w-full z-[-1] fade-in-animation"
          style={{ backgroundImage: "url('/img/img-3-light.png')" }}
        />
        <div className="content absolute top-0 left-0 h-full w-full z-1 flex items-center px-16">
          <div className="max-w-[500px] text-black">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-5xl p-0 m-0 mb-8">
                Somos una empresa <br></br>
                <span className="font-bold">100% mexicana</span>
              </h2>
              <p>
                que nace de una familia dedicada a la construcción. Iniciamos
                vendiendo lámparas básicas en autoservicios y abarrotes; sin
                embargo, hoy somos reconocidos como especialistas en
                iluminación, tanto de interiores como de exteriores, con
                productos certificados que enfatizan en su diseño y durabilidad.
              </p>
              <Link
                href="/"
                className="block w-[300px] text-center my-8 px-6 font-bold py-3 bg-transparent text-black border border-black rounded-md hover:bg-black hover:text-white transition duration-300 ease-in-out"
              >
                Más sobre Grupo SLP
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ILUMINACION */}
      <section className="min-h-screen bg-zinc-800 py-32 text-white">
        <div className="flex px-16 items-center gap-64">
          <div className="w-1/2">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold mb-8">
                Iluminación óptima para tu espacio, que destaca su estructura
                arquitectónica
              </h3>
              <p>
                Tenemos más de 20 años en el mercado, y nuestra oferta de valor
                es la atención personalizada y puntual: no solo ofrecemos
                luminarias, brindamos un servicio completo que va desde la
                muestra precisa de nuestros productos hasta la asistencia
                profesional al momento de instalar. Adicionalmente, ¡estamos
                comprometidos con nuestro planeta! Cuidamos que cada producto
                cuenten con tecnologías innovadoras para el ahorro de energía y
                materiales que se puedan reciclar.
              </p>
            </motion.div>
          </div>
          <div className="w-1/2 p-4">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: 10 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Image
                width={500}
                height={500}
                src="/img/home-iluminacion.png"
                alt="Iluminación óptima para tu espacio"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* MISION VISION */}
      <section className="min-h-screen bg-white py-32 text-black">
        <div className="flex px-16 gap-16">
          <div className="w-1/3">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Image
                width={500}
                height={500}
                src="/img/vision.png"
                alt="Misión"
                className="w-full h-auto"
              />
            </motion.div>
            <div className="text drop-shadow-md bg-white p-6 w-[80%] relative top-[-6%] left-4 py-8 min-h-[600px]">
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h4 className="font-bold text-xl mb-8">Visión</h4>
                <p className="mb-4">
                  Brindarte soluciones integrales y específicas en iluminación,
                  para conseguir ambientes funcionales. Respaldamos y
                  materializamos cada uno de tus proyectos y exaltamos la
                  grandeza de aquello que has construido.
                </p>
                <p className="mb-4">
                  A su vez, nuestro trabajo implica ofrecerte calidad y precios
                  competitivos para que generes oportunidades de negocio. Damos
                  soporte, capacitación y material informativo.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="w-1/3">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Image
                width={500}
                height={500}
                src="/img/mision.png"
                alt="Misión"
                className="w-full h-auto"
              />
            </motion.div>
            <div className="text drop-shadow-md bg-white p-6 w-[80%] relative top-[-6%] left-4 py-8 min-h-[600px]">
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <h4 className="font-bold text-xl mb-8">Misión</h4>
                <p className="mb-4">
                  Nuestro compromiso es mantenernos a la vanguardia y ser la
                  empresa líder en el ramo, mostrando responsabilidad con el
                  medio ambiente y, por supuesto, para contigo.
                </p>
                <p className="mb-4">
                  En los próximos años, trabajaremos para incrementar nuestros
                  alcances y estar cada vez más cerca de ti.
                </p>
                <p className="mb-4">
                  Buscamos impulsar la marca hasta contar con un catálogo de
                  productos que atiendan el 95% de necesidades en iluminación
                </p>
              </motion.div>
            </div>
          </div>
          <div className="w-1/3">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: -10 }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <Image
                width={500}
                height={500}
                src="/img/valores.png"
                alt="Misión"
                className="w-full h-auto"
              />
            </motion.div>
            <div className="text drop-shadow-md bg-white p-6 w-[80%] relative top-[-6%] left-4 py-8 min-h-[600px]">
              <motion.div
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <h4 className="font-bold text-xl mb-8">Valores</h4>
                <p className="mb-4">
                  Trabajamos en colectivo para desarrollar tus proyectos y
                  negocios. La comunicación constante y transparente nos permite
                  conocer y entender tus objetivos para juntos alcanzarlos.
                </p>
                <p className="mb-4">
                  -Honramos el trabajo y la individualidad de cada miembro del
                  equipo; eso garantiza motivación, productividad y mejores
                  resultados.
                </p>
                <p className="mb-4">
                  -Respetamos las políticas públicas y asumimos las obligaciones
                  y compromisos de una empresa socialmente responsable. Destaca
                  nuestros compromiso con el cuidado ambiental y el ahorro
                  energético.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* INVERSIÓN */}
      <section className="bg-white">
        <div className="flex gap-16">
          <div className="w-5/12 relative">
            <div
              className="absolute top-0 left-0 h-full bg-cover bg-center w-full bg-red-200"
              style={{ backgroundImage: "url('/img/home-inversion.png')" }}
            />
          </div>
          <div className="w-7/12 py-48 px-16">
            <motion.div
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.95, x: 10 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold mb-16">
                Inversión <span className="text-blue-600">responsable</span>
              </h2>
              <p className="mb-4">
                Una pieza clave en el desarrollo y crecimiento de Grupo SLP, ha
                sido el desarrollo de soluciones cuidadosas con el medio
                ambiente.
              </p>
              <p className="mb-4">
                <b>
                  Por ello, buscamos que nuestros productos cumplan con las
                  características propias del ahorro de energía.
                </b>
              </p>
              <p className="mb-4">
                <b>
                  Adicional a esto, contamos con reconocimiento del Instituto
                  Nacional de Antropología e Historia (INAH)
                </b>
                , como empresa que respeta y acata las especificaciones de
                iluminación para piezas históricas que requieren cuidados
                especiales.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
