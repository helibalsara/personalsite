"use client";

import React, { useEffect, useRef, useState } from "react";

const FadeInElement: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const isElementInViewport = (element: HTMLDivElement | null) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    const height = rect.bottom - rect.top;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom - height / 2 <= window.innerHeight &&
      rect.right <= window.innerWidth
    );
  };

  const handleScroll = () => {
    if (isElementInViewport(elementRef.current)) {
      setIsVisible(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    if (isElementInViewport(elementRef.current)) {
      setIsVisible(true);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transform transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInElement;
