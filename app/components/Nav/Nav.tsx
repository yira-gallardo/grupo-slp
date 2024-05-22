"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export default function Nav() {
  const [isHome, setIsHome] = useState(false);
  const [isWhitePage, setIsWhitePage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsHome(pathname === "/");
    setIsWhitePage(
      pathname === "/aviso-de-privacidad" ||
        pathname === "/terminos-y-condiciones"
    );
  }, [pathname]);

  return (
    <>
      <nav
        className={classNames(
          "absolute top-0 right-0 flex justify-between items-center w-full py-8 px-4 lg:p-8 z-[1]",
          {
            "text-black": isWhitePage,
            "text-white": !isWhitePage,
          }
        )}
      >
        <div>
          {!isHome && (
            <Link href="/">
              <Image
                src={isWhitePage ? "/img/logo-13.png" : "/img/logo.png"}
                width={100}
                height={100}
                alt="Grupo SLP Logo"
                className="h-auto w-[120px]"
              />
            </Link>
          )}
        </div>
        <ul className="flex lg:gap-8">
          <li>
            <Link href="/nosotros" className="hover:text-gray-300 p-4 lg:p-8">
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/#contacto"
              className="hover:text-gray-300 py-4 px-4 lg:px-8 border"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
