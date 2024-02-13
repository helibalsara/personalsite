"use client";

import Button from "@/components/Button";
import styles from "./page.module.css";
import { useState } from "react";
import RadioButton from "@/components/RadioButton";
import Hearts from "./hearts.svg";

const questions = [
  "Where did we eat on our first date?",
  "How did I slide into your DMs?",
  "Where did we first get boba together?",
  "When we went horse riding, what was my horse's name?",
  "What was the first gift I got you?",
  "How much do I love you?",
  "Will you be my Valentine?",
];

const options = [
  ["Hancook", "Ippudo", "KoJa Kitchen", "Angeline's"],
  [
    "I complimented your post",
    "I asked a question about GBO",
    "I used a corny pickup line",
    "I asked what you thought about my music",
  ],
  ["Sweetheart Cafe", "Feng Cha", "Sharetea", "TP Tea"],
  ["Malibu", "Topanga", "Mocha", "Jackie"],
  ["Earrings", "A rose", "A necklace", "A tiny bulbasaur"],
  ["I don't", "INFINITY", "-1", "A little"],
  ["Maybe", "Nah", "YES <3", "No"],
];

const answers = [3, 1, 3, 0, 0, 1, 2];

export default function Quiz() {
  const [index, setIndex] = useState<number>(-1);
  const [selectedOption, setSelectedOption] = useState<number>();
  const [wrong, setWrong] = useState<boolean>(false);
  const [submitFlipper, setSubmitFlipper] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Hearts />
        <h1>Do you remember our story?</h1>

        {index >= 0 && (
          <>
            <p
              className={
                wrong ? (submitFlipper ? styles.shake0 : styles.shake1) : ""
              }
              style={wrong ? { color: "red" } : {}}
            >
              {questions[index]}
            </p>

            <div className={styles.optionsContainer}>
              {options[index].map((option: string, optionIndex: number) => (
                <RadioButton
                  key={optionIndex}
                  value={optionIndex}
                  text={option}
                  onChange={() => setSelectedOption(optionIndex)}
                  checked={optionIndex == selectedOption}
                />
              ))}
            </div>
          </>
        )}
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => {
              if (selectedOption == answers[index] || index == -1) {
                setSelectedOption(undefined);
                setIndex((prevIndex: number) => prevIndex + 1);
                setWrong(false);
              } else if (selectedOption != answers[index]) {
                setWrong(true);
                setSubmitFlipper((prevFlipper: boolean) => !prevFlipper);
              }
            }}
          >
            <p>{index == -1 ? "Continue" : "Submit"}</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
