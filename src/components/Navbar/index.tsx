"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

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
        <Link
          className={styles.linkText}
          href="/"
          style={{ height: "100%", width: "auto" }}
        >
          <Image
            src="/logo.svg"
            alt="HB Logo"
            className={styles.vercelLogo}
            width={0}
            height={0}
            style={{ height: "100%", width: "auto" }} // optional
          />
        </Link>

        {/* TODO: Turn these into links */}
        <div className={styles.linksContainer}>
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownButton}
              onClick={() =>
                setShowDropdown((prevState: boolean) => !prevState)
              }
            >
              <div className={styles.dropdownTextIcon}>
                <p className={styles.linkText}>projects</p>
                <Image
                  src="/dropdownIcon.svg"
                  alt=""
                  width={0}
                  height={0}
                  style={{
                    height: "100%",
                    width: "auto",
                    transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </div>
            </button>
            {showDropdown && (
              <div className={styles.dropdownContent}>
                <div />
                <Link
                  className={styles.dropdownOptionText}
                  href="/projects/pinterest"
                >
                  Pinterest
                </Link>
                <Link
                  className={styles.dropdownOptionText}
                  href="/projects/tours-by-tenants"
                >
                  Tours by Tenants
                </Link>
                <Link
                  className={styles.dropdownOptionText}
                  href="/projects/smartnotes"
                >
                  SmartNotes
                </Link>
              </div>
            )}
          </div>
          <Link className={styles.linkText} href="/about">
            about
          </Link>
          <Link className={styles.linkText} href="/Heli_Balsara_resume.pdf">
            resume
          </Link>
        </div>
      </div>
    </div>
  );
}
