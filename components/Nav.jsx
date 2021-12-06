// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
import { useEffect } from "react";

export default function Nav(props) {
  // const { pathname } = useLocation();
  // useEffect(() => {
  //   //everytime url will change so page will be scrolled href top
  //   window.scrollTo(0, 0);
  // }, [pathname]);
  //className={pathname === "/" ? "active" : null}

  return (
    <nav>
      <img className="nav-logo" src="./static/pvxx.png" alt="logo" />
      <div className="nav-item-container">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/stats">
          <li>Stats</li>
        </Link>
        <Link href="/donate">
          <li>Donate</li>
        </Link>
        <Link href="/bdays">
          <li>B'Days</li>
        </Link>
      </div>
    </nav>
  );
}
