import styles from "./index.module.css";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: Props) {
  return <button className={styles.button}>{children}</button>;
}
