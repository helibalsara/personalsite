import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import WaitHow from "@/components/WaitHow";
import Line from "@/components/Line";
import ExpandableImage from "@/components/ExpandableImage";

export default function Whisper() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px]">
        <Image
          src="/whisper/hero.svg"
          width={1280}
          height={540.5}
          style={{ height: "auto", width: "100%" }}
          alt="whisper"
          priority
        />
      </div>
      <ProjectOverview
        role="UX/UI Designer"
        duration="September  2023 - December 2023"
        disciplines="Physical Product Design, Human-Centric Design"
        team="Liam Hatakenaka, Taylor Waddel, Jiajie Wang, and me!"
        description={
          <>
            Card games are enjoyable, but many card games require the ability to
            see therefore leaving out the ability for those with visual
            impairments to play or be left at a disadvantage.
            <br />
            <br />
            So, how might we <strong>implement sensory elements</strong> to make
            <strong>
              party card games cater to visual impairments
            </strong> and <strong>foster understanding</strong> amongst
            normal-sighted players, bridging the gap and{" "}
            <strong>promoting inclusivity?</strong>
          </>
        }
      />
      <div className="py-8 md:py-16 px-4 md:px-36 bg-[#EDEDED]">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="w-full md:w-2/5">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Final Designs
            </h1>
            <h4 className="text-lg md:text-xl italic mb-4">Sneak Peak!!</h4>
            <p className="text-base md:text-xl">
              Taking a look ahead at our final iteration...
              <br />
              <br />
              A smart card reader that is able to encase a phone and scan cards
              with NFC chips.
              <br />
              <br />
              The data of each card is stored within the device and users can
              navigate through each card content with the arrow buttons. There
              is also a side button to toggle the audio from a ear piece to a
              speaker, based on the game. The final prototype meant to highlight
              the <strong>independence</strong> and <strong>ease of use</strong>{" "}
              created by utilising handheld device and a few large tactile
              buttons.
            </p>
          </div>
          <div className="w-full md:w-3/5 flex flex-row gap-2">
            <div>
              <Image
                src="/whisper/final1.jpeg"
                width={1815}
                height={4032}
                style={{ height: "auto", width: "100%" }}
                alt="project section"
              />
            </div>
            <div>
              <Image
                src="/whisper/final2.jpeg"
                width={1815}
                height={4032}
                style={{ height: "auto", width: "100%" }}
                alt="project section"
              />
            </div>
            <div>
              <Image
                src="/whisper/final3.jpeg"
                width={1815}
                height={4032}
                style={{ height: "auto", width: "100%" }}
                alt="project section"
              />
            </div>
          </div>
        </div>
      </div>
      <WaitHow />
      <div className="py-8 md:py-16 px-4 md:px-[182px] flex flex-col gap-8">
        <h1 className="text-2xl md:text-[32px] font-bold">INITIAL RESEARCH</h1>
        <p className="text-sm md:text-base">
          To gain a better understanding of our problem space, we needed to see
          what solutions already existing and what were common pain points for
          the visually impaired with card games.
        </p>
        <p className="text-lg md:text-xl font-semibold">COMPETITOR ANALYSIS</p>
        <p className="text-sm md:text-base">
          We started looking at what solutions were already on the market and
          understanding what sort of pain points they already relieve. We found
          three main competitors that our HMW statement already solved.{" "}
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 self-center w-full md:w-[80%]">
          <div className="flex flex-1 flex-col gap-2 p-3 bg-[#EDEDED] rounded-lg justify-center items-center">
            <Image
              src="/whisper/comp1.png"
              width={92}
              height={96}
              alt="whisper"
            />
            <p className="text-sm md:text-base font-bold text-center">
              64 Ounce Games (direct competitor)
            </p>
            <p className="text-sm md:text-base text-center">
              Company that adds Braille to existing card games
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-3 bg-[#EDEDED] rounded-lg justify-center items-center">
            <Image
              src="/whisper/comp2.png"
              width={202}
              height={98}
              alt="whisper"
            />
            <p className="text-sm md:text-base font-bold text-center">
              Leap (indirect competitor)
            </p>
            <p className="text-sm md:text-base text-center">
              Online games for children with blindness
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-3 bg-[#EDEDED] rounded-lg justify-center items-center">
            <Image
              src="/whisper/comp3.png"
              width={148}
              height={104}
              alt="whisper"
            />
            <p className="text-sm md:text-base font-bold text-center">
              Tactile Playing Cards (indirect competitor)
            </p>
            <p className="text-sm md:text-base text-center">
              Card games with unique tactile patterns/textures
            </p>
          </div>
        </div>
        <p className="text-lg md:text-xl font-semibold">USER SURVEY</p>
        <p className="text-sm md:text-base">
          We collected 16 survey responses from visually impaired individuals.
          The most common type of impairments from our sample were complete
          blindness and retinitis pigmentosa. There were our 4 key insights:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-[80%] self-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/whisper/survey1.svg"
              width={80}
              height={80}
              alt="whisper"
            />
            <p className="text-sm md:text-base font-bold">
              Cards represented only by color are more difficult to play with
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/whisper/survey2.svg"
              width={80}
              height={80}
              alt="whisper"
            />
            <p className="text-sm md:text-base font-bold">
              Playing cards are generally very small and difficult to handle
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/whisper/survey3.svg"
              width={80}
              height={80}
              alt="whisper"
            />
            <p className="text-sm md:text-base font-bold">
              Playing cards are usually played in social settings
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="/whisper/survey4.svg"
              width={80}
              height={80}
              alt="whisper"
            />
            <p className="text-sm md:text-base font-bold">
              Asking friends to read cards undermines independence
            </p>
          </div>
        </div>
        <p className="text-lg md:text-xl font-semibold">SECONDARY RESEARCH</p>
        <div className="flex flex-col md:flex-row gap-8">
          <p className="text-sm md:text-base w-full md:w-3/4">
            We found Kay from the YouTube channel &ldquo;From Kay to Zee&rdquo;,
            where she explained her personal experience with playing board games
            as visually impaired. Next was Angela from the YouTube channel
            &ldquo;Visually Impaired Designer&rdquo; who listed several game
            ideas for playing with the visually impaired such as her. Lastly,
            Reddit there was a good breakdown on the forum r/boardgames that
            listed things to know when playing board games with the visually
            impaired.
          </p>
          <div className="w-full md:w-1/4">
            <Image
              src="/whisper/research.png"
              width={1000}
              height={514}
              style={{ height: "auto", width: "100%" }}
              alt="whisper"
            />
          </div>
        </div>
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">KEY INSIGHTS!</h1>
        <p className="text-sm md:text-base">
          Through affinity diagrams, we clustered our research into 4 main pain
          points.
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-xl md:text-2xl font-semibold text-[#95C586]">
              1.
            </p>
            <p className="text-base md:text-xl">
              Lack of independence: The need for friends to read their cards out
              loud often compromises their independence.
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-xl md:text-2xl font-semibold text-[#95C586]">
              2.
            </p>
            <p className="text-base md:text-xl">
              Minimizing downtime is key: Maintaining constant engagement during
              games is important to overall enjoyment.
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-xl md:text-2xl font-semibold text-[#95C586]">
              3.
            </p>
            <p className="text-base md:text-xl">
              Hidden information: Hidden information in card games is difficult
              to convey and challenging to play.
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <p className="text-xl md:text-2xl font-semibold text-[#95C586]">
              4.
            </p>
            <p className="text-base md:text-xl">
              Managing multiple cards: Even with assistive technology, managing
              multiple cards with various words is difficult.
            </p>
          </div>
        </div>
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">
          VALUE OPPORTUNITY ANALYSIS
        </h1>
        <div className="flex flex-col md:flex-row gap-8 md:gap-[41px] justify-between">
          <div className="flex flex-col gap-8 w-full md:w-3/5">
            <p className="text-sm md:text-base">
              A Value Opportunity Analysis was conducted to compare our HMW
              statement to a competitor based on 7 value opportunity attributes:
              emotion, ergonomics, aesthetics, identity, impact, core
              technologies, and quality.
              <br />
              <br />
              We chose to compare our future product to the competitor 64 Ounce
              Games since it was our direct competitor. We first decided what
              our product MUST achieve to maximize the important value
              propositions.
              <br />
              <br />
              <strong>
                We chose to maximize the social impact, enabling technologies,
                tactile features, and a strong sense of security and
                independence.
              </strong>
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                <div className="bg-[#95C586] w-[20px] h-[20px]" />
                <p className="text-sm md:text-[15px]">Our Product</p>
              </div>
              <div className="flex flex-row items-center gap-2">
                <div className="bg-[#000] w-[20px] h-[20px]" />
                <p className="text-sm md:text-[15px]">64 Ounce Games</p>
              </div>
            </div>
          </div>
          <div className="self-center p-4 bg-[#FFF] shadow-[3.041px_3.041px_7.603px_0px_rgba(0,0,0,0.25)] w-full md:w-2/5 max-w-[350px]">
            <ExpandableImage
              src="/whisper/vo.png"
              width={1100}
              height={1940}
              alt="whisper"
            />
          </div>
        </div>
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">
          LET&apos;S BRAINSTORM...
        </h1>
        <p className="text-sm md:text-base">
          Since we want to maximise social impact and a strong sense of
          independence, it was crucial to ideate on as many solutions as
          possible. We thought of 48 ideas and narrowed down to 10 concepts. To
          further narrow our options we mapped them out on a 2x2 matrix focusing
          on reliant tech and sensory elements.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-end">
          <div className="flex flex-col md:flex-row gap-8 items-end">
            <div className="flex-1">
              <Image
                src="/whisper/brainstorm1.png"
                width={335 * 4}
                height={265 * 4}
                style={{ height: "auto", width: "100%" }}
                alt="whisper"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/whisper/brainstorm2.png"
                width={362.703 * 4}
                height={265.331 * 4}
                style={{ height: "auto", width: "100%" }}
                alt="whisper"
              />
            </div>
          </div>
          <p className="text-sm md:text-base">
            After a weighted matrix analysis,{" "}
            <strong>a smart card reader was the winner!</strong>
          </p>
        </div>
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">USER TESTING</h1>
        <p className="text-lg md:text-xl font-semibold">PROTOTYPE 1</p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <p className="text-sm md:text-base">
                The initial prototype tested the simple features:
              </p>
              <ol className="list-decimal list-inside pl-2">
                <li className="text-sm md:text-base">
                  two arrows to navigate through a list
                </li>
                <li className="text-sm md:text-base">
                  side button to simulate audio output changing
                </li>
              </ol>
              <p className="text-sm md:text-base">
                Visual impairment was simulated with a &ldquo;Wizard of
                Oz&rdquo; approach and a script. Card scanning and navigation
                was simulated by a team member.
              </p>
            </div>
            <p className="text-sm md:text-base">
              Our goals for the first user test were to measure a sense of
              independence via a survey, understand the cost benefit of freedom
              vs rigidity, especially determining the amount of user
              interactions, and the level of enjoyment.
            </p>
            <p className="text-sm md:text-base">
              Results
              <br />5 mistakes and 9 slip-ups were made in understanding where
              cards were. The main feedback from the survey was that they needed
              more assistance and more interaction with the device.
            </p>
          </div>
          <div className="w-full md:w-1/4">
            <Image
              src="/whisper/prototype1.png"
              width={177}
              height={339}
              style={{ height: "auto", width: "100%" }}
              alt="whisper"
            />
          </div>
        </div>
        <p className="text-lg md:text-xl font-semibold">PROTOTYPE 2</p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col">
              <p className="text-sm md:text-base">
                An updated prototype was created out of cardboard and duct tape
                with additional arrow buttons for more interaction.
                &ldquo;Wizard of Oz&rdquo; testing was done with the same
                subject as before. New features include:
              </p>
              <ol className="list-decimal list-inside pl-2">
                <li className="text-sm md:text-base">
                  navigating the saved cards in <strong>two dimensions</strong>
                </li>
                <li className="text-sm md:text-base">
                  ability to <strong>mark/unmark</strong> and{" "}
                  <strong>re-read cards</strong>
                </li>
              </ol>
            </div>
            <p className="text-sm md:text-base">
              Results
              <br />2 mistakes and 7 slip-ups. Simulated working screens and a
              3D printed prototype were created to improve the flow.
            </p>
          </div>
          <div className="w-full md:w-2/5">
            <Image
              src="/whisper/prototype2.gif"
              width={177}
              height={339}
              style={{ height: "auto", width: "100%" }}
              alt="whisper"
            />
          </div>
        </div>
        <p className="text-lg md:text-xl font-semibold">FINAL PROTOTYPE</p>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-8">
            <p className="text-sm md:text-base">
              For the final iteration, only 1 mistake and 3 slip-ups were made.
              The slips still showed that there was a break in flow in the game,
              most likely due to the &ldquo;Wizard of Oz&rdquo; experiment
              conductor for simulating the button pushes.
            </p>
            <p className="text-sm md:text-base">
              Results
              <br />
              There was a 3 minute reduction in downtime, from 5 minutes to 2
              minutes. Our end prototype was able to meet the main goals of our
              VOA, primarily creating a sense of independence, but also ease of
              use and sense of place.
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <Image
              src="/whisper/prototype3.png"
              width={177}
              height={339}
              style={{ height: "auto", width: "100%" }}
              alt="whisper"
            />
          </div>
        </div>
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">REFLECTIONS</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <p className="flex-1 text-sm md:text-base">
            This was my first physical design project ever, and I enjoyed the
            whole process. I personally focused more on the research and
            synthesis portion of the project since I already had experience in
            those phases. I wish I had contributed more to the prototyping
            section and learned how to 3D model/print the actual prototype.
            However, I&apos;m grateful for my team for all the work we put into
            this project!
            <br />
            <br />
            Looking back, I would have wanted to gather more primary research to
            avoid making the assumptions we did about what our user may want.
            The next development of the prototype would be to test with new
            social playing card games, to understand how well the concept works
            with various popular board game options.
          </p>
          <div className="w-full md:w-1/4">
            <Image
              src="/whisper/reflection.jpeg"
              width={1440}
              height={1080}
              style={{ height: "auto", width: "100%" }}
              alt="whisper"
            />
          </div>
        </div>
      </div>
      <Footer className="mt-20 md:mt-[160px]" />
    </>
  );
}
