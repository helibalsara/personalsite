import styles from "./index.module.css";

interface Props {
    title: string;
    children: any;
}

export default function LittleSection({
    title,
    children
}: Props) {
  return (
    <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
}