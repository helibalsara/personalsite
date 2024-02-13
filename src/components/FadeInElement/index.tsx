"use client";

import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const FadeInElement: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Function to check if element is in viewport
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

  // Function to handle the scroll event
  const handleScroll = () => {
    if (isElementInViewport(elementRef.current)) {
      setIsVisible(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  // Add a scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={elementRef}
      className={`fade-in-element ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default FadeInElement;
