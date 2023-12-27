import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

interface Props {
  roleType: string;
  title: string;
  subtitle: string;
  description: string;
  image: string; // path to image file
  route: string;
}

export default function ProjectTile({
  roleType,
  title,
  subtitle,
  description,
  image,
  route,
}: Props) {
  return (
    <Link href={"/projects" + route} className={styles.link}>
      <div className={styles.container}>
        <Image
          src={image}
          alt={title}
          width={576}
          height={337}
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <p className={styles.roleType}>{roleType}</p>
          <h1 className={styles.title}>{title}</h1>
          <h3 className={styles.subtitle}>{subtitle}</h3>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </Link>
  );
}
