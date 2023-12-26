import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import LittleSection from "@/components/LittleSection";
import ContactForm from "@/components/ContactForm";
import BigSection from "@/components/BigSection";

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
      <BigSection title="Research Methods" color="grey" topBorder>
        <div className={styles.graphicContainer}>
          <Image
            src="/smartnotesGraphic.svg"
            width={0}
            height={0}
            style={{ height: "auto", width: "100%" }}
            alt=""
          />
        </div>
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Survey">
            <div className={styles.topLittleSection}>
              <p>
                After conducting secondary research online and finding students
                were less engaged and motivated in class, I gathered
                quantitative research focused on the students at Berkeley
                through a survey.
              </p>
              <Image
                src="/smartnotesGraphic2.svg"
                width={0}
                height={0}
                style={{ height: "auto", width: "100%" }}
                alt=""
              />
            </div>
          </LittleSection>
          <LittleSection title="User Interviews">
            <div className={styles.topLittleSection}>
              <p>
                Why was there was such a large difference in engagement levels
                inside and outside of class? I conducted{" "}
                <strong>4 30-minute interviews</strong> with students, one from
                each graduating class and found{" "}
                <strong>3 main pain points</strong>.
              </p>
              <div className={styles.painPointsContainer}>
                <div className={styles.painPoint}>
                  <Image
                    src="/checkboxesIcon.svg"
                    width={0}
                    height={0}
                    style={{ height: "30px", width: "auto" }}
                    alt="checkboxes"
                  />
                  <p>
                    Inability to remain focused during class usually stems from
                    completing other assignments/tasks.
                  </p>
                </div>
                <div className={styles.painPoint}>
                  <Image
                    src="/checkboxesIcon.svg"
                    width={0}
                    height={0}
                    style={{ height: "30px", width: "auto" }}
                    alt="checkboxes"
                  />
                  <p>
                    Inability to remain focused during class usually stems from
                    completing other assignments/tasks.
                  </p>
                </div>
                <div className={styles.painPoint}>
                  <Image
                    src="/expiredIcon.svg"
                    width={0}
                    height={0}
                    style={{ height: "30px", width: "auto" }}
                    alt="expired"
                  />
                  <p>
                    Students are completing course work in an effort to meet
                    deadlines and pass exams, not to retain the information
                    fully.
                  </p>
                </div>
              </div>
            </div>
          </LittleSection>
          <div className={styles.buffer} />
        </div>
      </BigSection>
      <BigSection title="Synthesis" color="white">
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Affinity Mapping">
            <div className={styles.affinityContainer}>
              <p>
                To pull all of the research findings together, I created an
                affinity map to narrow down the focus for this project. I only
                had a few days, so it was essential to break down to project
                scope. I focused on these 3 affinity clusters:
              </p>
              <div className={styles.figjamAndText}>
                <div className={styles.figTextContainer}>
                  <div>
                    <p className={styles.figTitle}>Focus</p>
                    <p>Lack of engagement and focus during class</p>
                  </div>
                  <div>
                    <p className={styles.figTitle}>
                      Understanding Course Content
                    </p>
                    <p>Difficulty absorbing and understanding content</p>
                  </div>
                  <div>
                    <p className={styles.figTitle}>Lack of Time</p>
                    <p>Not enough time to dedicate to learning content</p>
                  </div>
                </div>
                <Image
                  src="/affinityMap.png"
                  width={515.606}
                  height={489}
                  alt="affinity map"
                />
              </div>
            </div>
          </LittleSection>
          <LittleSection title="Persona">
            <Image
              src="/persona.png"
              width={756}
              height={425.25}
              style={{ width: "100%", height: "auto" }}
              alt="persona map"
            />
          </LittleSection>
          <LittleSection title="Persona">
            <Image
              src="/journey.png"
              width={756}
              height={603.056}
              style={{ width: "100%", height: "auto" }}
              alt="journey map"
            />
          </LittleSection>
          <div className={styles.rightAlignDiv}>
            <p className={styles.rightAlignText}>
              Creating a user persona and their journey map allowed me to hone
              in on the problem scope so that when I begin ideating, my
              solutions solve the main pain points at hand. At this point, I
              needed to <strong>add more context to my HMW</strong>.
            </p>
          </div>
        </div>
      </BigSection>
      <BigSection title="Redefining the HMW" color="white">
        <div className={styles.arrowsAndText}>
          <p>HMW improve a college student’s learning experience?</p>
          
        </div>
      </BigSection>
      <ContactForm />
    </div>
  );
}
