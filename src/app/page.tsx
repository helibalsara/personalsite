"use client";

import Navbar from "@/components/Navbar";
import IntroText from "@/components/IntroText";
import ProjectTile from "@/components/ProjectTile";
import projects from "../projectInfo.json";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { animate } from "@motionone/dom";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  useEffect(() => {
    const blobs = document.querySelectorAll(".blob");
    blobs.forEach((blob) => {
      animate(
        blob,
        {
          transform: [
            "translate(0, 0)",
            "translate(200px, -100px)",
            "translate(-100px, 200px)",
            "translate(0, 0)",
          ],
        },
        {
          duration: Math.random() * 5000 + 5000,
          repeat: Infinity,
          easing: "ease-in-out",
        },
      );
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-transparent flex items-center justify-center overflow-hidden">
        <div
          className="blob absolute w-[400px] h-[400px] rounded-full bg-[#c4c2c2] opacity-100"
          style={{ zIndex: -1 }}
        ></div>
        <div
          className="blob absolute w-[350px] h-[350px] rounded-full bg-[#9b9999] opacity-100"
          style={{ left: "60%", zIndex: -1 }}
        ></div>
        <div
          className="blob absolute w-[300px] h-[300px] rounded-full bg-[#d1cfcf] opacity-100"
          style={{ left: "30%", top: "60%", zIndex: -1 }}
        ></div>
        <div
          className="blob absolute w-[300px] h-[300px] rounded-full bg-[#d1cfcf] opacity-100"
          style={{ left: "10%", top: "10%", zIndex: -1 }}
        ></div>
        <IntroText />
      </div>
      <div className="flex flex-col items-start gap-16 md:gap-[84px] pt-12 px-6 md:pt-[101px] md:pl-[144px] md:pr-[67px]">
        {displayedProjects.map((properties) => (
          <ProjectTile key={properties.title} {...properties} />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center py-[75px]">
        {!showAll && projects.length > 4 && (
          <button
            onClick={() => setShowAll(true)}
            className="text-gray-500 text-xl font-normal inline-block cursor-pointer hover:opacity-60"
          >
            show more ↓
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}
