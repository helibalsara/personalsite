import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import "./page.css";

export default function About() {
  return (
    <>
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
        <div className={styles.images}>
          <div className={styles.imageColumn}>
            <Image
              alt="image1"
              src="/about/image1.png"
              width={300}
              height={200}
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              alt="image4"
              src="/about/image4.png"
              width={300}
              height={360}
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              alt="image8"
              src="/about/image8.png"
              width={300}
              height={419.5}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.rightImages}>
            <div className={styles.images}>
              <div className={styles.imageColumn}>
                <Image
                  alt="image2"
                  src="/about/image2.png"
                  width={300}
                  height={200}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  alt="image5"
                  src="/about/image5.png"
                  width={300}
                  height={208.5}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  alt="image6"
                  src="/about/image6.png"
                  width={300}
                  height={203}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  alt="image9"
                  src="/about/image9.png"
                  width={300}
                  height={213.5}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className={styles.imageColumn}>
                <Image
                  alt="image3"
                  src="/about/image3.png"
                  width={300}
                  height={434}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  alt="image7"
                  src="/about/image7.png"
                  width={300}
                  height={200}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  alt="image10"
                  src="/about/image10.png"
                  width={300}
                  height={214}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className={styles.heartsAndText}>
              <Image
                alt="hearts"
                src="/about/hearts.svg"
                width={0}
                height={80}
                style={{ width: "auto", height: "auto" }}
              />
              <p>message for any photography inquiries, thanks!</p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </>
  );
}
