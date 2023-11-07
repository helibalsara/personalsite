import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import IntroText from "../components/IntroText";
import ProjectTile from "@/components/ProjectTile";
import projects from "./projectInfo.json";

export default function Home() {
  return (
    <>
      <div className={styles.gradient}>
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
    </>
  );
}
