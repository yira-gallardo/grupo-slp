"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AvisoDePrivacidad() {
  return (
    <main className="relative">
      <nav className="absolute top-0 right-0 z-10 flex justify-between items-center w-full h-16 text-black px-6 bg-white">
        <div className="flex items-center h-full pl-16 pt-20">
          <img
            src="/img/logo-13.png"
            alt="Grupo SLP Logo"
            className="h-20 mr-4"
          />
        </div>
        <ul className="flex space-x-8 pt-10 pr-10">
          <li>
            <Link href="#" className="hover:text-gray-300 pr-14">
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="relative hover:text-gray-300 mr-4 py-2 px-4"
            >
              Contacto
              <span className="absolute top-0 right-0 bottom-0 left-0 border border-white"></span>
            </Link>
          </li>
        </ul>
      </nav>
      <header className="relative h-screen flex items-center pl-20 custom-mt-20">
        <div className="relative flex flex-col items-start">
          {/* Añadir el nuevo texto con animación aquí */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }} // Ajusta el delay según necesites
          >
            <p className="text-base font-semibold mb-2.5">
              CUIDAMOS TU INFORMACIÓN
            </p>
          </motion.div>

          {/* Primer división */}
          <div className="divider w-[200%] h-[1px] bg-black my-8 relative left-[-100%]" />

          {/* Título del Aviso de Privacidad con animación */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -10 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-black">
              <p className="text-left text-5xl font-bold">
                Aviso de Privacidad
              </p>
            </div>
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
    </main>
  );
}
