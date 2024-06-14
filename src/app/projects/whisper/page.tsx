import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import BigSection from "@/components/BigSection";
import LittleSection from "@/components/LittleSection";

export default function Whisper() {
  return (
    <>
      <Navbar />
      <div className={styles.topContainer}>
        <div className={styles.imageContainer}>
          <Image
            src="/whisper.png"
            width={536}
            height={339}
            style={{ height: "100%", width: "auto" }}
            alt="whisper"
            priority
          />
          <div className={styles.textContainer}>
            <h3 className={styles.noBold}>
              Whisper is a <strong>card scanner</strong> to help those with{" "}
              <strong>visual impairments</strong> play the party card game
              CodeNames.
            </h3>
            <div className={styles.titleAndDescription}>
              <h3>Role</h3>
              <p>UX Researcher</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Duration</h3>
              <p>September 2023 - December 2023</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Disciplines</h3>
              <p>Physical Product Design, Human-Centric Design</p>
            </div>
            <div className={styles.titleAndDescription}>
              <h3>Team</h3>
              <p>Liam Hatakenaka, Taylor Waddel, Jiajie Wang, and me!</p>
            </div>
          </div>
        </div>
        <div className={styles.horizontalLine} />
        <div className={styles.problemSection}>
          <h1>The Challenge</h1>
          <p className={styles.bigP}>
            How might we implement{" "}
            <span className={styles.green}>sensory elements</span> to make party
            card games cater to visual impairments and foster understanding
            amongst normal-sighted players, bridging the gap and{" "}
            <span className={styles.green}>promoting inclusivity</span>?
          </p>
        </div>
        <div className={styles.questionSection}>
          <p className={styles.enjoyable}>
            Card games are enjoyable, but many card games require the ability to
            see therefore leaving out the ability for those with visual
            impairments to play or be left at a disadvantage.
          </p>
        </div>
      </div>
      <div className={styles.finalDesignContainer}>
        <div className={styles.finalDesignColumn}>
          <h1>Final Designs</h1>
          <h6 className={styles.italic} id={styles.sneakPeek}>
            Sneak Peek!!
          </h6>
          <p className={styles.finalIterationText}>
            Taking a look ahead at our final iteration...
            <br />
            <br />A smart card reader that is able to encase a phone and scan
            cards with NFC chips. The data of each card is stored within the
            device and users can navigate through each card content with the
            arrow buttons. There is also a side button to toggle the audio from
            a ear piece to a speaker, based on the game. The final Version
            meant to highlight the <strong>independence</strong> and{" "}
            <strong>ease of use</strong> created by utilising handheld device
            and a few large tactile buttons.
          </p>
        </div>
        <div className={styles.imageRow}>
          <Image
            src="/whisper/whisper1.png"
            alt="whisper1"
            width={174}
            height={399}
            style={{ width: "auto", height: "100%" }}
          />
          <Image
            src="/whisper/whisper2.png"
            alt="whisper2"
            width={174}
            height={399}
            style={{ width: "auto", height: "100%" }}
          />
          <Image
            src="/whisper/whisper3.png"
            alt="whisper3"
            width={174}
            height={399}
            style={{ width: "auto", height: "100%" }}
          />
        </div>
      </div>
      <div className={styles.howGetHereContainer}>
        <h1 className={styles.white}>Let’s rewind. How did we get here?</h1>
        <div className={styles.stepsContainer}>
          <div className={styles.step}>
            <p className={styles.stepText}>RESEARCH</p>
            <div className={styles.numberAndText}>
              <p className={styles.stepText}>1.</p>
              <p className={styles.stepText}>
                competitive analysis & understanding experiences
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <p className={styles.stepText}>SYNTHESIS</p>
            <div className={styles.numberAndText}>
              <p className={styles.stepText}>2.</p>
              <p className={styles.stepText}>
                organizing key insights & VOA analysis
              </p>
            </div>
          </div>
          <div className={styles.step}>
            <p className={styles.stepText}>IDEATIONS</p>
            <div className={styles.numberAndText}>
              <p className={styles.stepText}>3.</p>
              <p className={styles.stepText}>concept generation & selection</p>
            </div>
          </div>
          <div className={styles.step}>
            <p className={styles.stepText}>DESIGN</p>
            <div className={styles.numberAndText}>
              <p className={styles.stepText}>4.</p>
              <p className={styles.stepText}>
                user testing & iterating prototypes
              </p>
            </div>
          </div>
        </div>
      </div>
      <BigSection title="Research" color="white">
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Competitive Analysis">
            <p>
              We started looking at what solutions were already on the market
              and understanding what sort of pain points they already relieve.
              We found three main competitors that our HMW statement already
              solved.
            </p>
            <div className={styles.competitiveContainer}>
              <div className={styles.competitiveColumn}>
                <p>
                  <strong>64 Ounce Games</strong>
                </p>
                <div className={styles.competitiveCard}>
                  <Image
                    src="/whisper/comp1.png"
                    alt="comp1"
                    width={85.5}
                    height={87.875}
                    style={{ height: "auto", alignSelf: "center" }}
                  />
                  <p>Direct Competitor</p>
                  <span>
                    <ul>
                      <li>Adding Braille to existing card games</li>
                    </ul>
                  </span>
                </div>
              </div>
              <div className={styles.competitiveColumn}>
                <p>
                  <strong>LEAP</strong>
                </p>
                <div className={styles.competitiveCard}>
                  <Image
                    src="/whisper/leap.png"
                    alt="leap"
                    width={99.86}
                    height={48.19}
                    style={{ height: "auto", alignSelf: "center" }}
                  />
                  <p>Indirect Competitor</p>
                  <span>
                    <ul>
                      <li>
                        tictactoe, tennis, musical math online games for
                        children with blindness
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
              <div className={styles.competitiveColumn}>
                <p>
                  <strong>Tactile Playing Cards</strong>
                </p>
                <div className={styles.competitiveCard}>
                  <Image
                    src="/whisper/tactile.png"
                    alt="leap"
                    width={108.7}
                    height={68.25}
                    style={{ height: "auto", alignSelf: "center" }}
                  />
                  <p>Indirect Competitor</p>
                  <span>
                    <ul>
                      <li>
                        Card games with unique tactile features like patterns
                        and textures
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </LittleSection>
          <LittleSection title="User Survey">
            <p>
              We collected 16 responses on our survey with the most common type
              of impairments being complete blindness and retinitis pigmentosa.
              Some key insights we discovered were:
            </p>
            <ul>
              <li>
                Cards represented <strong>only by color</strong> are difficult
                to play with
              </li>
              <li>
                Playing cards are too <strong>small</strong>
              </li>
              <li>
                Asking friends to help them read the cards creates a{" "}
                <strong>lack of independence</strong>
              </li>
              <li>
                People are mostly playing in <strong>social settings</strong>
              </li>
            </ul>
          </LittleSection>
          <LittleSection title="Secondary">
            <div className={styles.secondary}>
              <p>
                We found Kay from the YouTube channel “From Kay to Zee”, where
                she explained her personal experience with playing board games
                as visually impaired. Next was Angela from the YouTube channel
                “Visually Impaired Designer” who listed several game ideas for
                playing with the visually impaired such as her. Lastly, there
                was a good breakdown on the forum r/boardgames in Reddit that
                listed things to know when playing board games with the visually
                impaired.
              </p>
              <Image
                src="/whisper/79.png"
                alt="79"
                width={342.94}
                height={205}
                style={{ height: "auto" }}
              />
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection title="Synthesis" color="white">
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Key Insights">
            <div className={styles.gridContainer}>
              <div className={styles.gridItem}>
                <p>
                  <strong>LACK OF INDEPENDENCE</strong>
                </p>
                <p>
                  The need for friends to read their cards out loud often
                  compromises their independence.
                </p>
              </div>
              <div className={styles.gridItem}>
                <p>
                  <strong>MINIMIZING DOWNTIME</strong>
                </p>
                <p>
                  Maintaining constant engagement during games is important to
                  overall enjoyment.
                </p>
              </div>
              <div className={styles.gridItem}>
                <p>
                  <strong>HIDDEN INFORMATION</strong>
                </p>
                <p>
                  Hidden information in card games is difficult to convey and
                  challenging to play.
                </p>
              </div>
              <div className={styles.gridItem}>
                <p>
                  <strong>MULTIPLE CARDS</strong>
                </p>
                <p>
                  Even with assistive technology, managing multiple cards with
                  various words is difficult.
                </p>
              </div>
            </div>
          </LittleSection>
          <LittleSection title="Persona">
            <Image
              src="/whisper/persona.png"
              alt="persona"
              width={751}
              height={422.44}
              style={{ height: "auto", width: "100%" }}
            />
          </LittleSection>
          <LittleSection title="VOA Analysis">
            <div className={styles.voa}>
              <div className={styles.voaColumn}>
                <p>
                  A Value Opportunity Analysis was conducted to compare our HMW
                  statement to a competitor based on 7 value opportunity
                  attributes: emotion, ergonomics, aesthetics, identity, impact,
                  core technologies, and quality. We chose to compare our future
                  product to the competitor <strong>64 Ounce Games</strong>. We
                  first decided what our product MUST achieve to maximize the
                  important value propositions. We chose to{" "}
                  <strong>
                    maximize the social impact, enabling technologies, tactile
                    features, and a strong sense of security and independence.
                  </strong>
                </p>
                <div className={styles.legendColumn}>
                  <div className={styles.legendRow}>
                    <div className={styles.legendSquareGreen} />
                    <p>Our Product</p>
                  </div>
                  <div className={styles.legendRow}>
                    <div className={styles.legendSquareBlack} />
                    <p>64 Ounce Games</p>
                  </div>
                </div>
              </div>
              <Image
                src="/whisper/voa.png"
                alt="voa"
                width={315}
                height={469.93}
                style={{ height: "auto", width: "100%" }}
              />
            </div>
          </LittleSection>
        </div>
      </BigSection>

      <BigSection title="Ideation" color="white">
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Concept Generation">
            <div className={styles.conceptRow}>
              <div className={styles.conceptColumn}>
                <p>
                  After ideating over <strong>50 solutions</strong>, we narrowed
                  down to <strong>10 concepts</strong> which we mapped on a 2x2
                  matrix focusing on:
                  <br />
                  <strong>Tech</strong>
                  <br />-{">"}how reliant on technology the solution is <br />
                  <strong>Sensory Element</strong>
                  <br /> -{">"}
                  how tactile or auditory focused it is
                </p>
                <Image
                  src="/whisper/concept2.png"
                  alt="concept2"
                  width={335}
                  height={265}
                  style={{ height: "100%", width: "auto" }}
                />
              </div>
              <div className={styles.conceptColumn}>
                <Image
                  src="/whisper/concept1.png"
                  alt="concept1"
                  width={362.7}
                  height={265.3}
                  style={{ height: "100%", width: "auto" }}
                />
                <p>
                  After a weighted matrix analysis,{" "}
                  <strong>a smart card reader was the winner!</strong>
                </p>
              </div>
            </div>
          </LittleSection>
        </div>
      </BigSection>

      <BigSection title="User Testing" color="grey">
        <div className={styles.littleSectionContainer}>
          <LittleSection title="Version 1">
            <div className={styles.prototypeContainer}>
              <div className={styles.prototypeRow}>
                <p>
                  The initial prototype tested the simple features:
                  <br />-{">"}two arrows to navigate through a list
                  <br />-{">"}side button to simulate audio output changing
                  Visual impairment was simulated with a “Wizard of Oz” approach
                  and a script. Card scanning and navigation was simulated by a
                  team member.
                </p>
                <div className={styles.prototype1Row}>
                  <Image
                    src="/whisper/user-testing-1.png"
                    alt="user-testing-1"
                    width={85.68}
                    height={127}
                    style={{ height: "auto" }}
                  />
                  <Image
                    src="/whisper/user-testing-2.png"
                    alt="user-testing-2"
                    width={85.68}
                    height={127}
                    style={{ height: "auto" }}
                  />
                </div>
              </div>
              <div className={styles.prototypeRow}>
                <div className={styles.prototypeColumn}>
                  <p>
                    Our goals for the first user test were to{" "}
                    <strong>measure</strong> a{" "}
                    <strong>sense of independence</strong> via a survey,
                    understand the{" "}
                    <strong>cost benefit of freedom vs rigidity</strong>,
                    especially determining the amount of user interactions, and
                    the <strong>level of enjoyment.</strong>
                  </p>
                  <p>
                    <strong>Results</strong>
                    <br />5 mistakes and 9 slip-ups were made in understanding
                    where cards were. The main feedback from the survey was that
                    they{" "}
                    <strong>
                      needed more assistance and more interaction
                    </strong>{" "}
                    with the device.
                  </p>
                </div>
                <Image
                  src="/whisper/user-testing-3.png"
                  alt="user-testing-3"
                  width={177.37}
                  height={196}
                  style={{ height: "auto" }}
                />
              </div>
            </div>
          </LittleSection>
          <LittleSection title="Version 2">
            <div className={styles.prototypeRow}>
              <div className={styles.prototypeColumn}>
                <p>
                  An updated prototype was created out of cardboard and duct
                  tape with additional arrow buttons for more interaction.
                  “Wizard of Oz” testing was done with the same subject as
                  before. New features include:
                  <br />-{">"} navigating the saved cards in{" "}
                  <strong>two dimensions</strong>
                  <br />-{">"} ability to <strong>mark/unmark</strong> and{" "}
                  <strong>re-read cards.</strong>
                </p>
                <p>
                  <strong>Results</strong>
                  <br />2 mistakes and 7 slip-ups. Simulated working screens and
                  a 3D printed prototype were created to improve the flow.
                </p>
              </div>
              <Image
                src="/whisper/user-testing-4.png"
                alt="user-testing-4"
                width={177}
                height={141.24}
                style={{ width: "auto" }}
              />
            </div>
          </LittleSection>
          <LittleSection title="Final Version">
            <div className={styles.prototypeRow}>
              <div className={styles.prototypeColumn}>
                <p>
                  For the final iteration, only 1 mistake and 3 slip-ups were
                  made. The slips still showed that there was a break in flow in
                  the game, most likely due to the “Wizard of Oz” experiment
                  conductor for simulating the button pushes.
                </p>
                <p>
                  There was a <strong>3 minute reduction in downtime</strong>,
                  from 5 minutes to 2 minutes.
                </p>
                <p>
                  Our end prototype was able to meet the main goals of our VOA,
                  primarily creating a sense of independence, but also ease of
                  use and sense of place.
                </p>
              </div>
              <Image
                src="/whisper/user-testing-5.png"
                alt="user-testing-5"
                width={177}
                height={238}
                style={{ width: "auto" }}
              />
            </div>
          </LittleSection>
        </div>
      </BigSection>

      <BigSection title="Reflection" color="white">
        <div className={styles.reflectionContainer}>
          <p>
            This was my first physical design project ever, and I enjoyed the
            whole process. I personally focused more on the research and
            synthesis portion of the project since I already had experience in
            those phases. I wish I had contributed more to the prototyping
            section and learned how to 3D model/print the actual prototype.
            However, I’m very proud and grateful for my team for all the work we
            put into this project! Looking back, I would have wanted to gather
            more primary research to avoid making the assumptions we did about
            what our user may want. The next development of the prototype would
            be to test with new social playing card games, to understand how
            well the concept works with various popular board game options.
          </p>
          <Image
            src="/whisper/reflection.png"
            alt="reflection"
            width={245.67}
            height={184.25}
            style={{ width: "auto" }}
          />
        </div>
      </BigSection>

      <ContactForm />
    </>
  );
}
