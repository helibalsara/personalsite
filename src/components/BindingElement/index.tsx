import Image from "next/image";

interface BindingElementProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function BindingElement({
  imageSrc,
  title,
  description,
}: BindingElementProps) {
  return (
    <div className="flex flex-row gap-2">
      <Image
        src={imageSrc}
        width={50}
        height={50}
        alt={title.toLowerCase()}
        priority
      />
      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-base">{description}</p>
      </div>
    </div>
  );
}
