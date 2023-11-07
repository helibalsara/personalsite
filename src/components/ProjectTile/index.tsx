import Image from "next/image";
import styles from "./index.module.css";

interface Props {
  roleType: string;
  title: string;
  subtitle: string;
  description: string;
  image: string; // path to image file
}

export default function ProjectTile({
  roleType,
  title,
  subtitle,
  description,
  image,
}: Props) {
  return (
    <div className={styles.container}>
      <Image src={image} alt="Smart Notes" width={576} height={337} />
      <div className={styles.textContainer}>
        <p className={styles.roleType}>{roleType}</p>
        <h1 className={styles.title}>{title}</h1>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
