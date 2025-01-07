import Image from "next/image";
import Link from "next/link";
import FadeInElement from "../FadeInElement";

interface Props {
  roleType: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  route: string;
}

export default function ProjectTile({
  roleType,
  title,
  subtitle,
  description,
  image,
  route,
}: Props) {
  return (
    <Link href={"/projects" + route} className="no-underline text-inherit w-full">
      <FadeInElement>
        <div className="flex gap-8 flex-1 w-full lg:flex-row flex-col">
          <Image
            src={image}
            alt={title}
            width={576}
            height={337}
            className="w-full h-auto shadow-[0_3.67px_3.67px_0_rgba(0,0,0,0.25)] transition-transform duration-300 ease-in-out hover:scale-102"
          />
          <div className="flex flex-col w-full">
            <p className="text-[#878686] text-xl font-normal uppercase">{roleType}</p>
            <h1 className="text-black text-[52px] font-bold">{title}</h1>
            <h3 className="text-black text-[35px] font-normal">{subtitle}</h3>
            <p className="text-[#878686] text-xl font-light pt-5">{description}</p>
          </div>
        </div>
      </FadeInElement>
    </Link>
  );
}
