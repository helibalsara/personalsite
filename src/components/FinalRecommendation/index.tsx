import styles from "./index.module.css";
import Image from "next/image";

interface Props {
  number: number;
  title: string;
  image: string;
  children: React.ReactNode;
}

export default function FinalRecommendation({
  number,
  title,
  image,
  children,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <h2>
          {number}/ {title}
        </h2>
        {children}
      </div>
      <Image
        src={image}
        alt={image}
        width={0}
        height={0}
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
}
