import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import BigSection from "@/components/BigSection";
import LittleSection from "@/components/LittleSection";

export default function InternConnect() {
  return (
    <>
      <Navbar />
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/internConnect.svg"
            width={0}
            height={0}
            style={{ height: "100%", width: "auto" }}
            alt="InternConnect"
            priority
          />
          <div className={styles.textContainer}>
            <h3 className={styles.noBold}>
              InternConnect is an online <strong>community</strong> platform for
              computer science students looking to{" "}
              <strong>level up their career</strong>.
            </h3>
            <div className={styles.titleAndDescription}>
              <h3>Role</h3>
              <p>UI Designer</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Duration</h3>
              <p>June 2023 - August 2023</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Disciplines</h3>
              <p>UI Design, Branding</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Team</h3>
              <p>Sekar Setyanto, Yuka Natsuki, Te-Jung Chen, and Anyan Xien</p>
            </div>
          </div>
        </div>
        <div className={styles.horizontalLine} />
        {/* <div className={styles.problemSection}>
          <h1>The Challenge</h1>
          <p className={styles.bigP}>
            How might we implement{" "}
            <span className={styles.green}>sensory elements</span> to make party
            card games cater to visual impairments and foster understanding
            amongst normal-sighted players, bridging the gap and{" "}
            <span className={styles.green}>promoting inclusivity</span>?
          </p>
        </div>
        <div className={styles.questionSection}>
          <p className={styles.enjoyable}>
            Card games are enjoyable, but many card games require the ability to
            see therefore leaving out the ability for those with visual
            impairments to play or be left at a disadvantage.
          </p>
        </div>*/}
      </div>
      <div className={styles.wipContainer}>
        <h6 className={styles.italic} id={styles.wip}>
          Work in progress... Come back soon!
        </h6>
        <Image
          src="/whisper/panda.svg"
          alt="WIP Panda"
          width={200}
          height={0}
          style={{ height: "auto" }}
        />
      </div>
      <ContactForm />
    </>
  );
}
