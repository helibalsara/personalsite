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
    <div className="flex flex-row gap-20">
      <div className="flex flex-col gap-2 items-center w-1/5">
        <p className="text-base font-normal text-center">{title}</p>
        <Image
          src={before}
          alt={before}
          width={550}
          height={1105}
          style={{ height: "auto", width: "100%" }}
        />
      </div>
      <div className="flex flex-row gap-4 w-4/5">
        <div className="flex-1">
          <Image
            src={after}
            alt={after}
            width={904}
            height={1782}
            style={{ height: "auto", width: "100%", borderRadius: "49px" }}
          />
        </div>
        <div className="flex flex-1 flex-col gap-10 justify-center">
          {features.map(({ heading, content }: Feature) => (
            <div className="flex flex-col gap-2" key={heading}>
              <p className="text-sm font-bold">{heading}</p>
              <p className="text-sm">{content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
