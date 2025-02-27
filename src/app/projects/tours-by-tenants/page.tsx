import Footer from "@/components/Footer";
import Line from "@/components/Line";
import Navbar from "@/components/Navbar";
import ProjectOverview from "@/components/ProjectOverview";
import WaitHow from "@/components/WaitHow";
import WIP from "@/components/WIP";
import Image from "next/image";
import ExpandableImage from "@/components/ExpandableImage";
import PageSection from "@/components/PageSection";

export const metadata = {
  title: "Tours by Tenants | Heli Balsara",
  description:
    "An innovative housing search app that simplifies the process, helping users efficiently discover and secure their next home.",
};

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
      <div className="py-8 md:py-16 px-4 md:px-36 bg-[#EDEDED]">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Final Designs
            </h1>
            <h4 className="text-lg md:text-xl italic mb-4">
              Sneak Peak!! <span className="not-italic">🤫</span>
            </h4>
            <p className="text-base md:text-xl">
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
          <div className="w-full md:w-1/4">
            <Image
              src="/tt/final1.gif"
              width={600}
              height={372.9}
              style={{ height: "auto", width: "100%" }}
              alt="project section"
              unoptimized
            />
          </div>
        </div>
      </div>
      <WaitHow />
      <div className="flex flex-col gap-8 py-8 md:py-16 px-4 md:px-[182px]">
        <h1 className="text-2xl md:text-[32px] font-bold mb-4">
          PROBLEM SPACE VALIDATION...
        </h1>
        <p className="text-sm md:text-base">
          From speaking with 11 students through user interviews, we confirmed
          that finding off-campus housing was a commen struggle. From a user
          survey we conducted with 16 participants, 43.8% of them began
          searching for housing 6+ months in advance and 36.6% toured at least 4
          different potential spots.
        </p>
        <p className="text-sm md:text-base">
          Through affinity our research insights, we focused on these three
          common pain point clusters. Students found the housing search process{" "}
          <strong>
            time-consuming, unorganized without a tracking method, and
            challenging when trying to align personal preferences with those of
            roommates.
          </strong>
        </p>
        <div className="px-4 md:px-16 justify-center items-center">
          <Image
            src="/tt/problemspace.svg"
            width={793.608}
            height={389.665}
            style={{ height: "auto", width: "100%" }}
            alt="problem space"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <p className="text-base md:text-lg w-full md:max-w-[40%]">
            From our affinity and journey map, we validated that students found
            the search process <strong>overwhelming</strong>. It is especially
            challenging to keep yourself organized and narrowing options, along
            with aligning with your roommates on your preferences.
          </p>
          <div className="w-full md:max-w-[60%]">
            <ExpandableImage
              src="/tt/overwhelming.png"
              width={2238}
              height={1036}
              style={{ height: "auto", width: "100%" }}
              alt="problem space"
            />
          </div>
        </div>
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold mb-4">
          LET&apos;S LOOK INTO THE MAIN COMPETITOR
        </h1>
        <p className="text-sm md:text-base">
          At this stage, we broke off from our teams and began our individual
          solution ideation!
          <br />
          <br />
          Seeing as there was a need for a centralizing platform for housing
          information, I thought a mobile app would be the best way to deliver
          the solutions. But before that, I needed to look at a commonly used
          competitor - Apartments.com.
        </p>
        <Image
          src="/tt/competitor.svg"
          width={915.97}
          height={171.08}
          style={{ height: "auto", width: "100%" }}
          alt="competitor"
        />
        <p className="text-sm md:text-base">
          From walking through the process of finding listings here using the
          filters and map view, and looking through some of the listings, I
          realized an issue that sites like these had:
        </p>
        <div className="mx-4 md:mx-[97.5px]">
          <Image
            src="/tt/callout.svg"
            width={721}
            height={110}
            style={{ height: "auto", width: "100%" }}
            alt="callout"
          />
        </div>
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold mb-4">
          TIME TO ITERATE, ITERATE, ITERATE
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center px-4 md:px-[137px]">
          <ExpandableImage
            src="/tt/iterate1.png"
            width={1392}
            height={1066}
            style={{ height: "auto", width: "100%", maxWidth: "70%" }}
            alt="iterate1"
          />
          <p className="text-sm md:text-base">
            Initial onboarding, home page, and listing screens
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center px-4 md:px-[137px]">
          <p className="text-sm md:text-base">
            Adding filtering by location and proximity radius and housing
            manager messaging post user-testing
          </p>
          <ExpandableImage
            src="/tt/iterate2.png"
            width={1392}
            height={1066}
            style={{ height: "auto", width: "100%", maxWidth: "60%" }}
            alt="iterate2"
          />
        </div>
        <p className="text-sm md:text-base">
          After running <strong>5 more user tests</strong> with my lowfis , I
          found that users had difficulties navigating through the flows
          seamlessly. There was some confusion on the home page and users
          thought the UI was cluttered, especially on the apartment page. I did
          a full redesign of the 3 main components of this app: the home page,
          the listing page, and filtering screens.
        </p>
        <div className="px-4 md:px-[112px] flex flex-col gap-[50px] md:gap-[100px] items-center">
          <PageSection
            title="Home Page Before"
            before="/tt/before1.png"
            after="/tt/after1.gif"
            features={[
              {
                heading: "SEARCH",
                content:
                  "Users can search by location, price range, number of bedrooms, and other filters.",
              },
              {
                heading: "MAP VIEW",
                content:
                  "Users can view available properties on a map and click on them to view more details.",
              },
              {
                heading: "SAVED",
                content:
                  "Users can save properties they're interested in and view them later.",
              },
            ]}
          />
          <PageSection
            title="Property Details"
            before="/tt/before2.png"
            after="/tt/after2.gif"
            features={[
              {
                heading: "PHOTOS & VIDEOS",
                content:
                  "Users can view photos and videos of the property taken by current or previous tenants.",
              },
              {
                heading: "REVIEWS",
                content:
                  "Users can read reviews from current or previous tenants about their experience living at the property.",
              },
              {
                heading: "MESSAGING",
                content:
                  "Users can message current or previous tenants to ask questions about the property.",
              },
            ]}
          />
          <PageSection
            title="Tenant Profile"
            before="/tt/before3.png"
            after="/tt/after3.gif"
            features={[
              {
                heading: "PROFILE",
                content:
                  "Users can view their profile and edit their preferences.",
              },
              {
                heading: "SAVED PROPERTIES",
                content:
                  "Users can view all their saved properties in one place.",
              },
              {
                heading: "MESSAGES",
                content:
                  "Users can view and respond to messages from other users.",
              },
            ]}
          />
        </div>
      </div>
      <Image
        src="/tt/final.svg"
        width={1278}
        height={1072.43}
        style={{ height: "auto", width: "100%" }}
        alt="final"
      />
      <div className="flex flex-col gap-8 py-8 md:py-16 px-4 md:px-[182px]">
        <h1 className="text-2xl md:text-[32px] font-bold mb-4">REFLECTIONS</h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-between items-center">
          <p className="w-full md:max-w-[50vw] text-sm md:text-base">
            This project was a great way for me to start practicing my UI design
            skills. I was able to get feedback and make improvements in each
            iteration to improve the usability, user flows, and overall
            aesthetics. Shoutout to my team for planning all the research and
            synthesizing the key findings. It was a blast working while folding
            paper cranes!
          </p>
          <Image
            src="/tt/reflections.png"
            width={192 * 4}
            height={246 * 4}
            className="w-full md:w-auto h-auto max-w-[200px] md:max-w-[25%]"
            alt="reflections"
          />
        </div>
      </div>
      <Footer className="mt-20 md:mt-[160px]" />
    </>
  );
}
