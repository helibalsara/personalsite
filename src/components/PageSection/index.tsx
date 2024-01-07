import styles from "./index.module.css";
import Image from "next/image";

interface Feature {
  heading: string;
  content: string;
}

interface Props {
  title: string;
  before: string;
  after: string;
  features: Feature[];
}

export default function PageSection({ title, before, after, features }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <Image
        src={before}
        alt={before}
        width={145}
        height={285}
        // style={{ width: "auto", height: "100%" }}
      />
      <div className={styles.afterAndText}>
        <Image
          src={after}
          alt={after}
          width={279.012}
          height={550}
          // style={{ width: "auto", height: "100%" }}
        />
        <div className={styles.featuresContainer}>
          {features.map(({ heading, content }: Feature) => (
            <div className={styles.feature} key={heading}>
              <p>
                <strong>{heading}</strong>
              </p>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
