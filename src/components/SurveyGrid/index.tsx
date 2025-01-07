import Image from "next/image";

interface SurveyItemProps {
  imageSrc: string;
  title: string;
  items: string[];
}

interface SurveyGridProps {
  items: SurveyItemProps[];
}

export default function SurveyGrid({ items }: SurveyGridProps) {
  return (
    <div className="grid grid-cols-2 gap-8 self-center">
      {items.map((item, index) => (
        <div key={index} className="flex flex-row gap-2">
          <Image
            src={item.imageSrc}
            width={400}
            height={200}
            style={{ height: "auto", width: "100%", maxWidth: "100px" }}
            alt={`survey ${index + 1}`}
          />
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl">{item.title}</p>
            <ul className="list-disc list-inside pl-2">
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex} className="text-sm font-manrope">
                  {listItem}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
} 