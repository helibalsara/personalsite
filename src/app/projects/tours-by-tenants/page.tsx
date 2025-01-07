import Image from "next/image";
import Navbar from "@/components/Navbar";
import LittleSection from "@/components/LittleSection";
import Footer from "@/components/Footer";
import BigSection from "@/components/BigSection";
import PageSection from "@/components/PageSection";

export default function SmartNotes() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px] px-36">
        <div className="flex flex-row w-full gap-16">
          <Image
            src="/tt.png"
            width={536}
            height={339}
            style={{ height: "100%", width: "auto" }}
            alt="tt"
            priority
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-normal text-xl max-w-[90%]">
              Tours by Tenants is a <strong>housing search app</strong> that
              helps individuals find their next home efficiently.
            </h3>
            <div className="flex flex-col gap-2">
              <h3>Role</h3>
              <p className="text-sm">Mobile UI Designer</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Duration</h3>
              <p className="text-sm">March 2023 - May 2023</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Disciplines</h3>
              <p className="text-sm">UI Designer, Human-Centric Design</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Team</h3>
              <p className="text-sm">Julian Meyn, Julia An, Michael Lu, Hannah Park, and me :)</p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black mt-[100px] mb-12" />
        <div className="flex flex-col gap-5">
          <h1>The Challenge</h1>
          <p className="text-3xl font-bold">
            How might we improve the off-campus housing{" "}
            <span className="text-[#28536b]">search experience?</span>
          </p>
        </div>
        <div className="py-6 pb-12">
          <p>
            As college students ourselves, we understand that finding housing
            off-campus is a complex and arduous process. From our initial
            considerations, which were further validated through our user
            research, we concluded that this journey as being{" "}
            <strong>time-consuming</strong>, <strong>frustrating</strong>, and{" "}
            <strong>overwhelming</strong>.
          </p>
        </div>
      </div>
      <div className="bg-[#ededed] pl-36 pt-12 pb-12">
        <div className="flex flex-row justify-between [&>*]:flex-1">
          <div className="flex flex-col gap-5">
            <h1>Final Designs</h1>
            <h6 className="text-black text-xl italic font-normal">Sneak Peek!!</h6>
            <p>Taking a look ahead at my final iteration of designs...</p>
            <p>
              Tours by Tenants is a <strong>housing search mobile app</strong>{" "}
              that allows users to view <strong>tours</strong> of housing units
              provided by other current or previous residents. This minimizes
              the need for users to tour every potential housing option by
              providing <strong>real</strong> photos and videos,{" "}
              <strong>saving time</strong> in the search process. Similar to
              other home rental sites, there is a map view, options to view
              floor plans and virtual tours, filter by amenities, and reviews.
              After initial user testing, I added an option to{" "}
              <strong>message</strong> current or previous tenants and
              landlords. The goal of this project was to make the housing search
              process as <strong>stress-free for college students</strong> as
              possible, streamlining the journey to save time by making a{" "}
              <strong>centralized platform</strong>.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/tt/main.gif"
              width={215}
              height={423.816}
              alt="Final Design"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#353434] px-36 py-16">
        <h1 className="text-white">Wait... how did we get here? 🤔</h1>
        <div className="flex flex-row justify-evenly pt-12 px-12">
          <div className="flex-1 flex flex-col gap-4 items-center">
            <p className="text-white font-neuton text-xl italic font-normal">RESEARCH</p>
            <div className="flex flex-row gap-2">
              <p className="text-white font-neuton text-xl italic font-normal">1.</p>
              <p className="text-white font-neuton text-xl italic font-normal">
                understanding pain points & current methods
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center">
            <p className="text-white font-neuton text-xl italic font-normal">SYNTHESIS</p>
            <div className="flex flex-row gap-2">
              <p className="text-white font-neuton text-xl italic font-normal">2.</p>
              <p className="text-white font-neuton text-xl italic font-normal">
                identifying themes & emerging journey patterns
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center">
            <p className="text-white font-neuton text-xl italic font-normal">IDEATIONS</p>
            <div className="flex flex-row gap-2">
              <p className="text-white font-neuton text-xl italic font-normal">3.</p>
              <p className="text-white font-neuton text-xl italic font-normal">
                competitive analysis & brain-storming
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center">
            <p className="text-white font-neuton text-xl italic font-normal">DESIGN</p>
            <div className="flex flex-row gap-2">
              <p className="text-white font-neuton text-xl italic font-normal">4.</p>
              <p className="text-white font-neuton text-xl italic font-normal">
                user testing & iterating on screens
              </p>
            </div>
          </div>
        </div>
      </div>
      <BigSection title="Research" color="white">
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Interviews">
            <p>
              We gained most of our insights from the{" "}
              <strong>11 user interviews</strong> we conducted. This allowed us
              to confirm this was a common struggle and many pain points
              associated with the process. Our questions were grouped into these
              sections:
            </p>
            <div className="flex flex-row px-[18px] py-3 gap-8 rounded-[20px] bg-[#ededed] mt-8 relative">
              <div className="flex-1 px-[15px] py-[5px] rounded-[15px] bg-[#bfd3df]">
                <p className="text-[15px] font-medium">General questions on experience</p>
              </div>
              <div className="flex-1 px-[15px] py-[5px] rounded-[15px] bg-[#bfd3df]">
                <p className="text-[15px] font-medium">Past/current searching methods</p>
              </div>
              <div className="flex-1 px-[15px] py-[5px] rounded-[15px] bg-[#bfd3df]">
                <p className="text-[15px] font-medium">Frustrations and pain points in this process</p>
              </div>
              <div className="flex-1 px-[15px] py-[5px] rounded-[15px] bg-[#bfd3df]">
                <p className="text-[15px] font-medium">Factors influencing their final decision</p>
              </div>
            </div>
          </LittleSection>
          <LittleSection title="Survey">
            <p>
              Our user survey was able to quantify{" "}
              <strong>how satisfied</strong> they were with the search process
              and approximately <strong>how long</strong> students usually take,
              from starting their search to finally signing a lease. These were
              some results after <strong>16 responses</strong>:
            </p>
            <div className="flex px-20 justify-evenly gap-[90px] rounded-[20px] mt-8 bg-[#ededed] py-3">
              <div className="flex flex-col items-center gap-6">
                <p className="text-[15px] font-medium underline">
                  How early in advance do you tend to begin your housing search?
                </p>
                <Image
                  src="/tt/result1.svg"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  alt="result1"
                />
              </div>
              <div className="flex flex-col items-center gap-6">
                <p className="text-[15px] font-medium underline">
                  How early in advance do you tend to begin your housing search?
                </p>
                <Image
                  src="/tt/result2.svg"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  alt="result1"
                />
              </div>
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection title="Synthesis" color="white">
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Themes">
            <div className="flex flex-col gap-8">
              <p>
                Through affinity our research insights, we focused on these
                three common pain point clusters. These were a few notable
                quotes and insights. Overall, students found the housing search
                process 1) time-consuming, 2) lacking an organizational method
                to keep track through the process, and 3) difficulty aligning
                personal and roommates&apos; preferences.
              </p>
              <Image
                src="/tt/themes.svg"
                alt="themes"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </LittleSection>
          <LittleSection title="Journey Map">
            <Image
              src="/tt/journeymap.svg"
              alt="journeymap"
              width={0}
              height={0}
              style={{ width: "100%", height: "auto" }}
            />
          </LittleSection>
        </div>
      </BigSection>
      <BigSection
        title="Ideation"
        color="white"
        extendLineBottom
        noBorderBottom
      >
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Competitive Analysis">
            <div className="flex flex-col gap-8">
              <p>
                At this stage, we broke off from our teams and began our
                individual solution ideation! Seeing as there was a need for a
                centralizing platform for housing information, I thought a
                mobile app would be the best way to deliver the solutions. But
                before that, I needed to look at a commonly used competitor -{" "}
                <strong>Apartments.com</strong>.
              </p>
              <div className="flex flex-row items-center justify-evenly gap-12 [&>*]:flex-1">
                <Image
                  src="/tt/lofi.png"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  alt="lofi"
                />
                <Image
                  src="/tt/midfi.png"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                  alt="midfi"
                />
              </div>
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection color="grey" extendLineTop>
        <div className="pl-36 pt-12 flex flex-col gap-[100px]">
          <PageSection
            title="Home"
            before="/tt/before1.png"
            after="/tt/after1.png"
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
            after="/tt/after2.png"
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
            after="/tt/after3.png"
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
      </BigSection>
      <BigSection color="white" title="Reflection">
        <div className="pl-20 pr-36 flex justify-between items-center gap-[120px]">
          <p>
            This was my first time designing a mobile app, and I learned a lot
            about the importance of user research and testing. I also learned
            that it&apos;s important to keep the user&apos;s needs in mind throughout the
            entire design process. I would have liked to conduct more user
            testing and iterate on the designs more, but I&apos;m happy with how
            the final product turned out.
          </p>
          <Image
            src="/tt/reflection.png"
            width={304}
            height={266}
            style={{ width: "auto", height: "auto" }}
            alt="reflection"
          />
        </div>
      </BigSection>
      <Footer />
    </>
  );
}
