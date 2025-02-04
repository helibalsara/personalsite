"use client";

import Image from "next/image";
import Link from "next/link";
import Links from "../Links";
import HamburgerMenu from "../HamburgerMenu";
import { useState, useEffect } from "react";
import MobileLinks from "../MobileLinks";

interface Props {
  darkTheme?: boolean;
}

export default function Navbar({ darkTheme }: Props) {
  const [isDesktop, setIsDesktop] = useState(true);
  const [mobileLinksOpen, setMobileLinksOpen] = useState<boolean>(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 769);
    const handleResize = () => setIsDesktop(window.innerWidth >= 769);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="absolute top-[54px] left-[70px] w-[calc(100%-140px)] md:left-12 md:w-[calc(100%-96px)]">
      <div className="flex h-[60px] relative flex-row justify-between items-center">
        <Link className="h-full w-auto" href="/">
          <Image
            src={darkTheme ? "/logoLight.svg" : "/logo.svg"}
            alt="HB Logo"
            className="h-full w-auto"
            width={0}
            height={0}
          />
        </Link>

        {isDesktop ? (
          <Links darkTheme={darkTheme} />
        ) : (
          <button
            className="bg-transparent border-0 p-0 m-0"
            onClick={() => {
              setMobileLinksOpen(true);
              setClicked(true);
            }}
          >
            <HamburgerMenu darkTheme={darkTheme} />
          </button>
        )}

        {clicked && (
          <MobileLinks
            onClose={() => setMobileLinksOpen(false)}
            open={mobileLinksOpen}
          />
        )}
      </div>
    </div>
  );
}
