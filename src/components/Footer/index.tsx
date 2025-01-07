"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-col gap-6 bg-[#e1e1e1] px-16 py-16">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-[83px]">
        <div className="flex flex-col gap-11 md:gap-6">
          <h2 className="text-black text-4xl font-normal inline-block mr-16">
            thanks for stopping by!
          </h2>
          <p className="text-black text-xl font-normal inline-block">
            Get in touch :)
          </p>
          <div className="flex flex-row gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/heli-balsara/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
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
                src="/instagram.svg"
                alt="Instagram"
                width={50}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-grow items-center justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-black text-xl font-normal inline-block cursor-pointer hover:opacity-60"
          >
            ↑ back to top
          </button>
        </div>
      </div>
    </div>
  );
}
