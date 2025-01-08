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
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <Image
              src={src}
              width={width * 2}
              height={height * 2}
              alt={alt}
              style={{
                height: "auto",
                width: "auto",
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
              }}
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 w-8 h-8 rounded-full flex items-center justify-center"
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
