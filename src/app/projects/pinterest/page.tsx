import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Pinterest() {
  return (
    <>
      <Navbar />
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/pinterest.svg"
            width={0}
            height={0}
            style={{ height: "100%", width: "auto" }}
            alt="pinterest"
            priority
          />
          <div className={styles.textContainer}>
            <h3 className={styles.noBold}>
              Improving the <strong>3-step ad creation process</strong> on
              Pinterest for <strong>small-medium businesses</strong> through
              Berkeley Innovation.
            </h3>
            <div className={styles.titleAndDescription}>
              <h3>Role</h3>
              <p>Product Design Consultant</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Duration</h3>
              <p>September 2023- December 2023</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Disciplines</h3>
              <p>UI Designer, Human- Centric Design, UX Research</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Team</h3>
              <p>
                Sarah Suen (PM), Uyen Phan, Michid Bayambajav, Joanna Ye, Angie
                Nguyen, and me!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.horizontalLine} />
        <div className={styles.problemSection}>
          <h1>The Challenge</h1>
          <p>
            Pinterest is a social media platform dedicated to providing
            motivation and inspiration. They challenged Berkeley Innovation, a
            design consultancy at Berkeley, to improve their simple three-step
            ad creation process for small medium businesses. As the Synthesis
            Lead for this project, I guided the team to finalize contextual
            inquiries and synthesize research insights through{" "}
            <strong>affinity mapping</strong>
            and journey mapping. I also contributed to research, ideation,
            designing wireframes, prototyping and pitching.{" "}
            <strong>With that, we were asked:</strong>
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
      <ContactForm />
    </>
  );
}
