"use client";

import Navbar from "@/components/Navbar";
import IntroText from "@/components/IntroText";
import ProjectTile from "@/components/ProjectTile";
import projects from "../projectInfo.json";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-gradient-to-tr from-[#aba9a9] to-[rgba(251,251,251,0.2)] flex items-center justify-center">
        <IntroText />
      </div>
      <div className="flex flex-col items-start gap-[84px] pt-[101px] pl-[144px] pr-[67px]">
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
