"use client";

import { useState } from "react";
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

  return (
    <>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        style={{ ...style, cursor: "pointer" }}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-[85vw] max-h-[85vh] animate-scaleIn">
            <Image
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
              className="absolute -right-12 -top-12 text-white text-3xl hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
