"use client";

import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Links from "../Links";
import HamburgerMenu from "../HamburgerMenu";

interface Props {
  darkTheme?: boolean;
}

export default function Navbar({ darkTheme }: Props) {
  const useDesktopMediaQuery = () =>
    useMediaQuery({
      minWidth: 769,
    });

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Link
          className={styles.linkText}
          href="/"
          style={{ height: "100%", width: "auto" }}
        >
          <Image
            src={darkTheme ? "/logoLight.svg" : "/logo.svg"}
            alt="HB Logo"
            className={styles.vercelLogo}
            width={0}
            height={0}
            style={{ height: "100%", width: "auto" }} // optional
          />
        </Link>

        {/* TODO: Turn these into links */}
        {useDesktopMediaQuery() ? (
          <Links darkTheme={darkTheme} />
        ) : (
          <HamburgerMenu />
        )}
      </div>
    </div>
  );
}
