import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import IntroText from "@/components/IntroText";
import ProjectTile from "@/components/ProjectTile";
import projects from "./projectInfo.json";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <div className={styles.gradient + " " + styles.topGradient}>
        <Navbar />
        <div className={styles.introTextContainer}>
          <IntroText />
        </div>
      </div>
      <div className={styles.projectTilesContainer}>
        {projects.map((properties) => (
          <ProjectTile key={properties.title} {...properties} />
        ))}
      </div>

      <div className={styles.gradient + " " + styles.bottomGradient}>
        <h1 className={styles.getInTouch}>get in touch!</h1>
        <div className={styles.contactFormContainer}>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
