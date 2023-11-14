"use client";

import styles from "./index.module.css";

export default function ContactForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
          name: { value: string };
          email: { value: string };
          message: { value: string };
        };
        const name = target.name.value;
        const email = target.email.value;
        const message = target.message.value;

        console.log(email, message, name);
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
          submit
        </button>
      </div>
    </form>
  );
}
