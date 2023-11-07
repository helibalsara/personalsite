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
        <div className={styles.leftContainer}>
          <div className={styles.textField}>
            <input
              className={styles.name}
              name="name"
              type="text"
              placeholder="name"
              required
            />
            <div className={styles.line} />
          </div>
          <div className={styles.textField}>
            <input
              className={styles.email}
              name="email"
              type="email"
              placeholder="email"
              required
            />
            <div className={styles.line} />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <textarea
            className={styles.message}
            name="message"
            placeholder="message"
            required
          />
          <button className={styles.submit} type="submit">
            submit!
          </button>
        </div>
      </div>
    </form>
  );
}
