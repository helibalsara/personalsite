import FinalDesign from "@/components/FinalDesign";
import { ReactNode } from "react";

interface FinalDesignItem {
  title?: string;
  description: ReactNode;
  imageSrc: string;
}

interface FinalDesignsSectionProps {
  backgroundColor?: string;
  textColor?: string;
  title?: string;
  subtitle?: ReactNode;
  items: FinalDesignItem[];
}

export default function FinalDesignsSection({
  backgroundColor = "#EDEDED",
  textColor = "black",
  title = "Final Designs",
  subtitle = "Sneak Peak!!",
  items,
}: FinalDesignsSectionProps) {
  return (
    <div 
      className="py-8 md:py-16 px-4 md:px-36"
      style={{ backgroundColor, color: textColor }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-4">{title}</h2>
      <h4 className="text-lg md:text-xl italic mb-4">{subtitle}</h4>
      <div className="flex flex-col gap-8 md:gap-16">
        {items.map((item, index) => (
          <FinalDesign
            key={index}
            title={item.title}
            description={item.description}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </div>
  );
} 