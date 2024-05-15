"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav className="absolute top-0 right-0 z-10 flex justify-end items-center h-16 text-white px-6 mr-4">
        <ul className="flex space-x-8 pt-10 pr-10">
          <li>
            <a href="#" className="hover:text-gray-300 pr-14">
              Nosotros
            </a>
          </li>

          <li>
            <a href="#" className="relative hover:text-gray-300 mr-4 py-2 px-4">
              Contacto
              <span className="absolute top-0 right-0 bottom-0 left-0 border border-white"></span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
