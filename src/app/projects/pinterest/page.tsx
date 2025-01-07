import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import WIP from "@/components/WIP";

export default function Pinterest() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px]">
        <Image
          src="/pinterest/hero.png"
          width={1280}
          height={540.5}
          style={{ height: "auto", width: "100%" }}
          alt="pinterest"
          priority
        />
      </div>
      <ProjectOverview
        role="Product Design Consultant"
        duration="September 2023 - December 2023"
        disciplines="UI, Human-Centric Design, UX Research"
        team="Sarah Suen (PM), Uyen Phan, Michid Bayambajav, Joanna Ye, Angie Nguyen, and me!"
        description={
          <p>
            Pinterest is a social media platform dedicated to providing
            motivation and inspiration to all,{" "}
            <strong>
              but many do not see it as a place to promote and sell products.
            </strong>
            <br />
            <br />
            They challenged Berkeley Innovation, a student-run design
            consultancy, to{" "}
            <strong>
              improve their simple three-step ad creation process for
              small-medium businesses.
            </strong>{" "}
            As the Synthesis lead for this project, I guided the team to
            finalize contextual inquiries and unify research insights through
            affinity and journey mapping.
          </p>
        }
      />
      <WIP />
      <Footer />
    </>
  );
}
