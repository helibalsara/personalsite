"use client";

import Button from "@/components/Button";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";
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
  const [showGo, setShowGo] = useState<boolean>(false);
  const [endGo, setEndGo] = useState<boolean>(false);

  const calculateBackground = () => {
    const percentageFilled = (index / questions.length) * 100; // Calculate the percentage of the container to be filled

    return { height: `${percentageFilled}%` };
  };

  const letsRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const letsEl = letsRef.current;
    if (!letsEl) return;

    const handleAnimationEnd = () => {
      setShowGo(true); // Show the "go" text
      letsEl.style.display = "none"; // Hide the "Let's" text
    };

    if (letsEl) {
      letsEl.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (letsEl) {
        letsEl.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [index]);

  const goRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const goEl = goRef.current;
    if (!goEl) return;

    const handleAnimationEnd = () => {
      setEndGo(true);
      goEl.style.display = "none";
    };

    if (goEl) {
      goEl.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (goEl) {
        goEl.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, [showGo]);

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
                I&apos;ll remind you of the answers because I love talking about
                us. Good luck! :)
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
      {index >= questions.length && (
        <div className={styles.end}>
          <p ref={letsRef} className={styles.lets}>
            Let&apos;s
          </p>
          {showGo && (
            <p ref={goRef} className={styles.go}>
              gooooooooooooooooooooo
            </p>
          )}
        </div>
      )}
      {endGo && (
        <div className={styles.row}>
          <div className={styles.scrollContainer}>
            <div className={styles.scroll1} />
          </div>
          <div className={styles.text}>
            <h1>I love you so much {"<3"}</h1>
            <p>
              Heli, I&apos;m so happy we got to make so many memories together
              already. I can&apos;t imagine a life without you anymore! I hope
              we make so many more memories in the future, and I&apos;ll never
              stop trying to make each and every moment together memorable.
              You&apos;re the most beautiful, kindest, most thoughtful person I
              have ever met. I&apos;m so lucky to have you in my life and I hope
              you see that too.
            </p>
            <p className={styles.right}>Love, Shamith</p>
          </div>
          <div className={styles.scrollContainer}>
            <div className={styles.scroll2} />
          </div>
        </div>
      )}
    </div>
  );
}
