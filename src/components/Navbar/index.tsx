"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Image
          src="/logo.svg"
          alt="HB Logo"
          className={styles.vercelLogo}
          width={0}
          height={0}
          style={{ height: "100%", width: "auto" }} // optional
        />

        {/* TODO: Turn these into links */}
        <div className={styles.linksContainer}>
          <p className={styles.linkText}>projects</p>
          <p className={styles.linkText}>about</p>
          <p className={styles.linkText}>resume</p>
        </div>
      </div>
    </div>
  );
}
