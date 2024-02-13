"use client";

import Button from "@/components/Button";
import styles from "./page.module.css";
import { useState } from "react";

const questions = {
  "Where did we eat on our first date?": [
    "Angeline's",
    "KoJa Kitchen",
    "Hancook",
    "",
  ],
  "How did Shamith slide into your DMs?": [],
  "Where did we first get boba together?": [],
  "": [],
};

export default function Quiz() {
  const [index, setIndex] = useState<number>(-1);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Quiz</h1>
        <p>How well do you remember our story?</p>

        {}

        <Button onClick={() => setIndex((prevIndex: number) => prevIndex + 1)}>
          <p>{index == -1 ? "Continue" : "Submit"}</p>
        </Button>
      </div>
    </div>
  );
}
