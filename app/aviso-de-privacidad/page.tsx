"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AvisoDePrivacidad() {
  return (
    <main className="relative">
      {/* HEADER */}
      <header className="relative h-screen flex items-center pl-20 custom-mt-20">
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
    </main>
  );
}
