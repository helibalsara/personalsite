import Image from "next/image";

interface PinterestCompetitorGridProps {
  items: {
    title: string;
    description: React.ReactNode;
    images: string[];
  }[];
}

export default function PinterestCompetitorGrid({
  items,
}: PinterestCompetitorGridProps) {
  return (
    <div className="grid grid-cols-2 gap-8 px-[90px]">
      {items.map((item) => (
        <div className="flex flex-row gap-4" key={item.title}>
          <div className="flex flex-col gap-4">
            {item.images.map((image) => (
              <Image
                key={image}
                src={image}
                alt={item.title}
                width={50}
                height={50}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row w-fit bg-[#B72C3B] rounded-full px-6 py-1">
              <p className="text-white font-bold text-lg">{item.title}</p>
            </div>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
}
