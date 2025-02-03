import Link from "next/link";
import projects from "../../projectInfo.json";
import Image from "next/image";

interface Props {
  onClose: () => void;
  open: boolean;
}

export default function MobileLinks({ onClose, open }: Props) {
  return (
    <div
      className={`fixed top-0 left-0 bg-[#a0a0a0] h-screen w-screen flex justify-center items-center ${
        open
          ? "animate-[slideInFromRight_0.5s_forwards]"
          : "animate-[slideOutToRight_0.5s_forwards]"
      }`}
    >
      <button
        className="fixed top-[54px] right-12 bg-transparent border-0 p-0 m-0"
        onClick={onClose}
      >
        <Image
          quality={100}
          src="/x.svg"
          alt="Close Menu"
          width={32}
          height={32}
        />
      </button>
      <div className="flex flex-col gap-5">
        <p className="text-black text-xl font-medium font-[--font-manrope] no-underline">
          projects
        </p>
        <div className="flex flex-col gap-3 pl-3">
          {projects.map(
            ({ title, route }: { title: string; route: string }) => (
              <Link
                className="text-black font-[--font-manrope] text-base font-normal leading-5 no-underline"
                href={"/projects" + route}
                key={title}
              >
                {title}
              </Link>
            )
          )}
        </div>
        <Link
          className="text-black text-xl font-medium no-underline"
          href="/about"
        >
          about
        </Link>
        <Link
          className="text-black text-xl font-medium no-underline"
          href="/Heli_Balsara_resume.pdf"
        >
          resume
        </Link>
        <Link
          className="text-black text-xl font-medium no-underline"
          href="https://picsbyheli.com/"
        >
          photography
        </Link>
      </div>
    </div>
  );
}
