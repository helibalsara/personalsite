import Image from "next/image";
import { ReactNode } from "react";

interface EnhancementSectionProps {
  currentImage: {
    src: string;
    width: string;
  };
  currentText: ReactNode;
  redesignImage: {
    src: string;
    width: string;
  };
  redesignText: ReactNode;
  finalImage: {
    src: string;
    width: string;
  };
  finalText: {
    title: string;
    description: ReactNode;
  };
  title: string;
  titleColor: string;
  gradient: {
    from: string;
    to: string;
  };
}

export default function EnhancementSection({
  currentImage,
  currentText,
  redesignImage,
  redesignText,
  finalImage,
  finalText,
  title,
  titleColor,
  gradient,
}: EnhancementSectionProps) {
  return (
    <>
      <p className="text-2xl font-bold" style={{ color: titleColor }}>
        {title}
      </p>
      <div className="flex flex-col gap-0">
        <div className="flex flex-col gap-8 bg-[#EDEDED] rounded-t-3xl px-4 py-8">
          <p className="text-sm">CURRENTLY</p>
          <div className="flex flex-row gap-8 items-center">
            <Image
    quality={100}    
              src={currentImage.src}
              width={340 * 2}
              height={212 * 2}
              style={{ height: "auto", width: currentImage.width }}
              alt="current design"
            />
            <p>{currentText}</p>
          </div>
          <p className="text-sm">REDESIGN</p>
          <div className="flex flex-row gap-8 items-center">
            <Image
    quality={100}    
              src={redesignImage.src}
              width={475 * 2}
              height={308 * 2}
              style={{ height: "auto", width: redesignImage.width }}
              alt="redesign"
            />
            <p>{redesignText}</p>
          </div>
        </div>
        <div 
          className="flex flex-row items-center gap-4 rounded-b-3xl px-4 py-8"
          style={{ background: `linear-gradient(to right, ${gradient.from}, ${gradient.to})` }}
        >
          <p className="text-sm text-white">
            <strong>{finalText.title}</strong>
            <br />
            <br />
            {finalText.description}
          </p>
          <Image
    quality={100}    
            src={finalImage.src}
            width={600 * 2}
            height={372.94 * 2}
            style={{ height: "auto", width: finalImage.width }}
            alt="final design"
          />
        </div>
      </div>
    </>
  );
}
