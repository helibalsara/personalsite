import Navbar from "@/components/Navbar";
import ProjectOverview from "@/components/ProjectOverview";
import WIP from "@/components/WIP";
import Image from "next/image";

export default function HousecallPro() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px]">
        <Image
          src="/housecall-pro/hero.png"
          width={1280}
          height={540.5}
          style={{ height: "auto", width: "100%" }}
          alt="housecall-pro"
          priority
        />
      </div>
      <ProjectOverview
        role="Product Design Intern"
        duration="June 2024 - August 2024"
        disciplines="June 2024 - August 2024"
        team="Sarah Suen (PM), Uyen Phan, Michid Bayambajav, Joanna Ye, Angie Nguyen, and me!"
        description={
          <>
            In the summer of 2024, I interned at Housecall Pro, a B2B SaaS
            company that provides software solutions for small and medium-sized
            home service businesses. I designed an end-to-end product that
            seamlessly integrated e-signature collection and storage within the
            estimates feature, enhancing credibility by ensuring compliance with
            the E-Sign Act and implementing legally binding elements.
            <br />
            <br />
            Additionally, I built design components for a smooth integration of
            e-signatures into other areas of the software.
          </>
        }
      />
    </>
  );
}
