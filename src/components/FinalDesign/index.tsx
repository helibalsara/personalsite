import Image from "next/image";

interface FinalDesignProps {
  title?: string;
  description: React.ReactNode;
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function FinalDesign({
  title,
  description,
  imageSrc,
  imageWidth = 600,
  imageHeight = 372.9,
}: FinalDesignProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 md:justify-between">
      <div className="w-full md:w-1/3 flex flex-col gap-2">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-xl">{description}</p>
      </div>
      <div className="w-full md:w-2/3">
        <Image
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          style={{ height: "auto", width: "100%" }}
          alt="project section"
        />
      </div>
    </div>
  );
} 