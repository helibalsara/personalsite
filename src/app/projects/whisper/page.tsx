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
            a ear piece to a speaker, based on the game. The final prototype
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

      <div className={styles.wipContainer}>
        <h6 className={styles.italic} id={styles.wip}>
          Work in progress... Come back soon!
        </h6>
        <Image
          src="/whisper/panda.svg"
          alt="WIP Panda"
          width={200}
          height={0}
          style={{ height: "auto" }}
        />
      </div>
      <ContactForm />
    </>
  );
}
