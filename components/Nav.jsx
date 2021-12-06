import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

export default function Nav(props) {
  const router = useRouter();
  const { pathname } = router;
  // console.log(pathname);
  useEffect(() => {
    //everytime url will change so page will be scrolled href top
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <nav>
      <Image
        className="nav-logo"
        src="/static/pvxx.png"
        alt="logo"
        height={30}
        width={80}
      />
      <div className="nav-item-container">
        <Link href="/" passHref>
          <a>
            <li className={pathname === "/" ? "active" : null}>Home</li>
          </a>
        </Link>
        <Link href="/stats" passHref>
          <a>
            <li className={pathname === "/stats" ? "active" : null}>Stats</li>
          </a>
        </Link>
        <Link href="/donate" passHref>
          <a>
            <li className={pathname === "/donate" ? "active" : null}>Donate</li>
          </a>
        </Link>
        <Link href="/bdays" passHref>
          <a>
            <li className={pathname === "/bdays" ? "active" : null}>
              B&apos;Days
            </li>
          </a>
        </Link>
      </div>
    </nav>
  );
}
