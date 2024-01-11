import styles from "./index.module.css";
import Image from "next/image";

interface Props {
  number: number;
  title: string;
  currentImage: string;
  newImage: string;
  currentText: string;
  newText: string;
}

export default function FinalRecommendation({
  number,
  title,
  currentImage,
  currentText,
  newImage,
  newText,
}: Props) {
  return (
    <div className={styles.container}>
      <h2>
        {number}/ {title}
      </h2>
      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.text}>
            <p>
              <strong>current</strong>
            </p>
            <p>{currentText}</p>
          </div>
          <Image
            src={currentImage}
            alt={currentImage}
            width={456}
            height={285}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className={styles.column}>
          <div className={styles.text}>
            <p>
              <strong>new</strong>
            </p>
            <p>{newText}</p>
          </div>
          <Image
            src={newImage}
            alt={newImage}
            width={456}
            height={284}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
