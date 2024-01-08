import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FinalRecommendation from "@/components/FinalRecommendation";
import BigSection from "@/components/BigSection";
import LittleSection from "@/components/LittleSection";
import FlowChart from "./flowchart.svg";

export default function Pinterest() {
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
          image="/pinterest/final1.svg"
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
          image="/pinterest/final2.svg"
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
          image="/pinterest/final3.svg"
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
          title="UI IMPROVEMENTS"
          image="/pinterest/final4.svg"
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
        <h1 className={styles.white}>Wait... how did we get here? 🤔</h1>
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
      <BigSection title="Research" color="white">
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
          <FlowChart style={{ flexShrink: 0 }} />
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
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </LittleSection>
          </div>
          <div id="survey">
            <LittleSection title="Survey"></LittleSection>
          </div>
          <div id="contextual-inquiries">
            <LittleSection title="Contextual Inquiries"></LittleSection>
          </div>
          <div id="competitive-analysis">
            <LittleSection title="Competitive Analysis"></LittleSection>
          </div>
        </div>
      </BigSection>
      <ContactForm />
    </>
  );
}
