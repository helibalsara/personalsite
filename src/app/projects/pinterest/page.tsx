"use client";

import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
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
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/pinterest.svg"
            width={0}
            height={0}
            style={{ height: "100%", width: "auto" }}
            alt="pinterest"
            priority
          />
          <div className={styles.textContainer}>
            <h3 className={styles.noBold}>
              Improving the <strong>3-step ad creation process</strong> on
              Pinterest for <strong>small-medium businesses</strong> through
              Berkeley Innovation.
            </h3>
            <div className={styles.titleAndDescription}>
              <h3>Role</h3>
              <p>Product Design Consultant</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Duration</h3>
              <p>September 2023- December 2023</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Disciplines</h3>
              <p>UI Designer, Human- Centric Design, UX Research</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Team</h3>
              <p>
                Sarah Suen (PM), Uyen Phan, Michid Bayambajav, Joanna Ye, Angie
                Nguyen, and me!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.horizontalLine} />
        <div className={styles.problemSection}>
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
        <div className={styles.questionSection}>
          <p className={styles.bigP}>
            Design an approachable and dedicated{" "}
            <span className={styles.red}>ad creation flow</span> to support new
            merchants promoting their products on Pinterest for the{" "}
            <span className={styles.red}>first time</span>.
          </p>
        </div>
      </div>
      <div className={styles.finalRecsContainer}>
        <div className={styles.finalRecsTop}>
          <h1>Final Recommendations</h1>
          <h6 className={styles.italic}>Sneak Peak!! 🤫</h6>
        </div>
        <FinalRecommendation
          number={1}
          title="ORGANIZED SELECTING PINS"
          image="/pinterest/newImage1.gif"
        >
          <p>
            Currently, when businesses select a pin they have uploaded to
            advertise, they are greeting with a{" "}
            <strong>xpop-up side bar</strong> containing all the pins they have
            created, sorted by recents. If a business has many pins, it can be a{" "}
            <strong>hassle finding the one they want to promote</strong>. To
            better organize this, we separated two views of pins - recents and
            boards. This allows users to <strong>easily find the pin</strong>{" "}
            and <strong>help them save some time</strong>.
          </p>
        </FinalRecommendation>
        <FinalRecommendation
          number={2}
          title="NAVIGATING TARGETING OPTIONS"
          image="/pinterest/newImage2.gif"
        >
          <p>
            Many small businesses greatly value having specific targeting
            options to increase the visibility of their ad. Currently,
            Pinterest’s targeting options include narrowing by age, gender, and
            interests. The current interests selections are already
            comprehensive, however, <strong>difficult to navigate</strong> and
            visualize selected options. To help users save some time, we
            included
            <strong>
              pop-up tags, automatic dropdown, and visible scroll bar
            </strong>
            for the selected interests box.
          </p>
        </FinalRecommendation>
        <FinalRecommendation
          number={3}
          title="UI IMPROVEMENTS"
          image="/pinterest/newImage3.gif"
        >
          <p>
            Users seemed to easily understand the simple 3-step ad flow, but
            many thought the UI was too <strong>“white and plain”</strong> and
            certain elements could stand out. To{" "}
            <strong>enhance user focus and visual appeal</strong> keeping the
            same layout, we introduced a <strong>card-like</strong> format to
            each section that dynamically highlights the active section. We also
            changed the “Promote” button to red to help it stand out. We also
            included a pop-up <strong>confirmation</strong> once the pin is
            promoted with links to resources helping new users.
          </p>
        </FinalRecommendation>
        <FinalRecommendation
          number={4}
          title="GUIDANCE WITH TARGETING"
          image="/pinterest/newImage4.gif"
        >
          <p>
            New ad creators might feel{" "}
            <strong>confused about the impact of audience selection</strong> and
            overwhelmed figuring out who to target due to the numerous options.
            We integrated a <strong>smart suggestion feature</strong> which
            analyzes the content of an ad and automatically fills out the
            audience section with targeted demographics, inspired by similar
            successful campaigns. A confirmation message{" "}
            <strong>reassures new users</strong> of the effectiveness of this
            feature.
          </p>
        </FinalRecommendation>
      </div>
      <div className={styles.howGetHereContainer}>
        <h1 className={styles.white}>You’re probably wondering how we ended up here...</h1>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <p className={styles.stepText}>RESEARCH</p>
            <div className={styles.numberAndText}>
              <p className={styles.stepText}>1.</p>
              <p className={styles.stepText}>
                understanding pain points & current methods
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <p className={styles.stepText}>SYNTHESIS</p>
            <div className={styles.numberAndText}>
              <p className={styles.stepText}>2.</p>
              <p className={styles.stepText}>
                identifying themes & emerging journey patterns
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <p className={styles.stepText}>IDEATIONS</p>
            <div className={styles.numberAndText}>
              <p className={styles.stepText}>3.</p>
              <p className={styles.stepText}>
                competitive analysis & brain-storming
                {/* had to add hyphen to shorten */}
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <p className={styles.stepText}>DESIGN</p>
            <div className={styles.numberAndText}>
              <p className={styles.stepText}>4.</p>
              <p className={styles.stepText}>
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
        <div className={styles.researchTop}>
          <p>
            We needed a better understanding of the problem space, specifically
            about the nuances of ad creation and advertising on social media
            platforms. Our research involved diving into industry-specific
            articles on digital marketing and new merchant struggles. This
            allows us to understand what insights we wanted from our survey and
            contextual inquiries, as well as seeing the need to break down how
            other social media platforms do ad creation.
          </p>
          <div>
            <FlowChart style={{ flexShrink: 0 }} />
            <h6>click to jump to section!</h6>
          </div>
        </div>
        <div className={styles.littleSectionContainer}>
          <div id="secondary-research">
            <LittleSection title="Secondary Research">
              <p>
                We learned more about the digital marketing space through
                various articles from big news articles to smaller blog accounts
                on marketing. Here, we learned some key insights on new merchant
                struggles, common new business practices, and pros of different
                platforms. Some of the main insights are:
              </p>
              <div className={styles.pinsAndImage}>
                <div className={styles.pinsContainer}>
                  <div className={styles.pinRectangle}>
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
                  <div className={styles.pinRectangle}>
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
                  <div className={styles.pinRectangle}>
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
        <div className={styles.surveyContainer}>
          <div id="survey">
            <LittleSection title="Survey">
              <p>
                While we were only able to collect <strong>20 responses</strong>{" "}
                on our user survey, we still pulled some important insights.
              </p>
              <div className={styles.responses}>
                <div>
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
                    <p>Instagram & Google Ads</p>
                  </div>
                </div>
                <div>
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
                    <p>Time-consuming solo work</p>
                  </div>
                </div>
                <div>
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
                    <p>Rated “extremely important” in order</p>
                  </div>
                </div>
              </div>
            </LittleSection>
          </div>
        </div>
      </BigSection>
      <BigSection color="white" extendLineTop>
        <div className={styles.surveyContainer}>
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
              <div className={styles.contextPins}>
                <div className={styles.pinRectangle}>
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
                <div className={styles.pinRectangle}>
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
                <div className={styles.pinRectangle}>
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
                      New users have difficulties navigating to the “Promote
                      pin” feature and confuse it with “Create campaign.”
                    </p>
                  </div>
                </div>
                <div className={styles.createAndAsterisk}>
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
              <div className={styles.competitorAnalysis}>
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
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Affinity Mapping">
            <div className={styles.competitorAnalysis}>
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
            <div className={styles.competitorAnalysis}>
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
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Crazy Eights">
            <div className={styles.competitorAnalysis}>
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
            <div className={styles.conceptSelection}>
              <div className={styles.conceptSelectionTextAndPins}>
                <p>
                  Filtering through our high impact and high feasibility ideas,
                  we decided to work on <strong>4 concepts</strong>:
                </p>
                <div className={styles.conceptSelectionPins}>
                  <div className={styles.pinRectangle}>
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
                  <div className={styles.pinRectangle}>
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
                  <div className={styles.pinRectangle}>
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
                  <div className={styles.pinRectangle}>
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
      <div className={styles.compare}>
        <BigSection noLine color="#353434" title="Let’s compare and contrast">
          <div className={styles.compareContainer}>
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
              currentText="All options under “Beauty” are automatically selected, difficult to keep track of."
              newImage="/pinterest/newImage2.gif"
              newText="Users can (de)select precise interests faster with tags."
            />
            <Compare
              number={3}
              title="UI IMPROVEMENTS"
              currentImage="/pinterest/currentImage3.png"
              currentText="“Plain and white” screen."
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
        <div className={styles.reflectionContainer}>
          <p>
            I was definitely intimidated to tackle this semester-long project,
            but it was an amazing experience working with real clients. Working
            with Pinterest taught me how to effectively leverage contextual
            inquiries to understand user flows and drive research-backed
            insights further into the creation phase. <br />
            <br />
            I’d like to extend a huge thank you to Judy and Wei from Pinterest
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
      <ContactForm />
    </>
  );
}
