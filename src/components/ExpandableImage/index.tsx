"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface ExpandableImageProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  style?: React.CSSProperties;
}

export default function ExpandableImage({
  src,
  width,
  height,
  alt,
  style,
}: ExpandableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    // Wait for animation to complete before removing from DOM
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 200);
  }, []);

  return (
    <>
      <Image
    quality={100}    
        src={src}
        width={width}
        height={height}
        alt={alt}
        style={{ ...style, cursor: "pointer" }}
        onClick={() => setIsOpen(true)}
      />
      {(isOpen || isClosing) && (
        <div
          className={`fixed inset-0 bg-black flex items-center justify-center z-50 p-4 ${
            isClosing ? "animate-fadeOut bg-opacity-0" : "animate-fadeIn bg-opacity-75"
          }`}
          onClick={handleClose}
        >
          <div className={`relative max-w-[85vw] max-h-[85vh] ${
            isClosing ? "animate-scaleOut" : "animate-scaleIn"
          }`}>
            <Image
    quality={100}    
              src={src}
              width={width * 2}
              height={height * 2}
              alt={alt}
              style={{
                height: "auto",
                width: "auto",
                maxWidth: "100%",
                maxHeight: "85vh",
                objectFit: "contain",
              }}
            />
            <button
              className="absolute -right-8 -top-3 text-white text-3xl hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
}
