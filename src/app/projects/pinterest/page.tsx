import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import WIP from "@/components/WIP";
import PinterestFinalRecommendation from "@/components/PinterestFinalRecommendation";

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
      <div className="py-16 px-36 bg-[#EDEDED]">
        <h2 className="text-4xl font-bold mb-4">Final Recommendations</h2>
        <h4 className="text-xl italic mb-4">Sneak Peak!! 🤫</h4>
        <div className="flex flex-col gap-16">
          <PinterestFinalRecommendation
            title="1/ ORGANIZED PIN SELECT"
            description={
              <p>
                With the current design, if a business has many pins, it can be
                a <strong>hassle finding the one they want to promote.</strong>{" "}
                To better organize this, we separated two views of pins into
                recents and boards. This allows users to{" "}
                <strong>easily find the pin and help them save time.</strong>
              </p>
            }
            imageSrc="/pinterest/pinselect1.gif"
          />
          <PinterestFinalRecommendation
            title="2/ TARGETING OPTIONS"
            description={
              <p>
                The current interests selections are already comprehensive,
                however, they are <strong>difficult to navigate</strong> and
                visualize selected options. To help users save some time, we
                included{" "}
                <strong>
                  pop-up tags, automatic dropdown, and visible scroll bar
                </strong>
                for the selected interests box.
              </p>
            }
            imageSrc="/pinterest/targetselect1.gif"
          />
          <PinterestFinalRecommendation
            title="3/ UI IMPROVEMENTS"
            description={
              <p>
                Many users thought the UI was too “
                <strong>white and plain</strong>” and certain elements could
                stand out. We enhanced the card format so active section is
                dynamically highlighted. We also changed the “Promote” button to
                red to help it stand out. We included a pop-up{" "}
                <strong>confirmation</strong> once the pin is promoted with
                links to resources helping new users.
              </p>
            }
            imageSrc="/pinterest/uiimprovements1.gif"
          />
        </div>
      </div>
      <WIP />
      <Footer />
    </>
  );
}
