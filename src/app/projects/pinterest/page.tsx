import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import WIP from "@/components/WIP";
import PinterestFinalRecommendation from "@/components/PinterestFinalRecommendation";
import Line from "@/components/Line";
import SurveyGrid from "@/components/SurveyGrid";
import PinterestCompetitorGrid from "@/components/PinterestCompetitorGrid";

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
      <div className="py-16 bg-[#353434]">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">
          Wait. How did we get here? 🧐
        </h1>
      </div>
      <div className="flex flex-col py-16 px-36 gap-8">
        <h2 className="text-3xl font-bold mb-4">
          WHY FOCUS ON NEW SMALL-MEDIUM BUSINESSES?
        </h2>
        <p>
          We learned more about the digital marketing space through various
          articles from big news articles to smaller blog accounts on marketing.
          New SMBs are often managing a wide array of tasks, which can make
          their first campaign launch rocky.
        </p>
        <p>These were the top challenges we found SMB&apos;s were facing:</p>
        <div className="flex flex-row gap-8 justify-center items-stretch">
          <div className="flex-1 bg-[#EDEDED] rounded-lg p-3 max-w-80 flex items-center">
            <p className="text-sm text-center">
              New SMBs struggle with investing enough time to grow on social
              media
            </p>
          </div>
          <div className="flex-1 bg-[#EDEDED] rounded-lg p-3 max-w-80 flex items-center">
            <p className="text-sm text-center">
              Setting the right budget and allocating enough funds to grow is
              essential
            </p>
          </div>
          <div className="flex-1 bg-[#EDEDED] rounded-lg p-3 max-w-80 flex items-center">
            <p className="text-sm text-center">
              Targeting the right audience is important for SMBs to stand out
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center px-8">
          <Image
            src="/pinterest/megaphone.png"
            width={100}
            height={100}
            style={{ height: "100%", width: "auto", maxHeight: "72px" }}
            alt="megaphone"
          />
          <p className="text-xl font-bold">
            This presents a great opportunity for Pinterest to address these
            issues, especially for first-time users, to improve their simplified
            ad-creation flow and ease this overwhelming process for busy SMBs.
          </p>
        </div>
        <Line className="mb-8" />
        <h2 className="text-3xl font-bold">
          WHAT&apos;S THE CURRENT AD CREATION FLOW?
        </h2>
        <Image
          src="/pinterest/ad-creation.png"
          width={916}
          height={593}
          style={{ height: "auto", width: "100%" }}
          alt="current flow"
        />
        <Line className="my-8" />
        <h2 className="text-3xl font-bold">LET&apos;S DIVE DEEPER.</h2>
        <p>
          We needed to learn from SMB&apos;s themselves, through a survey,
          contextual inquiries, and user interviews. We built on top of the
          secondary research to ask the right questions.
        </p>
        <p className="text-xl font-semibold">USER SURVEYS</p>
        <SurveyGrid
          items={[
            {
              imageSrc: "/pinterest/survey1.png",
              title: "Ad Creation Challenges",
              items: [
                "Time",
                "Lack of knowledge & guidance",
                "Creating engaging content",
              ],
            },
            {
              imageSrc: "/pinterest/survey2.png",
              title: "Top Goals for Ads",
              items: [
                "Drive sales & increase revenue",
                "Engage & connect with audience",
              ],
            },
            {
              imageSrc: "/pinterest/survey3.png",
              title: "Preferred ad platform",
              items: ["Instagram", "Facebook", "Google"],
            },
            {
              imageSrc: "/pinterest/survey4.png",
              title: "Why not Pinterest?",
              items: [
                "Not familiar with the feature",
                "Only a platform to scale",
                "Lack of precise targeting parameters",
              ],
            },
          ]}
        />
        <p className="text-xl font-semibold">
          CONTEXTUAL INQUIRIES & USER INTERVIEWS
        </p>
        <p>
          We interviewed 6 individuals from our survey to walk through
          Pinterest&apos;s current 3-step ad creation flow, asking them to
          articulate their thoughts and experiences aloud.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">GUIDANCE & EXPERIENCE</p>
            <p>
              Users have limited knowledge using Pinterest and seek a guided
              experience.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">TARGETING OPTIONS</p>
            <p>
              Having specific and personalized targeting allow SMBs to maximize
              their limited resources.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-bold">CONFUSING USER FLOW</p>
            <p>
              New users have difficulties navigating to the “Promote pin”
              feature and confuse it with “Create campaign.” **
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
                  offers advanced features such as “Bid Strategy” and “Pixel
                  Tracking.”
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
              images: ["/pinterest/pinterest-logo.png", "/pinterest/instagram.png"],
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
      </div>
      <WIP />
      <Footer />
    </>
  );
}
