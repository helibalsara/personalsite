import Image from "next/image";

interface PinterestFinalRecommendationProps {
  title: string;
  description: React.ReactNode;
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function PinterestFinalRecommendation ({
  title,
  description,
  imageSrc,
  imageWidth = 600,
  imageHeight = 372.9,
}: PinterestFinalRecommendationProps) {
  return (
    <div className="flex flex-row gap-16">
      <div className="w-1/3 flex-col gap-2">
        <p className="text-2xl font-bold">{title}</p>
        {description}
      </div>
      <div className="w-2/3">
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          style={{ height: "auto", width: "100%" }}
          alt="project section"
          priority
        />
      </div>
    </div>
  );
} 