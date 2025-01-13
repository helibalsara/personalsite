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
      className="py-16 px-36"
      style={{ backgroundColor, color: textColor }}
    >
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <h4 className="text-xl italic mb-4">{subtitle}</h4>
      <div className="flex flex-col gap-16">
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