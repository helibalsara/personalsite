import styles from "./index.module.css";

interface Props {
  title: string;
  color: "grey" | "white";
  children?: any;
  topBorder?: boolean;
}

export default function BigSection({
  title,
  color,
  children,
  topBorder,
}: Props) {
  return (
    <div
      className={color == "grey" ? styles.greySection : styles.whiteSection}
      id={topBorder ? styles.top : ""}
    >
      <div className={styles.insideSection}>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
