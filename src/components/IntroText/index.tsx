"use client";

import Image from "next/image";
import React, { useState, useEffect, CSSProperties } from "react";

export default function IntroText() {
  const COPTER_WIDTH = 94;
  const COPTER_HEIGHT = 121;

  const [imageSrc, setImageSrc] = useState<string>("/helicopter.svg");
  const [imageStyle, setImageStyle] = useState<CSSProperties>({
    cursor: "pointer",
    zIndex: 999,
  });
  const [isMoving, setIsMoving] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setIsMoving(true);
    setTimeout(() => {
      setImageStyle((prev) => ({
        ...prev,
        position: "absolute",
        left: event.clientX - COPTER_WIDTH / 2,
        top: event.clientY - COPTER_HEIGHT / 2 + window.scrollY,
      }));
    }, 100);
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
      }, 100);
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMoving]);

  return (
    <div className="flex flex-col gap-4 items-start lg:px-[288px] md:px-[144px] px-[72px] w-full">
      <h2 className="text-black text-4xl md:text-5xl font-normal">heli balsara</h2>
      <p className="text-black text-xl md:text-[28px] font-medium">
        is a product designer aiming to create simple and innovative digital
        solutions via human-centric thinking
      </p>
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-col gap-3 items-start pt-12 md:pt-0 max-w-[60%]">
          <h4 className="text-black text-base md:text-xl font-normal">previously</h4>
          <p className="text-black text-base font-medium">
            a product design intern @ Housecall Pro
          </p>
        </div>
        <div className="hidden md:flex flex-row items-end gap-8">
          {!isMoving && (
            <div className="flex flex-col items-end gap-3">
              <Image
    quality={100}    
                src="/arrow.svg"
                width={53.4}
                height={27.48}
                alt="arrow"
              />
              <p className="text-xs pr-4 pb-3">click to adventure with me!</p>
            </div>
          )}
          <Image
    quality={100}    
            src={imageSrc}
            width={COPTER_WIDTH}
            height={COPTER_HEIGHT}
            alt="helicopter"
            style={imageStyle}
            onClick={handleClick}
          />
        </div>
        {isMoving && (
          <div className="flex flex-row items-end gap-8">
            <div className="flex flex-col items-end gap-3">
              <Image
    quality={100}    
                src="/arrow.svg"
                width={53.4}
                height={27.48}
                alt="arrow"
                style={{ opacity: 0 }}
              />
              <p className="text-xs pr-4 pb-3" style={{ opacity: 0 }}>
                click to adventure with me!
              </p>
            </div>
            <Image
    quality={100}    
              src={imageSrc}
              width={COPTER_WIDTH}
              height={COPTER_HEIGHT}
              alt="helicopter"
              style={{ opacity: 0 }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
