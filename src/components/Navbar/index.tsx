"use client";

import { useEffect, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import projects from "../../projectInfo.json";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const currentUrl = usePathname();

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
              id={styles.projects}
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
              <div
                className={`${styles.dropdownContent} ${
                  currentUrl.startsWith("/projects") && styles.white
                }`}
              >
                <div />
                {projects.map(
                  ({ title, route }: { title: string; route: string }) => (
                    <Link
                      className={styles.dropdownOptionText}
                      href={"/projects" + route}
                      key={title}
                    >
                      {title}
                    </Link>
                  )
                )}
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
