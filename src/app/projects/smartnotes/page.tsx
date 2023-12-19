import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";

export default function SmartNotes() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src="/smartnotes.svg" layout="fill" alt="smartnotes" />
        </div>
      </div>
    </>
  );
}
