import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import LittleSection from "@/components/LittleSection";

export default function SmartNotes() {
  return (
    <div>
      <Navbar />
      <div className={styles.topContainer}>
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
        <div className={styles.horizontalLine} />
        <div className={styles.problemSection}>
          <h1>The Problem</h1>
          <p>
            The college learning experience is a vast, end-to-end process both
            inside and outside the classroom. There&apos;s a myriad of ways we
            learn and engage with course content. However, many find the{" "}
            <strong>current learning process disengaging</strong> and{" "}
            <strong>unaccommodating</strong> to each individual student’s needs.
          </p>
        </div>
        <div className={styles.questionSection}>
          <p>Ultimately, our question is...</p>
          <p className={styles.bigP}>
            <strong>HMW</strong> improve a college student’s learning
            experience?
          </p>
        </div>
      </div>
      <div className={styles.greySection}>
        <div className={styles.insideSection}>
          <h1>Research Methods</h1>
          <div className={styles.imageContainer}>
            <Image
              src="/smartnotesGraphic.svg"
              width={0}
              height={0}
              style={{ height: "100%", width: "auto" }}
              alt=""
            />
          </div>
          <LittleSection title="Survey">
            <p>
              After conducting secondary research online and finding students
              were less engaged and motivated in class, I gathered quantitative
              research focused on the students at Berkeley through a survey.
            </p>
          </LittleSection>
        </div>
      </div>
    </div>
  );
}
