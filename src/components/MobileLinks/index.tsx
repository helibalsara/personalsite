import styles from "./index.module.css";
import Link from "next/link";
import projects from "../../projectInfo.json";
import Image from "next/image";

interface Props {
  onClose: () => void;
  open: boolean;
}

export default function MobileLinks({ onClose, open }: Props) {
  return (
    <div
      className={styles.container + " " + (open ? styles.open : styles.closed)}
    >
      <button className={styles.x} onClick={onClose}>
        <Image src="/x.svg" alt="Close Menu" width={32} height={32} />
      </button>
      <div className={styles.innerContainer}>
        <p className={styles.linkText}>projects</p>
        <div className={styles.projectsContainer}>
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
        <Link className={styles.linkText} href="/about">
          about
        </Link>
        <Link className={styles.linkText} href="/Heli_Balsara_resume.pdf">
          resume
        </Link>
      </div>
    </div>
  );
}
