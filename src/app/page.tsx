"use client";

import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import IntroText from "@/components/IntroText";
import ProjectTile from "@/components/ProjectTile";
import projects from "../projectInfo.json";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.gradient}>
        <IntroText />
      </div>
      <div className={styles.projectTilesContainer}>
        {projects.map((properties) => (
          <ProjectTile key={properties.title} {...properties} />
        ))}
      </div>
      <ContactForm />
    </>
  );
}
