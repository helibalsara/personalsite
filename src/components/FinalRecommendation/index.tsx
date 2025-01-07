import Image from "next/image";

interface Props {
  number: number;
  title: string;
  image: string;
  children: React.ReactNode;
}

export default function FinalRecommendation({
  number,
  title,
  image,
  children,
}: Props) {
  return (
    <div className="flex gap-10 justify-between [&>*]:flex-1">
      <div className="flex flex-col gap-2">
        <h2 className="text-black font-manrope text-2xl font-bold">
          {number}/ {title}
        </h2>
        {children}
      </div>
      <Image
        src={image}
        alt={image}
        width={456}
        height={285}
        style={{ height: "auto" }}
      />
    </div>
  );
}
