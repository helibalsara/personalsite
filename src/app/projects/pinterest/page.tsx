import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import Line from "@/components/Line";
import SurveyGrid from "@/components/SurveyGrid";
import PinterestCompetitorGrid from "@/components/PinterestCompetitorGrid";
import EnhancementSection from "@/components/EnhancementSection";
import ExpandableImage from "@/components/ExpandableImage";
import WaitHow from "@/components/WaitHow";
import FinalDesignsSection from "@/components/FinalDesignsSection";

export default function Pinterest() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px]">
        <Image
          src="/pinterest/hero.svg"
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
          <>
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
          </>
        }
      />
      <FinalDesignsSection
        backgroundColor="#EDEDED"
        title="Final Recommendations"
        subtitle={
          <>
            Sneak Peak!! <span className="not-italic">🤫</span>
          </>
        }
        items={[
          {
            title: "1/ ORGANIZED PIN SELECT",
            description: (
              <>
                With the current design, if a business has many pins, it can be
                a <strong>hassle finding the one they want to promote.</strong>{" "}
                To better organize this, we separated two views of pins into
                recents and boards. This allows users to{" "}
                <strong>easily find the pin and help them save time.</strong>
              </>
            ),
            imageSrc: "/pinterest/pinselect1.gif",
          },
          {
            title: "2/ TARGETING OPTIONS",
            description: (
              <>
                The current interests selections are already comprehensive,
                however, they are <strong>difficult to navigate</strong> and
                visualize selected options. To help users save some time, we
                included{" "}
                <strong>
                  pop-up tags, automatic dropdown, and visible scroll bar
                </strong>
                for the selected interests box.
              </>
            ),
            imageSrc: "/pinterest/targetselect1.gif",
          },
          {
            title: "3/ UI IMPROVEMENTS",
            description: (
              <>
                Many users thought the UI was too &ldquo;
                <strong>white and plain</strong>&rdquo; and certain elements could
                stand out. We enhanced the card format so active section is
                dynamically highlighted. We also changed the &ldquo;Promote&rdquo; button to
                red to help it stand out. We included a pop-up{" "}
                <strong>confirmation</strong> once the pin is promoted with
                links to resources helping new users.
              </>
            ),
            imageSrc: "/pinterest/uiimprovements1.gif",
          },
        ]}
      />
      <WaitHow />
      <div className="flex flex-col gap-8 px-4 md:px-[182px]">
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="flex-1 bg-[#EDEDED] rounded-lg p-3 max-w-80 flex items-center">
            <p className="text-xs md:text-sm text-center">
              New SMBs struggle with investing enough time to grow on social
              media
            </p>
          </div>
          <div className="flex-1 bg-[#EDEDED] rounded-lg p-3 max-w-80 flex items-center">
            <p className="text-xs md:text-sm text-center">
              Setting the right budget and allocating enough funds to grow is
              essential
            </p>
          </div>
          <div className="flex-1 bg-[#EDEDED] rounded-lg p-3 max-w-80 flex items-center">
            <p className="text-xs md:text-sm text-center">
              Targeting the right audience is important for SMBs to stand out
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 justify-center items-center px-4 md:px-8">
          <Image
            src="/pinterest/megaphone.png"
            width={100}
            height={100}
            style={{ height: "100%", width: "auto", maxHeight: "72px" }}
            alt="megaphone"
          />
          <p className="text-lg md:text-xl font-bold text-center md:text-left">
            This presents a great opportunity for Pinterest to address these
            issues, especially for first-time users, to improve their simplified
            ad-creation flow and ease this overwhelming process for busy SMBs.
          </p>
        </div>
        <Line className="mb-8" />
        <h2 className="text-2xl md:text-3xl font-bold">
          WHAT&apos;S THE CURRENT AD CREATION FLOW?
        </h2>
        <Image
          src="/pinterest/ad-creation.svg"
          width={916}
          height={593}
          style={{ height: "auto", width: "100%" }}
          alt="current flow"
        />
        <Line className="my-8" />
        <h2 className="text-2xl md:text-3xl font-bold">LET&apos;S DIVE DEEPER.</h2>
        <p className="text-sm md:text-base">
          We needed to learn from SMB&apos;s themselves, through a survey,
          contextual inquiries, and user interviews. We built on top of the
          secondary research to ask the right questions.
        </p>
        <p className="text-lg md:text-xl font-semibold">USER SURVEYS</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-[40.5px] self-center">
          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-xl font-bold">GUIDANCE & EXPERIENCE</p>
            <p className="text-sm md:text-base">
              Users have limited knowledge using Pinterest and seek a guided
              experience.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-xl font-bold">TARGETING OPTIONS</p>
            <p className="text-sm md:text-base">
              Having specific and personalized targeting allow SMBs to maximize
              their limited resources.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-xl font-bold">CONFUSING USER FLOW</p>
            <p className="text-sm md:text-base">
              New users have difficulties navigating to the &ldquo;Promote pin&rdquo;
              feature and confuse it with &ldquo;Create campaign.&rdquo; **
            </p>
          </div>
          <div className="flex flex-row">
            <p>**</p>
            <Image
              src="/pinterest/create.png"
              width={140}
              height={106}
              style={{ height: "100%", width: "auto" }}
              alt="user flow"
            />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mt-[-32px]">
          <Image
            src="/pinterest/arrow.png"
            width={49.6 * 2}
            height={79.7 * 2}
            alt="user flow"
          />
        </div>
        <Line className="mb-8" />
        <h2 className="text-3xl font-bold">KEY INSIGHTS!</h2>
        <p>
          Through affinity diagrams, we clustered our research into 3 main pain
          points.
        </p>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-2xl font-bold text-[#B72C3B]">1.</p>
          <p className="text-xl">
            SMBs value{" "}
            <span className="font-bold text-[#B72C3B]">specific targeting</span>{" "}
            options to maximize their advertising efforts.
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-2xl font-bold text-[#B72C3B]">2.</p>
          <p className="text-xl">
            SMBs struggle with{" "}
            <span className="font-bold text-[#B72C3B]">
              limited experience with marketing.
            </span>
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-2xl font-bold text-[#B72C3B]">3.</p>
          <p className="text-xl">
            Lack of highlighted features lead to a{" "}
            <span className="font-bold text-[#B72C3B]">
              confusing user flow.
            </span>
          </p>
        </div>
        <Line className="my-8" />
        <h2 className="text-3xl font-bold">
          LET&apos;S CHECK OUT SOME COMPETITORS...
        </h2>
        <p>
          From our user survey, we learned that 50% of participants favoured
          Instagram as their top ad platform, followed by 25% on Google and 25%
          on Facebook. We put ourselves in the shoes of SMBs and created an ad
          on these platforms, as well as Tiktok. We scored and ranked these
          competitors in 6 areas.
        </p>
        <PinterestCompetitorGrid
          items={[
            {
              title: "AD CREATION PROCESS",
              description: (
                <p>
                  <strong>Instagram</strong> is most intuitive to use, even
                  without prior ad creating knowledge.
                </p>
              ),
              images: ["/pinterest/instagram.png"],
            },
            {
              title: "KEY FEATURES",
              description: (
                <p>
                  <strong>Facebook</strong> and <strong>Google</strong> Ads
                  offers advanced features such as &ldquo;Bid Strategy&rdquo; and &ldquo;Pixel
                  Tracking.&rdquo;
                </p>
              ),
              images: ["/pinterest/fb.png", "/pinterest/gads.png"],
            },
            {
              title: "CUSTOMER SUPPORT",
              description: (
                <p>
                  <strong>Tiktok</strong> is the only social media platform from
                  our list that offers 1:1 consulting with an marketing
                  specialist to personalize ads.
                </p>
              ),
              images: ["/pinterest/tiktok.png"],
            },
            {
              title: "USABILITY",
              description: (
                <p>
                  <strong>Pinterest</strong> and <strong>Instagram</strong> have
                  the most user-friendly process by simplifying the process into
                  a step-by-step process.
                </p>
              ),
              images: [
                "/pinterest/pinterest-logo.png",
                "/pinterest/instagram.png",
              ],
            },
            {
              title: "DEMOGRAPHICS",
              description: (
                <p>
                  <strong>Facebook</strong> targets the largest demographic with
                  very specific targeting options.
                </p>
              ),
              images: ["/pinterest/fb.png"],
            },

            {
              title: "PRICING",
              description: (
                <p>
                  <strong>All</strong> platforms are subject to personal budgets
                  for each ad.
                </p>
              ),
              images: ["/pinterest/dollar.png"],
            },
          ]}
        />
        <div className="flex flex-row gap-8 items-center">
          <p className="flex-1">
            Platforms like Facebook and Google cater towards experienced
            marketers, focusing on optimizing ad to goal conversion through a
            detailed, time-consuming process.
            <br />
            <br />
            Pinterest focuses on being approachable to new marketers by
            prioritizing efficiency and ease of use, condensing the creation
            space to one page and three easy steps.
            <br />
            <br />
            Here is the journey of both an experienced marketer and a newbie
            using Pinterest.
          </p>
          <div className="flex-1">
            <ExpandableImage
              src="/pinterest/journey.png"
              width={1398}
              height={836}
              style={{ height: "auto", width: "100%" }}
              alt="pinterest journey"
            />
          </div>
        </div>
        <Line className="my-8" />
        <h2 className="text-3xl font-bold">
          HOW DID WE ENHANCE THE EXPERIENCE?
        </h2>
        <EnhancementSection
          title="STEP 1: SELECT A PIN"
          titleColor="#B72C3B"
          gradient={{ from: "#B72C3B", to: "#EE6817" }}
          currentImage={{
            src: "/pinterest/enhance1.png",
            width: "40%",
          }}
          currentText="The existing side pop-up is unorganized because it displays all uploaded pins, making it difficult to find the pin to promote."
          redesignImage={{
            src: "/pinterest/enhance2.png",
            width: "60%",
          }}
          redesignText="Organized views of uploaded pins by recents and boards."
          finalImage={{
            src: "/pinterest/enhance3.png",
            width: "70%",
          }}
          finalText={{
            title: "Simplified navigation with pin selection",
            description:
              "Organizing by recent pins and pins in boards eliminates endless scrolling.",
          }}
        />
        <EnhancementSection
          title="STEP 2: TARGETING DETAILS"
          titleColor="#B72C3B"
          gradient={{ from: "#EE6817", to: "#FFB800" }}
          currentImage={{
            src: "/pinterest/enhance4.png",
            width: "40%",
          }}
          currentText="The existing interests list is extensive and contains many nested and hidden items that are automatically selected when the parent item is selected."
          redesignImage={{
            src: "/pinterest/enhance5.png",
            width: "60%",
          }}
          redesignText="The dropdown opens automatically to avoid hidden options, and selected interests are displayed as tags at the top for better visibility."
          finalImage={{
            src: "/pinterest/enhance6.png",
            width: "70%",
          }}
          finalText={{
            title: "Specific targeting options",
            description:
              "Selected targeting interests helps the users be more intentional with their target audience.",
          }}
        />
        <EnhancementSection
          title="STEP 3: SUBMIT & PROMOTE YOUR PIN"
          titleColor="#B72C3B"
          gradient={{ from: "#FFB800", to: "#B72C3B" }}
          currentImage={{
            src: "/pinterest/enhance7.svg",
            width: "40%",
          }}
          currentText="No confirmation page, leaving users confused about any next steps or actions."
          redesignImage={{
            src: "/pinterest/enhance8.png",
            width: "60%",
          }}
          redesignText={
            <>
              A confirmation page that provides additional resources and
              guidance on next steps.
              <br />
              <br />
              Convenient place to promote another pin as well.
            </>
          }
          finalImage={{
            src: "/pinterest/enhance9.png",
            width: "70%",
          }}
          finalText={{
            title: "Refined UI & Confirmation",
            description:
              "Friendlier UI makes the ad-creation process more approachable for SMBs, and the confirmation reassures them with next steps!",
          }}
        />
        <div className="flex flex-row justify-end w-full mt-[-80px]">
          <Image
            src="/pinterest/medal.png"
            width={123}
            height={123}
            alt="medal"
          />
        </div>
        <Line className="mt-[-32px] mb-8" />
        <h2 className="text-3xl font-bold">REFLECTIONS</h2>
        <div className="flex flex-row gap-8 justify-between">
          <p className="max-w-[40vw]">
            I was definitely intimidated to tackle this semester-long project,
            but it was an amazing experience working with real clients. Working
            with Pinterest taught me how to effectively leverage contextual
            inquiries to understand user flows and drive research-backed
            insights further into the creation phase.
            <br />
            <br />
            I&apos;d like to extend a huge thank you to Judy and Wei from
            Pinterest for guiding and supporting our team all semester, as well
            as to the rest of my team for pulling through this exciting journey!
          </p>
          <Image
            src="/pinterest/reflections.png"
            width={253 * 8}
            height={168.6 * 8}
            style={{ height: "auto", maxWidth: "35%" }}
            alt="reflections"
          />
        </div>
      </div>
      <Footer className="mt-20 md:mt-[160px]" />
    </>
  );
}
