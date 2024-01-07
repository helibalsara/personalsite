import styles from "./index.module.css";

interface Props {
  title?: string;
  color: "grey" | "white" | string;
  children?: any;
  topBorder?: boolean;
  extendLineBottom?: boolean;
  extendLineTop?: boolean;
  noBorderBottom?: boolean;
  noLine?: boolean;
}

export default function BigSection({
  title,
  color,
  children,
  topBorder,
  extendLineBottom,
  extendLineTop,
  noBorderBottom,
  noLine,
}: Props) {
  return (
    <div
      className={
        (color == "grey" ? styles.greySection : styles.whiteSection) +
        (!extendLineBottom ? " " + styles.shortenLineBottom : "") +
        (!extendLineTop ? " " + styles.shortenLineTop : "")
      }
      style={color !== "grey" && color !== "white" ? { background: color } : {}}
      id={topBorder ? styles.top : noBorderBottom ? styles.noBorderBottom : ""}
    >
      <div className={styles.insideSection} id={noLine ? styles.noLine : ""}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </div>
  );
}
