import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import LittleSection from "@/components/LittleSection";
import ContactForm from "@/components/ContactForm";
import BigSection from "@/components/BigSection";

export default function SmartNotes() {
  return (
    <>
      <Navbar />
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/smartnotes.png"
            width={536}
            height={339}
            style={{ height: "100%", width: "auto" }}
            alt="smartnotes"
            priority
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
            src="/smartnotes/smartnotesGraphic.svg"
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
                src="/smartnotes/smartnotesGraphic2.svg"
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
                    src="/smartnotes/checkboxesIcon.svg"
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
                    src="/smartnotes/puzzledIcon.svg"
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
                    src="/smartnotes/expiredIcon.svg"
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
                  src="/smartnotes/affinityMap.png"
                  width={515.606}
                  height={489}
                  alt="affinity map"
                />
              </div>
            </div>
          </LittleSection>
          <LittleSection title="Persona">
            <Image
              src="/smartnotes/persona.png"
              width={756}
              height={425.25}
              style={{ width: "100%", height: "auto" }}
              alt="persona map"
            />
          </LittleSection>
          <LittleSection title="User Journey">
            <Image
              src="/smartnotes/journey.png"
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
        <div className={styles.redefiningContainer}>
          <div className={styles.arrowAndText}>
            <p>HMW improve a college student’s learning experience?</p>
            <Image
              src="/smartnotes/arrow.svg"
              width={0}
              height={0}
              style={{ height: "auto", width: "auto" }}
              alt="arrow"
            />
            <p>
              <strong>
                HMW improve a college student’s focus in class to aid
                understanding course content?
              </strong>
            </p>
          </div>
          <div className={styles.whyContainer}>
            <div className={styles.whyAndText}>
              <div className={styles.iconAndWhy}>
                <div className={styles.circleWithOne}>
                  <h6>1</h6>
                </div>
                <p className={styles.tealText}>Why focus in classrooms?</p>
              </div>
              <p>
                Many students struggle with maintaining concentration during
                lectures and preparing for exams. This often results in a sense
                of being pressed for time while understanding course content
                effectively. According to my survey, a significant{" "}
                <strong>66.7%</strong> of respondents said they{" "}
                <strong>disagreed to staying engaged during class</strong>.
              </p>
            </div>
            <div className={styles.whyAndText}>
              <div className={styles.iconAndWhy}>
                <div className={styles.circleWithOne}>
                  <h6>2</h6>
                </div>
                <p className={styles.tealText}>Why aid understanding?</p>
              </div>
              <p>
                Struggling to comprehend course material often causes students
                to feel anxious about their exams. This lack of understanding
                leads to a <strong>decrease in focus</strong>, creating a
                <strong>detrimental cycle</strong> where the inability to
                concentrate further impedes their understanding of the content.
              </p>
            </div>
          </div>
        </div>
      </BigSection>
      <BigSection title="Ideation" color="white">
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Crazy 8's">
            <div className={styles.crazy8sContainer}>
              <p>
                With all of my research synthesised into actionable insights, it
                was finally time to explore different solutions. I needed to
                hone in a solution that would help students maintain{" "}
                <strong>focus</strong> in the classroom and{" "}
                <strong>understand course content</strong> in a timely manner to
                get rid of that detrimental cycle of losing concentration.
              </p>
              <Image
                src="/smartnotes/crazy8s.png"
                width={753}
                height={391.56}
                style={{ width: "100%", height: "auto" }}
                alt="crazy8s"
              />
            </div>
          </LittleSection>
          <LittleSection title="Effort/ Impact Matrix">
            <div className={styles.effortContainer}>
              <p>
                The effort refers to the effort required to implement the
                solution in terms of resources of time, money, and technological
                feasibility. The impact is the ability of the product to meet
                all user needs outlined through research and synthesis.
              </p>
              <Image
                src="/smartnotes/effort.png"
                width={752.81}
                height={616.511}
                style={{ width: "100%", height: "auto" }}
                alt="effort"
              />
              <div className={styles.rightAlignDiv}>
                <p className={styles.rightAlignText}>
                  The blue sticky notes are solutions I decided to flesh out
                  further by building a pros/cons analysis as they were on the
                  higher side of the impact scale. After mapping out the pros
                  and cons, I decided to go with my <strong>SmartNotes</strong>{" "}
                  concept.
                </p>
              </div>
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection
        title="So... how will SmartNotes work?"
        color="white"
        extendLineBottom
        noBorderBottom
      >
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Initial Sketches & Mid-Fi">
            <div className={styles.sketchesContainer}>
              <Image
                src="/smartnotes/lowfi.png"
                width={471}
                height={322}
                style={{ height: "100%", width: "auto" }}
                alt="arrow"
              />
              <Image
                src="/smartnotes/midfi.svg"
                width={0}
                height={0}
                style={{ height: "auto", width: "auto" }}
                alt="midfi"
              />
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection color="grey" extendLineTop>
        <div className={styles.painContainer}>
          <h2 className={styles.addressPain}>
            How does it address user pain points?
          </h2>
          <div className={styles.addressColumnsContainer}>
            <div className={styles.addressColumn}>
              <div className={styles.addressTextAndCircle}>
                <div className={styles.circleWithOne}>1</div>
                <div>
                  <h3 className={styles.addressText}>
                    Lack of focus during class time
                  </h3>
                  <p>
                    SmartNotes gently vibrates when it detects the user has lost
                    focus,{" "}
                    <strong>
                      shift their attention and focus back into the class
                    </strong>
                    .
                  </p>
                </div>
              </div>
              <Image
                src="/smartnotes/voiceSearch.svg"
                width={0}
                height={0}
                style={{ height: "auto", width: "auto" }}
                alt="voiceSearch"
              />
              <div className={styles.addressTextAndCircle}>
                <div className={styles.circleWithOne}>3</div>
                <div>
                  <h3 className={styles.addressText}>
                    Time pressure to understand content
                  </h3>
                  <p>
                    With the reminders and summaries, students can{" "}
                    <strong>spend less time</strong> going back to rewatch
                    lecture and refer back to readings.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.addressColumn}>
              <Image
                src="/smartnotes/studyTogether.svg"
                width={0}
                height={0}
                style={{ height: "auto", width: "auto" }}
                alt="studyTogether"
              />
              <div className={styles.addressTextAndCircle}>
                <div className={styles.circleWithOne}>2</div>
                <div>
                  <h3 className={styles.addressText}>
                    Difficulty understanding course content
                  </h3>
                  <p>
                    SmartNotes provides{" "}
                    <strong>supplemental digestible summaries</strong> of the
                    lecture which can be as{" "}
                    <strong>broad or as detailed as needed</strong>. This can be
                    personalised to the students’ needs.
                  </p>
                </div>
              </div>
              <Image
                src="/smartnotes/savingTime.svg"
                width={0}
                height={0}
                style={{ height: "auto", width: "auto" }}
                alt="savingTime"
              />
            </div>
          </div>
        </div>
      </BigSection>
      <BigSection color="white" title="Reflection">
        <div className={styles.littleSectionContainer}>
          <LittleSection title="User Feedback">
            <p>
              Users enjoyed how it was a compact and usable everyday solution.
              They thought the summaries would be useful in supplementing
              lecture content. The varying levels of synthesis could help
              “pinpoint what I need to hear while studying.” One user expressed
              that they were a visual learner and hearing the summary would be
              difficult to understand, which is something I would explore
              further with this project.
            </p>
            <div className={styles.reflectionContainer}>
              <p>
                Having such a broad HMW statement was daunting at first, but I
                realized the importance of strong user research to narrow the
                scope. I wish I had established goals for my user research
                before diving deep into it and had spent more time developing a
                cleaner design.
              </p>
              <Image
                src="/smartnotes/reflection.svg"
                width={0}
                height={0}
                style={{ height: "auto", width: "auto" }}
                alt="reflection"
              />
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <ContactForm />
    </>
  );
}
