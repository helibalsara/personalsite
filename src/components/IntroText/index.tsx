"use client";

import styles from "./index.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function IntroText() {
  const [imageSrc, setImageSrc] = useState<string>("/helicopter.svg");
  const [imageStyle, setImageStyle] = useState({ cursor: "pointer" });
  const [isMoving, setIsMoving] = useState<boolean>(false);
  let lastMoveTime = 0; // Initialize lastMoveTime

  const handleClick = () => {
    setIsMoving(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const handleMouseMove = (event: MouseEvent) => {
      if (isMoving) {
        setTimeout(() => {
          setImageStyle((prev) => ({
            ...prev,
            position: "absolute",
            left: event.clientX - 90,
            top: event.clientY - 115 + window.scrollY,
          }));
        }, 100);

        setImageStyle((prev) => ({
          ...prev,
          cursor: "auto",
          transform:
            event.clientX < window.innerWidth / 2 ? "scaleX(-1)" : "scaleX(1)",
        }));
      }
    };

    if (isMoving) {
      interval = setInterval(() => {
        setImageSrc((prev) =>
          prev === "/helicopter.svg" ? "/helicopter2.svg" : "/helicopter.svg"
        );
        window.addEventListener("mousemove", handleMouseMove);
      }, 100);
    }
    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMoving]);

  const useDesktopMediaQuery = () =>
    useMediaQuery({
      minWidth: 769,
    });

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.name}>hey there!</h2>
        <p className={styles.description}>
          welcome in! check out some of my old work :)
        </p>
      </div>
      {useDesktopMediaQuery() && (
        <Image
          src={imageSrc}
          width={177}
          height={277}
          alt="helicopter"
          style={imageStyle}
          onClick={handleClick}
        />
      )}
    </div>
  );
}
