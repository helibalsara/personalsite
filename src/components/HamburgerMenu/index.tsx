import styles from "./index.module.css";

interface Props {
  darkTheme?: boolean;
}

export default function HamburgerMenu({ darkTheme }: Props) {
  return (
    <div className={styles.hamburgerMenu}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={styles.hamburgerLine + " " + (darkTheme && styles.light)}
        />
      ))}
    </div>
  );
}
