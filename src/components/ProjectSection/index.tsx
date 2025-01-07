import Image from "next/image";

interface ProjectSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function ProjectSection({
  title,
  description,
  imageSrc,
  imageWidth = 600,
  imageHeight = 372.9,
}: ProjectSectionProps) {
  return (
    <div className="flex-1 flex flex-col md:flex-row gap-8">
      <div className="flex-1 flex-col gap-2">
        <p className="text-2xl font-bold">{title}</p>
        <p>{description}</p>
      </div>
      <div className="flex-1">
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