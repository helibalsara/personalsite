"use client";

import { useState } from "react";
import styles from "./index.module.css";

interface EmailParams {
  email: string;
  name: string;
  message: string;
}

export default function ContactForm() {
  const [hasSent, setHasSent] = useState<boolean>(false);

  return (
    <form
      onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const data = Object.fromEntries(formData) as unknown as EmailParams;
        await fetch("/api/email", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });

        setHasSent(true);
        setTimeout(() => {
          setHasSent(false);
        }, 1000);
      }}
    >
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <div className={styles.leftContainer}>
            <h1 className={styles.getInTouch}>get in touch!</h1>
            <h1 className={styles.emailText}>hbalsara@berkeley.edu</h1>
          </div>
          <div className={styles.middleContainer}>
            <div className={styles.textField}>
              <input
                className={styles.nameEmail}
                name="name"
                type="text"
                placeholder="name"
                required
              />
            </div>
            <div className={styles.textField}>
              <input
                className={styles.nameEmail}
                name="email"
                type="email"
                placeholder="email"
                required
              />
            </div>
          </div>
          <div className={styles.rightContainer}>
            <textarea
              className={styles.message}
              name="message"
              placeholder="message"
              required
            />
          </div>
        </div>
        <button className={styles.submit} type="submit">
          {hasSent ? "sent!" : "submit"}
        </button>
      </div>
    </form>
  );
}
