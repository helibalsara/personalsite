import styles from "./index.module.css";

interface Props {
  title?: string;
  color: "grey" | "white";
  children?: any;
  topBorder?: boolean;
  extendLineBottom?: boolean;
  extendLineTop?: boolean;
  noBorderBottom?: boolean;
}

export default function BigSection({
  title,
  color,
  children,
  topBorder,
  extendLineBottom,
  extendLineTop,
  noBorderBottom,
}: Props) {
  return (
    <div
      className={
        (color == "grey" ? styles.greySection : styles.whiteSection) +
        (!extendLineBottom ? " " + styles.shortenLineBottom : "") +
        (!extendLineTop ? " " + styles.shortenLineTop : "")
      }
      id={topBorder ? styles.top : noBorderBottom ? styles.noBorderBottom : ""}
    >
      <div className={styles.insideSection}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </div>
  );
}
