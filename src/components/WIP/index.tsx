import styles from "./index.module.css";
import Image from "next/image";

export default function WIP() {
  return (
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
  );
}
