"use client";

import Button from "@/components/Button";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import RadioButton from "@/components/RadioButton";
import Hearts from "./hearts.svg";

const questions = [
  "Where did we eat on our first date?",
  "How did I slide into your DMs?",
  "Where did we first get boba together?",
  "When we went horse riding, what was my horse's name?",
  "What was the first gift I got you?",
  "What pets will we get in our house?",
  "How much do I love you?",
  "How much do you love me?",
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
  ["Fish and Bird", "Two dogs", "Dog and Cat", "Panda and Koala"],
  ["I don't", "INFINITY", "-1", "A little"],
  [
    "You don't love me",
    "You don't love me",
    "You don't love me",
    "A lot (I hope)",
  ],
  ["Maybe", "Nah", "YES <3", "No"],
];

const answers = [3, 1, 3, 0, 0, 2, 1, 3, 2];

export default function Quiz() {
  const [index, setIndex] = useState<number>(-1);
  const [selectedOption, setSelectedOption] = useState<number>();
  const [wrong, setWrong] = useState<boolean>(false);
  const [submitFlipper, setSubmitFlipper] = useState<boolean>(false);

  const calculateBackground = () => {
    const percentageFilled = (index / questions.length) * 100; // Calculate the percentage of the container to be filled

    return { height: `${percentageFilled}%` };
  };

  return (
    <div className={styles.container}>
      <div className={styles.fillBackground} style={calculateBackground()} />
      {index < questions.length && (
        <div className={styles.card}>
          <div className={styles.quiz}>
            <Hearts />
            <h1>Do you remember our story?</h1>
            {index == -1 && (
              <p>
                We&apos;ve been together more than a year now! Before I ask you
                to be my Valentine, I need to find out if you remember how we
                got to this point. Don&apos;t worry, if you ever get stuck,
                I&apos;ll remind you of the answers because I love thinking
                about us. Good luck! :)
              </p>
            )}

            {0 <= index && index < questions.length && (
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
          </div>
          <div className={styles.buttonContainer}>
            <Button
              onClick={() => {
                if (selectedOption == answers[index] || index == -1) {
                  setSelectedOption(undefined);
                  setIndex((prevIndex: number) => prevIndex + 1);
                  setWrong(false);

                  if (index == -1) {
                    const audio = new Audio("/die_for_you.mp3");
                    audio.play();
                  }
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
      )}
    </div>
  );
}
