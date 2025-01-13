import FinalDesignsSection from "@/components/FinalDesignsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectOverview from "@/components/ProjectOverview";
import WaitHow from "@/components/WaitHow";
import WIP from "@/components/WIP";
import Image from "next/image";
export default function SmartNotes() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px]">
        <Image
          src="/tt/hero.svg"
          width={1280}
          height={540.5}
          style={{ height: "auto", width: "100%" }}
          alt="tt"
          priority
        />
      </div>
      <ProjectOverview
        role="Mobile UI Designer"
        duration="March 2023 - May 2023"
        disciplines="UI, Human-Centric Design, UX Research"
        team="Julian Meyn, Julia An, Michael Lu, Hannah Park, and me :)"
        description={
          <>
            Finding off-campus housing can be one of the most stressful and
            time-consuming tasks for college students. Students often face
            numerous challenges that make the process feel overwhelming. As
            students ourselves, my team in the Human-Centered Design Decal
            sought out to understand the issue further.
            <br />
            <br />
            We developed Tours by Tenants, an innovative housing search app that
            simplifies the process, helping users efficiently discover and
            secure their next home.
          </>
        }
      />
      <div className="py-16 px-36 bg-[#EDEDED]">
        <div className="flex flex-row justify-between">
          <div className="w-1/2">
            <h2 className="text-4xl font-bold mb-4">Final Designs</h2>
            <h4 className="text-xl italic mb-4">
              Sneak Peak!! <span className="not-italic">🤫</span>
            </h4>
            <p className="text-xl">
              <strong>Tours by Tenants (TT)</strong> allows users to view tours
              of housing units provided by other current or previous residents.
              This reduces the need for students to tour every housing option by
              offering real photos and videos, saving time in the search.
              <br />
              <br />
              <strong>
                This reduces the need for students to tour every housing option
                by offering real photos and videos, saving time in the search.
              </strong>
              <br />
              <br />
              Similar to other home rental sites, there is a map view, options
              to view floor plans and virtual tours, filter by amenities, and
              reviews. After initial user testing, I added an option to{" "}
              <strong>message</strong> current or previous tenants and
              landlords. The goal of this project was to make the housing search
              process as <strong>stress-free for college students</strong> as
              possible, streamlining the journey to save time by making a{" "}
              <strong>centralized platform.</strong>
            </p>
          </div>
          <div className="w-1/4">
            <Image
              src="/tt/final1.gif"
              width={600}
              height={372.9}
              style={{ height: "auto", width: "100%" }}
              alt="project section"
            />
          </div>
        </div>
      </div>
      <WaitHow />
      <WIP />
      <Footer />
    </>
  );
}
