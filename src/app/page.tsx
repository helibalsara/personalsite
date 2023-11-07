import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import IntroText from "../components/IntroText";

export default function Home() {
  return (
    <div className={styles.gradient}>
      <Navbar />
      <div className={styles.introTextContainer}>
        <IntroText />
      </div>
    </div>
  );
}
