import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    // everytime url will change so page will be scrolled href top
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav>
      <div className="nav-logo">
        <Link href="/" passHref>
          <Image src="/static/pvxx.png" alt="logo" layout="fill" />
        </Link>
      </div>
      <ul className="nav-item-container">
        <Link href="/" passHref>
          <li className={pathname === "/" ? "active" : undefined}>Home</li>
        </Link>
        {/* <Link href="/" passHref>
          <a>
            <li className={pathname === "/projects" ? "active" : undefined}>
              Projects
            </li>
          </a>
        </Link> */}
        <Link href="/stats" passHref>
          <li className={pathname === "/stats" ? "active" : undefined}>
            Stats
          </li>
        </Link>
        {/* <Link href="/donate" passHref>
          <a>
            <li className={pathname === "/donate" ? "active" : undefined}>Donate</li>
          </a>
        </Link> */}
        <Link href="/birthdays" passHref>
          <li className={pathname === "/birthdays" ? "active" : undefined}>
            B&apos;Day
          </li>
        </Link>
        <Link href="/others" passHref>
          <li className={pathname === "/others" ? "active" : undefined}>
            Others
          </li>
        </Link>
        {/* <Link href="https://forms.gle/WEQ33xzHpYAQvArd6" passHref>
          <a>
            <li>Feedback</li>
          </a>
        </Link> */}
      </ul>
    </nav>
  );
}
