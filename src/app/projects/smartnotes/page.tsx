import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export default function SmartNotes() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/smartnotes.svg"
            width={0}
            height={0}
            style={{ height: "100%", width: "auto" }}
            alt="smartnotes"
          />
          <div className={styles.textContainer}>
            <h3 className={styles.noBold}>
              SmartNotes is an <strong>AI pen tool concept</strong> that aims to
              make <strong>reviewing for exams more time efficient</strong> for
              college students.
            </h3>
            <div className={styles.titleAndDescription}>
              <h3>Role</h3>
              <p>UX Research & Product Designer</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Duration</h3>
              <p>January 30 - February 3, 2023</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Disciplines</h3>
              <p>Human-Centric Design, Concept Design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
