"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Spinner from "./utils/Spinner";
import { navItems } from "./constants/index";

export default function Nav() {
  const pathname = usePathname();

  const [showNav, setShowNav] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Everytime url will change so page will be scrolled href top
    window.scrollTo(0, 0);
    setShowNav(false);
    setLoading(false);
  }, [pathname]);

  useEffect(() => {
    // Turn off background scrolling
    if (showNav) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showNav]);

  // TODO: CHECK priority in IMAGE
  return (
    <header>
      <nav className="flex align items-center justify-between px-3 sm:px-5 py-2 fixed top-0 w-full z-10 bg-gray-950 bg-opacity-80">
        <div className="">
          <Link href="/" passHref>
            <Image
              className="invert"
              src="/static/pvx/pvx-dark.png"
              alt="logo"
              priority
              width="80"
              height="28"
            />
          </Link>
        </div>

        <div className="hidden sm:block">
          {navItems.map((item) => (
            <Link href={item.href} passHref key={item.name}>
              <button
                type="button"
                onClick={() => item.href !== pathname && setLoading(true)}
                className={`inline rounded-md px-2 sm:px-3 py-1 mx-1 text-base sm:text-lg ${
                  item.href === pathname
                    ? "bg-indigo-800 "
                    : "hover:bg-indigo-700"
                }
                 `}
              >
                {item.name}
              </button>
            </Link>
          ))}
        </div>

        <div className="sm:hidden">
          <button type="button" onClick={() => setShowNav(!showNav)}>
            <div
              className={`w-7 h-0.5 duration-300 ease-in-out  bg-white ${
                showNav && "rotate-45"
              }`}
            />
            <div
              className={`w-7 h-0.5 duration-300 ease-in-out  my-1.5 bg-white ${
                showNav && "hidden"
              }`}
            />
            <div
              className={`w-7 h-0.5 duration-300 ease-in-out  bg-white ${
                showNav && "-rotate-45"
              }`}
            />
          </button>

          <div
            className={`h-screen w-full bg-gradient-to-r from-gray-950 to-gray-900 fixed left-0 top-0 -z-10 flex items-center justify-center flex-col gap-6 ease-in-out duration-300 ${
              showNav ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {navItems.map((item) => (
              <Link href={item.href} passHref key={item.name}>
                <button
                  type="button"
                  onClick={() => item.href !== pathname && setLoading(true)}
                  className={`rounded-md px-4 py-3 text-xl ${
                    item.href === pathname
                      ? "bg-indigo-800 "
                      : " hover:bg-indigo-700 "
                  }
                 
                `}
                >
                  {item.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {loading && (
        <div className="z-50 flex justify-center items-center fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-gray-950 to-gray-900 opacity-75">
          <Spinner />
        </div>
      )}
    </header>
  );
}
