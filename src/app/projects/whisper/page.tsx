import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import BigSection from "@/components/BigSection";
import LittleSection from "@/components/LittleSection";

export default function Whisper() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px] px-36">
        <div className="flex flex-row w-full gap-16">
          <Image
            src="/whisper.png"
            width={536}
            height={339}
            style={{ height: "100%", width: "auto" }}
            alt="whisper"
            priority
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-normal text-xl max-w-[90%]">
              Whisper is a <strong>card scanner</strong> to help those with{" "}
              <strong>visual impairments</strong> play the party card game
              CodeNames.
            </h3>
            <div className="flex flex-col gap-2">
              <h3>Role</h3>
              <p className="text-sm">UX Researcher</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Duration</h3>
              <p className="text-sm">September 2023 - December 2023</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Disciplines</h3>
              <p className="text-sm">Physical Product Design, Human-Centric Design</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Team</h3>
              <p className="text-sm">Liam Hatakenaka, Taylor Waddel, Jiajie Wang, and me!</p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black mt-[100px] mb-12" />
        <div className="flex flex-col gap-10">
          <h1>The Challenge</h1>
          <p className="text-3xl font-bold">
            How might we implement{" "}
            <span className="text-[#86be75]">sensory elements</span> to make party
            card games cater to visual impairments and foster understanding
            amongst normal-sighted players, bridging the gap and{" "}
            <span className="text-[#86be75]">promoting inclusivity</span>?
          </p>
        </div>
        <div className="py-12">
          <p className="max-w-[70%]">
            Card games are enjoyable, but many card games require the ability to
            see therefore leaving out the ability for those with visual
            impairments to play or be left at a disadvantage.
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-8 bg-[#ededed] pt-8 px-36 pb-16">
        <div className="flex flex-col">
          <h1>Final Designs</h1>
          <h6 className="text-black text-xl italic font-normal pt-5">Sneak Peek!!</h6>
          <p className="pt-7">
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
        <div className="flex gap-3">
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
      <div className="bg-[#353434] px-36 py-16">
        <h1 className="text-white">Let&apos;s rewind. How did we get here?</h1>
        <div className="flex flex-row justify-evenly pt-12 px-12">
          <div className="flex-1 flex flex-col gap-4 items-center">
            <p className="text-white font-neuton text-xl italic font-normal">RESEARCH</p>
            <div className="flex flex-row gap-2">
              <p className="text-white font-neuton text-xl italic font-normal">1.</p>
              <p className="text-white font-neuton text-xl italic font-normal">
                competitive analysis & understanding experiences
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center">
            <p className="text-white font-neuton text-xl italic font-normal">SYNTHESIS</p>
            <div className="flex flex-row gap-2">
              <p className="text-white font-neuton text-xl italic font-normal">2.</p>
              <p className="text-white font-neuton text-xl italic font-normal">
                organizing key insights & VOA analysis
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center">
            <p className="text-white font-neuton text-xl italic font-normal">IDEATIONS</p>
            <div className="flex flex-row gap-2">
              <p className="text-white font-neuton text-xl italic font-normal">3.</p>
              <p className="text-white font-neuton text-xl italic font-normal">
                concept generation & selection
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center">
            <p className="text-white font-neuton text-xl italic font-normal">DESIGN</p>
            <div className="flex flex-row gap-2">
              <p className="text-white font-neuton text-xl italic font-normal">4.</p>
              <p className="text-white font-neuton text-xl italic font-normal">
                user testing & iterating prototypes
              </p>
            </div>
          </div>
        </div>
      </div>
      <BigSection title="Research" color="white">
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Competitive Analysis">
            <p>
              We started looking at what solutions were already on the market
              and understanding what sort of pain points they already relieve.
              We found three main competitors that our HMW statement already
              solved.
            </p>
            <div className="flex flex-row gap-8">
              <div className="flex flex-col gap-4 flex-1">
                <p>
                  <strong>64 Ounce Games</strong>
                </p>
                <div className="bg-[#d2e8cb] py-[10px] px-[5px] flex flex-col gap-[15px] flex-grow">
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
              <div className="flex flex-col gap-4 flex-1">
                <p>
                  <strong>LEAP</strong>
                </p>
                <div className="bg-[#d2e8cb] py-[10px] px-[5px] flex flex-col gap-[15px] flex-grow">
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
              <div className="flex flex-col gap-4 flex-1">
                <p>
                  <strong>Tactile Playing Cards</strong>
                </p>
                <div className="bg-[#d2e8cb] py-[10px] px-[5px] flex flex-col gap-[15px] flex-grow">
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
            <div className="flex flex-row gap-3 items-center">
              <p>
                We also looked at secondary research to understand the{" "}
                <strong>different types of visual impairments</strong> and how
                they affect people&apos;s daily lives. We found that there are many
                different types of visual impairments, and each one affects
                people differently. This helped us understand that we needed to
                create a solution that would work for a variety of visual
                impairments.
              </p>
              <Image
                src="/whisper/secondary.png"
                alt="secondary"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection title="Synthesis" color="white">
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Key Insights">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 gap-x-10">
              <div className="bg-[#d2e8cb] p-[15px] flex flex-col gap-3">
                <h3>Lack of Independence</h3>
                <p>
                  Players with visual impairments often rely on others to help
                  them play card games, which can be frustrating and take away
                  from the social experience.
                </p>
              </div>
              <div className="bg-[#d2e8cb] p-[15px] flex flex-col gap-3">
                <h3>Social Experience</h3>
                <p>
                  Card games are often played in social settings, and players
                  with visual impairments want to be able to participate fully
                  in these experiences.
                </p>
              </div>
              <div className="bg-[#d2e8cb] p-[15px] flex flex-col gap-3">
                <h3>Accessibility</h3>
                <p>
                  Many card games are not designed with accessibility in mind,
                  making it difficult for players with visual impairments to
                  participate.
                </p>
              </div>
              <div className="bg-[#d2e8cb] p-[15px] flex flex-col gap-3">
                <h3>Adaptability</h3>
                <p>
                  Different types of visual impairments require different
                  solutions, so any solution needs to be adaptable to different
                  needs.
                </p>
              </div>
            </div>
          </LittleSection>
          <LittleSection title="VOA Analysis">
            <div className="flex flex-row gap-[86px]">
              <div className="flex flex-col justify-between">
                <Image
                  src="/whisper/voa.png"
                  alt="voa"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-5 h-5 bg-[#95c586]" />
                  <p>Opportunity</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="w-5 h-5 bg-black" />
                  <p>Pain Point</p>
                </div>
              </div>
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection title="Ideation" color="white" extendLineBottom noBorderBottom>
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Concept Generation">
            <div className="flex flex-col gap-7">
              <p>
                After synthesizing our research, we began generating concepts
                that would address the key insights we found. We focused on
                creating solutions that would promote independence and social
                interaction while being adaptable to different types of visual
                impairments.
              </p>
              <div className="flex flex-row gap-[52px]">
                <Image
                  src="/whisper/concept1.png"
                  alt="concept1"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  src="/whisper/concept2.png"
                  alt="concept2"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection color="grey" extendLineTop>
        <div className="flex flex-row gap-[22px]">
          <Image
            src="/whisper/prototype1.png"
            alt="prototype1"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src="/whisper/prototype2.png"
            alt="prototype2"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            src="/whisper/prototype3.png"
            alt="prototype3"
            width={0}
            height={0}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </BigSection>
      <Footer />
    </>
  );
}
