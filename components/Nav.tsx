import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const router = useRouter();
  const { pathname } = router;

  const navItems = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/stats",
      name: "Stats",
    },
    {
      href: "/birthdays",
      name: "B'Days",
    },
    {
      href: "/others",
      name: "Others",
    },
  ];

  const [showNav, setShowNav] = useState(true);
  const toggleNavHandler = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    // everytime url will change so page will be scrolled href top
    window.scrollTo(0, 0);
    setShowNav(false);
  }, [pathname]);

  useEffect(() => {
    // turn off background scrolling
    if (showNav) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showNav]);

  // TODO: CHECK priority in IMAGE
  return (
    <nav className="flex align items-center justify-between px-3 sm:px-5 py-3 fixed top-0 w-full z-10 bg-gray-950 border-b border-gray-600">
      <div className="invert">
        <Link href="/" passHref>
          <Image
            src="/static/pvxx.png"
            alt="logo"
            priority
            width="80"
            height="28"
          />
        </Link>
      </div>

      <ul className="hidden sm:block">
        {navItems.map((item) => (
          <Link href={item.href} passHref key={item.name}>
            <li
              className={`inline rounded-md px-2 sm:px-3 py-2 mx-1 text-base sm:text-lg ${
                item.href === pathname
                  ? "bg-gray-800 text-white"
                  : "hover:bg-gray-700 hover:text-white"
              }
                 `}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      <div className="sm:hidden">
        <button type="button" onClick={toggleNavHandler} className="">
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

        <ul
          className={`h-screen w-full bg-gray-800 fixed left-0 top-0 -z-10 flex items-center justify-center flex-col gap-6 ease-in-out duration-300 ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navItems.map((item) => (
            <Link href={item.href} passHref key={item.name}>
              <li
                className={`rounded-md px-4 py-3 text-xl ${
                  item.href === pathname
                    ? "bg-gray-900 text-white"
                    : " hover:bg-gray-700 hover:text-white"
                }
                 
                `}
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
