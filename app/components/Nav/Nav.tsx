"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isHome, setIsHome] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsHome(pathname === "/");
  }, [pathname]);

  return (
    <nav className="absolute top-0 right-0 flex justify-between items-center text-white w-full p-8 z-[1]">
      <div>
        {!isHome && (
          <Link href="/">
            <Image
              src="/img/logo.png"
              width={100}
              height={100}
              alt="Grupo SLP Logo"
              className="h-auto w-[120px]"
            />
          </Link>
        )}
      </div>
      <ul className="flex gap-8">
        <li>
          <Link href="/nosotros" className="hover:text-gray-300 p-8">
            Nosotros
          </Link>
        </li>
        <li>
          <Link
            href="/contacto"
            className="hover:text-gray-300 py-4 px-8 border"
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}
