import Image from "next/image";

interface Feature {
  heading: string;
  content: string;
}

interface Props {
  title: string;
  before: string;
  after: string;
  features: Feature[];
}

export default function PageSection({ title, before, after, features }: Props) {
  return (
    <div className="flex flex-row gap-12">
      <p className="text-black text-right text-xl font-normal w-[100px] flex-[0_0_auto]">{title}</p>
      <Image
        src={before}
        alt={before}
        width={145}
        height={285}
      />
      <div className="flex flex-row gap-6 pl-12">
        <Image
          src={after}
          alt={after}
          width={279.012}
          height={550}
        />
        <div className="flex flex-col gap-12 justify-center">
          {features.map(({ heading, content }: Feature) => (
            <div className="flex flex-col gap-2" key={heading}>
              <p>
                <strong>{heading}</strong>
              </p>
              <p>{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
