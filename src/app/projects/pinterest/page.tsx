"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import FinalRecommendation from "@/components/FinalRecommendation";
import BigSection from "@/components/BigSection";
import LittleSection from "@/components/LittleSection";
import FlowChart from "./flowchart.svg";
import Compare from "@/components/Compare";
import { useState } from "react";

export default function Pinterest() {
  const [isHovered1, setIsHovered1] = useState<boolean>(false);
  const [isHovered2, setIsHovered2] = useState<boolean>(false);
  const [isHovered3, setIsHovered3] = useState<boolean>(false);

  return (
    <>
      <Navbar />
      <div className="pt-[153px] px-12">
        <div className="flex flex-row w-full gap-16 md:flex-col">
          <Image
            src="/pinterest.png"
            width={536}
            height={339}
            style={{ height: "100%", width: "auto" }}
            alt="pinterest"
            priority
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-normal text-xl max-w-[90%]">
              Improving the <strong>3-step ad creation process</strong> on
              Pinterest for <strong>small-medium businesses</strong> through
              Berkeley Innovation.
            </h3>
            <div className="flex flex-col gap-2">
              <h3>Role</h3>
              <p className="text-sm">Product Design Consultant</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Duration</h3>
              <p className="text-sm">September 2023 - December 2023</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Disciplines</h3>
              <p className="text-sm">UI Designer, Human- Centric Design, UX Research</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Team</h3>
              <p className="text-sm">
                Sarah Suen (PM), Uyen Phan, Michid Bayambajav, Joanna Ye, Angie
                Nguyen, and me!
              </p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black mt-[100px] mb-12 md:mt-12" />
        <div className="flex flex-col gap-10">
          <h1>The Challenge</h1>
          <p>
            Pinterest is a social media platform dedicated to providing
            motivation and inspiration. They challenged Berkeley Innovation, a
            design consultancy at Berkeley, to improve their simple three-step
            ad creation process for small medium businesses. As the{" "}
            <strong>Synthesis Lead</strong> for this project, I guided the team
            to finalize <strong>contextual inquiries</strong> and synthesize
            research insights through <strong>affinity mapping</strong>
            and <strong>journey mapping</strong>. I also contributed to
            research, ideation, designing wireframes, prototyping and pitching.{" "}
            <strong>With that, we were asked:</strong>
          </p>
        </div>
        <div className="py-12">
          <p className="text-3xl font-bold">
            Design an approachable and dedicated{" "}
            <span className="text-[#bd081c]">ad creation flow</span> to support new
            merchants promoting their products on Pinterest for the{" "}
            <span className="text-[#bd081c]">first time</span>.
          </p>
        </div>
      </div>
      <div className="bg-[#353434] px-36 py-16">
        <h1 className="text-white">You&apos;re probably wondering how we ended up here...</h1>
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
      <BigSection
        title="Research"
        color="white"
        extendLineBottom
        noBorderBottom
      >
        <div className="flex justify-between gap-[76px] pt-12 pl-24">
          <p>
            We needed a better understanding of the problem space, specifically
            about the nuances of ad creation and advertising on social media
            platforms. Our research involved diving into industry-specific
            articles on digital marketing and new merchant struggles. This
            allows us to understand what insights we wanted from our survey and
            contextual inquiries, as well as seeing the need to break down how
            other social media platforms do ad creation.
          </p>
          <div className="flex flex-col gap-4">
            <FlowChart style={{ flexShrink: 0 }} />
            <h6 className="text-black text-xs font-normal">click to jump to section!</h6>
          </div>
        </div>
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <div id="secondary-research">
            <LittleSection title="Secondary Research">
              <p>
                We learned more about the digital marketing space through
                various articles from big news articles to smaller blog accounts
                on marketing. Here, we learned some key insights on new merchant
                struggles, common new business practices, and pros of different
                platforms. Some of the main insights are:
              </p>
              <div className="flex items-center gap-12 justify-between pt-7 pb-12">
                <div className="flex flex-col gap-8 justify-evenly">
                  <div className="flex p-2 items-center gap-2 bg-[#ededed] rounded-lg">
                    <Image
                      src="/pinterest/pin.png"
                      alt="articles"
                      width={48}
                      height={48}
                    />
                    <p>
                      New SMBs struggle with <strong>investing</strong> enough{" "}
                      <strong>time to grow</strong> on social media
                    </p>
                  </div>
                  <div className="flex p-2 items-center gap-2 bg-[#ededed] rounded-lg">
                    <Image
                      src="/pinterest/pin.png"
                      alt="articles"
                      width={48}
                      height={48}
                    />
                    <p>
                      Setting the right budget and allocating{" "}
                      <strong>enough funds</strong> to grow is essential
                    </p>
                  </div>
                  <div className="flex p-2 items-center gap-2 bg-[#ededed] rounded-lg">
                    <Image
                      src="/pinterest/pin.png"
                      alt="articles"
                      width={48}
                      height={48}
                    />
                    <p>
                      <strong>Targeting</strong> the right audience is important
                      for SMBs to stand out
                    </p>
                  </div>
                </div>
                <Image
                  src="/pinterest/articles.png"
                  alt="articles"
                  width={348}
                  height={261}
                  style={{
                    width: "auto",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
            </LittleSection>
          </div>
        </div>
      </BigSection>
      <BigSection color="grey" extendLineBottom extendLineTop noBorderBottom>
        <div className="flex flex-col gap-[52px] py-5">
          <div id="survey">
            <LittleSection title="Survey">
              <p>
                While we were only able to collect <strong>20 responses</strong>{" "}
                on our user survey, we still pulled some important insights.
              </p>
              <div className="flex gap-4 justify-around pt-8">
                <div className="flex-1 flex flex-col gap-1">
                  <Image
                    onMouseOver={() => setIsHovered1(true)}
                    onMouseOut={() => setIsHovered1(false)}
                    src={
                      isHovered1
                        ? "/pinterest/pieChart2.svg"
                        : "/pinterest/pieChart.svg"
                    }
                    width={0}
                    height={0}
                    style={{
                      width: "auto",
                      height: "100%",
                      borderRadius: "16px",
                    }}
                    alt="pie chart"
                  />
                  <div>
                    <p>
                      <strong>Preferred advertising platform</strong>
                    </p>
                    <p className="text-sm">Instagram & Google Ads</p>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <Image
                    onMouseOver={() => setIsHovered2(true)}
                    onMouseOut={() => setIsHovered2(false)}
                    src={
                      isHovered2
                        ? "/pinterest/barChart2.svg"
                        : "/pinterest/barChart.svg"
                    }
                    width={0}
                    height={0}
                    style={{
                      width: "auto",
                      height: "100%",
                      borderRadius: "16px",
                    }}
                    alt="bar chart"
                  />
                  <div>
                    <p>
                      <strong>SMB dedication towards ads</strong>
                    </p>
                    <p className="text-sm">Time-consuming solo work</p>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <Image
                    onMouseOver={() => setIsHovered3(true)}
                    onMouseOut={() => setIsHovered3(false)}
                    src={
                      isHovered3
                        ? "/pinterest/goals2.svg"
                        : "/pinterest/goals.svg"
                    }
                    width={0}
                    height={0}
                    style={{
                      width: "auto",
                      height: "100%",
                      borderRadius: "16px",
                    }}
                    alt="goals"
                  />
                  <div>
                    <p>
                      <strong>Ranked ad goals</strong>
                    </p>
                    <p className="text-sm">Rated &quot;extremely important&quot; in order</p>
                  </div>
                </div>
              </div>
            </LittleSection>
          </div>
        </div>
      </BigSection>
      <BigSection color="white" extendLineTop>
        <div className="flex flex-col gap-[52px] py-5">
          <div id="contextual-inquiries">
            <LittleSection title="Contextual Inquiries">
              <p>
                As we were collecting survey responses, we conducted 6
                contextual inquiries with SMB owners and social media managers,
                none of which had experience creating ads on Pinterest prior to
                this. However, their experience levels on other platforms ranged
                from beginner to advanced. We provided a Pinterest account with
                a pin already uploaded, and asked them to promote the pin using
                the 3-step ad creation process. We collect 3 important insights:
              </p>
              <div className="grid grid-cols-2 gap-6 pt-8 items-center">
                <div className="flex p-2 items-center gap-2 bg-[#ededed] rounded-lg">
                  <Image
                    src="/pinterest/pin.png"
                    alt="articles"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p>
                      <strong>GUIDANCE & EXPERIENCE</strong>
                    </p>
                    <p>
                      Users have limited knowledge in using Pinterest for ad
                      creation or that it can be used for advertisement.
                    </p>
                  </div>
                </div>
                <div className="flex p-2 items-center gap-2 bg-[#ededed] rounded-lg">
                  <Image
                    src="/pinterest/pin.png"
                    alt="articles"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p>
                      <strong>TARGETING OPTIONS</strong>
                    </p>
                    <p>
                      Having a more specific and personalized targeting allow
                      users to make the best of their resources.
                    </p>
                  </div>
                </div>
                <div className="flex p-2 items-center gap-2 bg-[#ededed] rounded-lg">
                  <Image
                    src="/pinterest/pin.png"
                    alt="articles"
                    width={48}
                    height={48}
                  />
                  <div>
                    <p>
                      <strong>CONFUSING USER FLOW**</strong>
                    </p>
                    <p>
                      New users have difficulties navigating to the &quot;Promote
                      pin&quot; feature and confuse it with &quot;Create campaign.&quot;
                    </p>
                  </div>
                </div>
                <div className="flex pl-12">
                  <p>
                    <strong>**</strong>
                  </p>
                  <Image
                    src="/pinterest/create.png"
                    alt="create"
                    width={140}
                    height={106}
                    style={{ borderRadius: "8px" }}
                  />
                </div>
              </div>
            </LittleSection>
          </div>
          <div id="competitive-analysis">
            <LittleSection title="Competitive Analysis">
              <div className="flex flex-col gap-6">
                <p>
                  As one of our deliverables, we created a competitive analysis
                  chart looking at 5 other social media/advertisement platforms
                  and compared them to Pinterest: Instagram, TikTok, Snapchat,
                  Facebook, and Google Ads. We each took a platform and went
                  through the <strong>process of creating an ad</strong>{" "}
                  ourselves, while taking note of the{" "}
                  <strong>usability, key features, customer support</strong>{" "}
                  offerings, what <strong>demographics</strong> are included
                  when selecting an audience to target, <strong>pricing</strong>
                  , and the <strong>pros and cons</strong>. I had initially
                  researched on the platform X and later Google Ads.
                </p>
                <Image
                  src="/pinterest/competitorAnalysis.png"
                  alt="competitor analysis"
                  width={754}
                  height={454}
                  style={{ width: "100%", height: "auto" }}
                />
                <p>
                  We ranked these on a score card for each category to better
                  visualize the strengths and weaknesses of each platform and
                  listed them on the left-hand side.
                </p>
              </div>
            </LittleSection>
          </div>
        </div>
      </BigSection>
      <BigSection color="white" title="Synthesis">
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Affinity Mapping">
            <div className="flex flex-col gap-6">
              <p>
                We began to pool all of our research insights together and
                organized them into common clusters. Our top voted ones were
                targeting, guidance, and UI improvements.
              </p>
              <Image
                src="/pinterest/affinity.png"
                alt="affinity"
                width={754}
                height={491}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </LittleSection>
          <LittleSection title="Personas">
            <div className="flex flex-col gap-6">
              <p>
                We created two personas: the <strong>advertising newbie</strong>{" "}
                and the <strong>marketing veteran</strong>. The newbie is a
                brand new business owner and is looking to market his brand on
                Pinterest for the first time. The veteran has experience with
                creating ads on other platforms, but{" "}
                <strong>is interested in what Pinterest has to offer</strong>.
              </p>
              <Image
                src="/pinterest/persona1.png"
                alt="persona 1"
                width={754}
                height={565}
                style={{ width: "100%", height: "auto" }}
              />
              <Image
                src="/pinterest/persona2.png"
                alt="persona 2"
                width={754}
                height={565}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection title="Ideation" color="white">
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Crazy Eights">
            <div className="flex flex-col gap-6">
              <p>
                With these problem spaces in mind, we each did a round of crazy
                eights ideation and arranged them on an effort/impact matrix,
                rating them on <strong>feasibility</strong> (how easy it is for
                Pinterest to meet user needs) and <strong>impact</strong> (how
                well the user needs are met).
              </p>
              <Image
                src="/pinterest/crazy8s.png"
                alt="crazy8s"
                width={754}
                height={619}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </LittleSection>
          <LittleSection title="Crazy Eights">
            <Image
              src="/pinterest/effort.png"
              alt="crazy8s"
              width={754}
              height={586}
              style={{ width: "100%", height: "auto" }}
            />
          </LittleSection>
          <LittleSection title="Concept Selection">
            <div className="flex gap-12 justify-between [&>*]:flex-1">
              <div className="flex flex-col gap-7">
                <p>
                  Filtering through our high impact and high feasibility ideas,
                  we decided to work on <strong>4 concepts</strong>:
                </p>
                <div className="flex flex-col gap-6">
                  <div className="flex p-2 items-center gap-2 bg-[#ededed] rounded-lg">
                    <Image
                      src="/pinterest/pin.png"
                      alt="articles"
                      width={48}
                      height={48}
                    />
                    <p>
                      Improving the <strong>user flow</strong> when users{" "}
                      <strong>select the pin</strong> they want to promote.
                    </p>
                  </div>
                  <div className="flex p-2 items-center gap-2 bg-[#ededed] rounded-lg">
                    <Image
                      src="/pinterest/pin.png"
                      alt="articles"
                      width={48}
                      height={48}
                    />
                    <p>
                      <strong>Improving</strong> the audience targeting and
                      picking specific interests <strong>dropdown</strong>.
                    </p>
                  </div>
                  <div className="flex p-2 items-center gap-2 bg-[#ededed] rounded-lg">
                    <Image
                      src="/pinterest/pin.png"
                      alt="articles"
                      width={48}
                      height={48}
                    />
                    <p>
                      Enhancing the <strong>user interface</strong> with
                      additional colors, highlight CTAs and{" "}
                      <strong>confirmation page</strong>.
                    </p>
                  </div>
                  <div className="flex p-2 items-center gap-2 bg-[#ededed] rounded-lg">
                    <Image
                      src="/pinterest/pin.png"
                      alt="articles"
                      width={48}
                      height={48}
                    />
                    <p>
                      Incorporating <strong>user guidance</strong>, especially
                      for new advertisers, on{" "}
                      <strong>targeting and budgeting</strong>.
                    </p>
                  </div>
                </div>
              </div>
              <Image
                src="/pinterest/concept.png"
                alt="concept"
                width={348}
                height={405}
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <div className="text-white">
        <BigSection noLine color="#353434" title="Let&apos;s compare and contrast">
          <div className="flex gap-14 flex-col py-12">
            <Compare
              number={1}
              title="ORGANIZED SELECTING PINS"
              currentImage="/pinterest/currentImage1.png"
              currentText="Users can only select from their recently created Pins."
              newImage="/pinterest/newImage1.gif"
              newText="Users can select from the recents or board view if they have many Pins."
            />
            <Compare
              number={2}
              title="NAVIGATING TARGETING OPTIONS"
              currentImage="/pinterest/currentImage2.png"
              currentText="All options under &quot;Beauty&quot; are automatically selected, difficult to keep track of."
              newImage="/pinterest/newImage2.gif"
              newText="Users can (de)select precise interests faster with tags."
            />
            <Compare
              number={3}
              title="UI IMPROVEMENTS"
              currentImage="/pinterest/currentImage3.png"
              currentText="&quot;Plain and white&quot; screen."
              newImage="/pinterest/newImage3.gif"
              newText="Dynamic card coloring with highlighted CTA and confirmation pop-up. "
            />
            <Compare
              number={4}
              title="GUIDANCE WITH TARGETING"
              currentImage="/pinterest/currentImage4.png"
              currentText="No option on the 3-step screen. Users would go to the Help Center."
              newImage="/pinterest/newImage4.gif"
              newText="Select a suggested similar pins that automatically fills out targeting suggestions."
            />
          </div>
        </BigSection>
      </div>
      <BigSection title="Reflection" color="white">
        <div className="pl-20 pr-36 flex justify-between items-center gap-[120px] pt-6">
          <p>
            I was definitely intimidated to tackle this semester-long project,
            but it was an amazing experience working with real clients. Working
            with Pinterest taught me how to effectively leverage contextual
            inquiries to understand user flows and drive research-backed
            insights further into the creation phase. <br />
            <br />
            I&apos;d like to extend a huge thank you to Judy and Wei from Pinterest
            for guiding and supporting our team all semester, as well as to the
            rest of my team for pulling through this exciting journey!
          </p>
          <Image
            alt="pinterest"
            src="/pinterest/reflection.png"
            width={304}
            height={266}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </BigSection>
      <Footer />
    </>
  );
}
