import Image from "next/image";
import Link from "next/link";
import projects from "../../projectInfo.json";
import { useState } from "react";
import { usePathname } from "next/navigation";

interface Props {
  darkTheme?: boolean;
}

export default function Links({ darkTheme }: Props) {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const currentUrl = usePathname();

  return (
    <div className="flex flex-row items-center gap-[50px]">
      <div className="w-full h-full">
        <button
          className="appearance-none border-0 bg-transparent p-0 m-0 cursor-pointer"
          onClick={() => setShowDropdown((prevState: boolean) => !prevState)}
        >
          <div className="flex flex-row items-center gap-2">
            <p
              className={`text-xl font-medium no-underline pl-3 ${
                darkTheme 
                  ? "text-[#fbfbfb] hover:text-[#fbfbfb]" 
                  : "text-black hover:text-black"
              }`}
            >
              projects
            </p>
            <Image
    quality={100}    
              src={darkTheme ? "/dropdownIconLight.svg" : "/dropdownIcon.svg"}
              alt=""
              width={0}
              height={0}
              style={{
                height: "100%",
                width: "auto",
                transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
        </button>
        {showDropdown && (
          <div className={`flex flex-col absolute gap-4 p-3 pb-3 rounded-lg ${
            currentUrl.startsWith("/projects") ? "bg-[#fbfbfb]" : ""
          }`}>
            <div />
            {projects.map(
              ({ title, route }: { title: string; route: string }) => (
                <Link
                  className={`text-base font-normal leading-5 no-underline ${
                    darkTheme 
                      ? "text-[#fbfbfb] hover:text-[#888888]" 
                      : "text-black hover:text-[#888888]"
                  }`}
                  href={"/projects" + route}
                  key={title}
                >
                  {title}
                </Link>
              )
            )}
          </div>
        )}
      </div>
      <Link
        className={`text-xl font-medium no-underline ${
          darkTheme 
            ? "text-[#fbfbfb] hover:text-[#888888]" 
            : "text-black hover:text-[#888888]"
        }`}
        href="/about"
      >
        about
      </Link>
      <Link
        className={`text-xl font-medium no-underline ${
          darkTheme 
            ? "text-[#fbfbfb] hover:text-[#888888]" 
            : "text-black hover:text-[#888888]"
        }`}
        href="/Heli_Balsara_resume.pdf"
      >
        resume
      </Link>
      <Link
        className={`text-xl font-medium no-underline ${
          darkTheme 
            ? "text-[#fbfbfb] hover:text-[#888888]" 
            : "text-black hover:text-[#888888]"
        }`}
        href="https://picsbyheli.com/"
      >
        photography
      </Link>
    </div>
  );
}
