"use client";

import styles from "./index.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function IntroText() {
  const COPTER_WIDTH = 94;
  const COPTER_HEIGHT = 121;

  const [imageSrc, setImageSrc] = useState<string>("/helicopter.svg");
  const [imageStyle, setImageStyle] = useState<{
    position?: string;
    left?: number;
    top?: number;
    cursor: string;
    transform?: string;
    zIndex: number;
  }>({ cursor: "pointer", zIndex: 999 });
  const [isMoving, setIsMoving] = useState<boolean>(false);

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
            left: event.clientX - COPTER_WIDTH / 2,
            top: event.clientY - COPTER_HEIGHT / 2 + window.scrollY,
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
    <div className={styles.textContainer}>
      <h2 className={styles.name}>heli balsara</h2>
      <p className={styles.description}>
        is a product designer aiming to create simple and innovative digital
        solutions through human-centric thinking
      </p>
      <div className={styles.copterContainer}>
        <div className={styles.roleContainer}>
          <h4 className={styles.currently}>currently</h4>
          <p className={styles.role}>a product design intern @ Housecall Pro</p>
        </div>
        {useDesktopMediaQuery() && (
          <Image
            src={imageSrc}
            width={COPTER_WIDTH}
            height={COPTER_HEIGHT}
            alt="helicopter"
            style={imageStyle}
            onClick={handleClick}
          />
        )}
        {isMoving && (
          <Image
            src={imageSrc}
            width={COPTER_WIDTH}
            height={COPTER_HEIGHT}
            alt="helicopter"
            style={{ opacity: 0 }}
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
