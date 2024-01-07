import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.background}>
      <Navbar darkTheme />
      <div className={styles.container}>
        <div className={styles.topContainer}>
          <div>
            <Image
              alt="profile"
              src="/about/profile.png"
              width={393}
              height={442.77}
            />
          </div>
          <div className={styles.textContainer}>
            <h1>hi, i&apos;m heli!</h1>
            <p>
              I’m a senior at UC Berkeley majoring in Cognitive Science &
              minoring in Data Science with a certificate in Design Innovation.
            </p>
            <p>
              You can catch me fostering a design community at Design @
              Berkeley, consulting on some cool projects at Berkeley Innovation,
              shooting golds with Cal Archery, and building up my photography
              portfolio with my friends! Enjoy some of my favorite shots below~
            </p>
          </div>
        </div>
        <div
          className={styles.imageGrid}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          <Image
            alt="image1"
            src="/about/image1.png"
            width={300}
            height={300}
          />
          <Image
            alt="image2"
            src="/about/image2.png"
            width={300}
            height={300}
          />
          <Image
            alt="image3"
            src="/about/image3.png"
            width={300}
            height={300}
          />
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
