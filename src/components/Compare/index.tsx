import Image from "next/image";

interface Props {
  number: number;
  title: string;
  currentImage: string;
  newImage: string;
  currentText: string;
  newText: string;
}

export default function FinalRecommendation({
  number,
  title,
  currentImage,
  currentText,
  newImage,
  newText,
}: Props) {
  return (
    <div className="flex flex-col gap-12">
      <h2 className="font-manrope text-2xl font-bold">
        {number}/ {title}
      </h2>
      <div className="flex justify-between gap-[76px]">
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <p className="text-xs">
              <strong>current</strong>
            </p>
            <p className="text-xs">{currentText}</p>
          </div>
          <Image
            src={currentImage}
            alt={currentImage}
            width={456}
            height={285}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <p className="text-xs">
              <strong>new</strong>
            </p>
            <p className="text-xs">{newText}</p>
          </div>
          <Image
            src={newImage}
            alt={newImage}
            width={456}
            height={284}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
