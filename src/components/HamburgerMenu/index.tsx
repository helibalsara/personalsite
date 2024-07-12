import styles from "./index.module.css";

export default function HamburgerMenu() {
  return (
    <div className={styles.hamburgerMenu}>
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
      <div className={styles.hamburgerLine} />
    </div>
  );
}
