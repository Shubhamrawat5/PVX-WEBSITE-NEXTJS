import React, { useEffect } from "react";
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

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  useEffect(() => {
    // everytime url will change so page will be scrolled href top
    window.scrollTo(0, 0);
  }, [pathname]);

  // TODO: CHECK priority in IMAGE
  return (
    <nav className="flex align items-center justify-between px-5 py-3 fixed top-0 w-full z-10 bg-gray-950 border-b border-gray-600">
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

      <ul>
        {navItems.map((item) => (
          <Link href={item.href} passHref key={item.name}>
            <li
              className={classNames(
                item.href === pathname
                  ? "bg-gray-800 text-white"
                  : " hover:bg-gray-700 hover:text-white",
                "inline rounded-md px-3 py-2 mx-1 text-lg"
              )}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
