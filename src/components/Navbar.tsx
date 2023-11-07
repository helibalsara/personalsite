import styles from "./Navbar.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <Image
          src="/logo.svg"
          alt="HB Logo"
          className={styles.vercelLogo}
          width={0}
          height={0}
          style={{ height: "100%", width: "auto" }} // optional
        />

        {/* TODO: Turn these into links */}
        <div className={styles.linksContainer}>
          <p>projects</p>
          <p>about</p>
          <p>resume</p>
        </div>
      </div>
    </div>
  );
}
