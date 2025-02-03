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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-[90px]">
      {items.map((item) => (
        <div className="flex flex-row gap-4" key={item.title}>
          <div className="flex shrink-0 flex-col gap-4">
            {item.images.map((image) => (
              <Image
                key={image}
                src={image}
                alt={item.title}
                width={40}
                height={40}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row w-fit bg-[#B72C3B] rounded-full px-4 md:px-6 py-1">
              <p className="text-white font-bold text-base md:text-lg">{item.title}</p>
            </div>
            <div className="text-sm md:text-base">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
