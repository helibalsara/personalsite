import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import LittleSection from "@/components/LittleSection";
import ContactForm from "@/components/ContactForm";
import BigSection from "@/components/BigSection";
import PageSection from "@/components/PageSection";

export default function SmartNotes() {
  return (
    <>
      <Navbar />
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/tt.svg"
            width={0}
            height={0}
            style={{ height: "100%", width: "auto" }}
            alt="tt"
            priority
          />
          <div className={styles.textContainer}>
            <h3 className={styles.noBold}>
              Tours by Tenants is a <strong>housing search app</strong> that
              helps individuals find their next home efficiently.
            </h3>
            <div className={styles.titleAndDescription}>
              <h3>Role</h3>
              <p>Mobile UI Designer</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Duration</h3>
              <p>March 2023 - May 2023</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Disciplines</h3>
              <p>UI Designer, Human-Centric Design</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Team</h3>
              <p>Julian Meyn, Julia An, Michael Lu, Hannah Park, and me :)</p>
            </div>
          </div>
        </div>
        <div className={styles.horizontalLine} />
        <div className={styles.problemSection}>
          <h1>The Challenge</h1>
          <p className={styles.HMW}>
            How might we improve the off-campus housing{" "}
            <span className={styles.searchExperience}>search experience?</span>
          </p>
        </div>
        <div className={styles.questionSection}>
          <p>
            As college students ourselves, we understand that finding housing
            off-campus is a complex and arduous process. From our initial
            considerations, which were further validated through our user
            research, we concluded that this journey as being{" "}
            <strong>time-consuming</strong>,<strong>frustrating</strong>, and
            <strong>overwhelming</strong>.
          </p>
        </div>
      </div>
      <div className={styles.finalDesignsContainer}>
        <div className={styles.finalDesignsContainer2}>
          <div className={styles.finalDesignsTextContainer}>
            <h1>Final Designs</h1>
            <h6 className={styles.italic}>Sneak Peak!!</h6>
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
          <div className={styles.mainImageContainer}>
            <Image
              src="/tt/main.gif"
              width={215}
              height={423.816}
              alt="Final Design"
            />
          </div>
        </div>
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
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Interviews">
            <p>
              We gained most of our insights from the{" "}
              <strong>11 user interviews</strong> we conducted. This allowed us
              to confirm this was a common struggle and many pain points
              associated with the process. Our questions were grouped into these
              sections:
            </p>
            <div className={styles.insightsContainer}>
              <div className={styles.insight}>
                <p>General questions on experience</p>
              </div>
              <div className={styles.insight}>
                <p>Past/current searching methods</p>
              </div>
              <div className={styles.insight}>
                <p>Frustrations and pain points in this process</p>
              </div>
              <div className={styles.insight}>
                <p>Factors influencing their final decision</p>
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
            <div className={styles.resultsContainer}>
              <div className={styles.result}>
                <p>
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
              <div className={styles.result}>
                <p>
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
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Themes">
            <div className={styles.themesContainer}>
              <p>
                Through affinity our research insights, we focused on these
                three common pain point clusters. These were a few notable
                quotes and insights. Overall, students found the housing search
                process 1) time-consuming, 2) lacking an organizational method
                to keep track through the process, and 3) difficulty aligning
                personal and roommates’ preferences.
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
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Competitive Analysis">
            <div className={styles.themesContainer}>
              <p>
                At this stage, we broke off from our teams and began our
                individual solution ideation! Seeing as there was a need for a
                centralizing platform for housing information, I thought a
                mobile app would be the best way to deliver the solutions. But
                before that, I needed to look at a commonly used competitor -{" "}
                <strong>Apartments.com</strong>.
              </p>
              <Image
                src="/tt/competitiveAnalysis.svg"
                alt="journeymap"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
              <p>
                I chose to focus on the process, key features, how quickly users
                are able to get feedback, pros and cons into consideration while
                navigating the site. Overall, it is a great resource with and
                extensive listing of housing options. Users can search through a
                map or list view and filter by amenities. However, there is a{" "}
                <strong>lack of authenticity</strong> with the images of housing
                options due to the heavily edited and computerized. It can be{" "}
                <strong>
                  difficult to visualize these places as a future home
                </strong>
                .
              </p>
            </div>
          </LittleSection>
          <LittleSection title="Lo-fi Brainstorming">
            <div className={styles.lofiContainer}>
              <div className={styles.lofi}>
                <Image
                  alt="onboarding"
                  src="/tt/onboarding.png"
                  width={361}
                  height={277}
                  style={{ width: "auto", height: "auto" }}
                />
                <h6 className={styles.italic}>
                  Initial onboarding screens, undeveloped home page
                </h6>
              </div>
              <div className={styles.lofi}>
                <h6 className={styles.italic}>
                  Adding two feature suggested by user participant- search
                  locations radius from school + a way to message housing
                  managers
                </h6>
                <Image
                  alt="features"
                  src="/tt/features.png"
                  width={324}
                  height={277}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection color="grey" extendLineTop noBorderBottom>
        <div className={styles.userTestingLittleSectionContainer}>
          <LittleSection title="User Testing & Iterations">
            <p>
              After running 5 user tests with my friends, I found that users had
              difficulties navigating through the flows seamlessly. There was
              some <strong>confusion on the home page</strong> and users thought
              the <strong>UI was cluttered</strong>, especially on the apartment
              page.
            </p>
          </LittleSection>
          <div className={styles.pagesContainer}>
            <PageSection
              title="Home Page"
              before="/tt/before1.png"
              after="/tt/after1.png"
              features={[
                {
                  heading: "OPTIMISTIC WELCOME",
                  content:
                    "Allows for a positive outlook for a user’s journey.",
                },
                {
                  heading: "LIST VIEW DEFAULT",
                  content: "Users can toggle to a map view for listings. ",
                },
                {
                  heading: "CARD VIEW",
                  content: "Organized and consistent information cards",
                },
                {
                  heading: "INFINITE SCROLL",
                  content: "Gather useful info about the listing immediately.",
                },
              ]}
            />
            <PageSection
              title="Apartment Page"
              before="/tt/before2.png"
              after="/tt/after2.png"
              features={[
                {
                  heading: "CONSISTENT INFO",
                  content: "Converts info on the cards to a larger view",
                },
                {
                  heading: "FLOOR PLANS TAB",
                  content:
                    "To declutter the page, users can access a separate page to view floor plans.",
                },
                {
                  heading: "AMENITIES",
                  content: "Included amenities for quick referencing.",
                },
                {
                  heading: "REVIEWS",
                  content:
                    "Included reviews on the page to include a “Contact Manager” option on top.",
                },
              ]}
            />
            <PageSection
              title="Filtering"
              before="/tt/before3.png"
              after="/tt/after3.png"
              features={[
                {
                  heading: "EASY ACCESS FILTERS",
                  content:
                    "Pop-up tab for filters allows users to change what they are looking for easily. Also included in the onboarding screens for consistency. ",
                },
              ]}
            />
          </div>
        </div>
      </BigSection>
      <BigSection
        title="Final Designs"
        color="linear-gradient(143deg, #9FC5D9 10.17%, rgba(40, 83, 107, 0.80) 86.02%)"
      >
        <div className={styles.finalContainer}>
          <Image
            alt="tt"
            src="/tt/finaldesigns.png"
            width={884.6}
            height={944.43}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </BigSection>
      <BigSection title="Reflection" color="white">
        <div className={styles.reflectionContainer}>
          <p>
            This project was a great way for me to start practicing my UI design
            skills. I was able to get feedback and make improvements in each
            iteration to improve the usability, user flows, and overall
            aesthetics. Shoutout to my team for planning all the research and
            synthesizing the key findings. It was a blast working while folding
            paper cranes!
          </p>
          <Image
            alt="tt"
            src="/tt/ttpic.png"
            width={178.75}
            height={195}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </BigSection>
      <ContactForm />
    </>
  );
}
