"use client";

import Image from "next/image";

export default function Footer({ className }: { className?: string }) {
  return (
    <div
      className={`flex flex-col gap-6 bg-[#e1e1e1] px-16 py-16 ${
        className || ""
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-[83px]">
        <div className="flex flex-col items-center md:items-start gap-6">
          <h2 className="text-center md:text-left text-black text-3xl md:text-4xl font-normal">
            thanks for stopping by!
          </h2>
          <p className="text-center md:text-left text-black text-xl font-normal">
            Get in touch :)
          </p>
          <div className="flex flex-row gap-4 items-center justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/in/heli-balsara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={50}
                height={50}
              />
            </a>
            <a
              href="https://www.instagram.com/heliii.b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-grow items-center justify-center md:justify-end mt-4 md:mt-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-black text-xl font-normal inline-block cursor-pointer hover:opacity-60"
          >
            ↑ back to top
          </button>
        </div>
      </div>
    </div>
  );
}
