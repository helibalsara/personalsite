import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";
import projects from "../../projectInfo.json";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface Props {
  darkTheme?: boolean;
}

export default function Links({ darkTheme }: Props) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const currentUrl = usePathname();

  return (
    <div className={styles.linksContainer}>
      <div className={styles.dropdown}>
        <button
          className={styles.dropdownButton}
          onClick={() => setShowDropdown((prevState: boolean) => !prevState)}
        >
          <div className={styles.dropdownTextIcon}>
            <p
              className={styles.linkText + " " + (darkTheme && styles.light)}
              id={darkTheme ? styles.projectsLight : styles.projectsDark}
            >
              projects
            </p>
            <Image
              src={darkTheme ? "/dropdownIconLight.svg" : "/dropdownIcon.svg"}
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
                  className={
                    styles.dropdownOptionText +
                    " " +
                    (darkTheme && styles.light)
                  }
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
      <Link
        className={styles.linkText + " " + (darkTheme && styles.light)}
        href="/about"
      >
        about
      </Link>
      <Link
        className={styles.linkText + " " + (darkTheme && styles.light)}
        href="/Heli_Balsara_resume.pdf"
      >
        resume
      </Link>
      <Link
        className={styles.linkText + " " + (darkTheme && styles.light)}
        href="https://shotbyheli.mypixieset.com/"
      >
        photography
      </Link>
    </div>
  );
}
