"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import WaitHow from "@/components/WaitHow";
import Line from "@/components/Line";
import Xarrow from "react-xarrows";
import ExpandableImage from "@/components/ExpandableImage";

export const metadata = {
  title: "SmartNotes | Heli Balsara",
  description:
    "An AI pen tool concept that aims to make reviewing for exams more time efficient for college students.",
};

export default function SmartNotes() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px]">
        <Image
          src="/smartnotes/hero.svg"
          width={1280}
          height={540.5}
          style={{ height: "auto", width: "100%" }}
          alt="smartnotes"
          priority
        />
      </div>
      <ProjectOverview
        role="UX Researcher & Product Designer"
        duration="January 30th- February 3rd, 2023"
        disciplines="Human-Centric Design, Concept Design"
        description={
          <>
            This was the design challenge portion of my application in Berkeley
            Innovation. We had <strong>5 days</strong> to solve a given HMW
            statement and this challenge was focused on a college student&apos;s
            learning experience. There are a myriad of ways we learn and engage
            with course content. However, many find the current learning process
            disengaging and unaccommodating to each individual student&apos;s
            needs.
            <br />
            How might we improve a college student&apos;s{" "}
            <strong>learning experience?</strong>
          </>
        }
      />
      <div className="py-8 md:py-16 px-4 md:px-36 bg-[#EDEDED]">
        <div className="flex flex-row justify-between gap-8">
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
              Final Designs
            </h1>
            <h4 className="text-lg md:text-xl italic mb-2 md:mb-4">
              Sneak Peak!! <span className="not-italic">🤫</span>
            </h4>
            <p className="text-base md:text-xl">
              SmartNotes is an <strong>AI pen tool concept</strong> that aims to
              make reviewing for exams more time efficient for college students.
            </p>
            <br />
            <p className="text-base md:text-xl" id="1">
              Microphone and speaker to record and relay synthesised lecture
              notes. These notes can be synthesized into a high level
              understanding all the way to a granular explanation, depending on
              what the user needs.
            </p>
            <br />
            <p className="text-base md:text-xl" id="2">
              Hand grip sensor that vibrates when students lose focus during
              class.
            </p>
            <br />
            <p className="text-base md:text-xl" id="3">
              Can be a traditional pen/pencil or a digital pen that can be used
              on devices.
            </p>
          </div>
          <div className="flex flex-row w-1/3 md:w-1/6">
            <div>
              <div
                id="pen-top"
                style={{
                  height: 0,
                  transform: "translateX(50%) translateY(100px)",
                }}
              />
              <Image
                src="/smartnotes/pen.svg"
                width={432}
                height={462}
                className="h-auto w-full relative"
                alt="project section"
                id="pen"
              />
              <div
                id="pen-middle"
                style={{
                  height: 0,
                  transform: "translateX(20%) translateY(-200px)",
                }}
              />
              <div
                id="pen-bottom"
                style={{
                  height: 0,
                  transform: "translateX(10%) translateY(-10px)",
                }}
              />
            </div>
            <div className="hidden md:visible">
              <Xarrow
                start="1"
                end="pen-top"
                color="#000"
                strokeWidth={1}
                headSize={6}
                curveness={0.5}
              />
              <Xarrow
                start="2"
                end="pen-middle"
                color="#000"
                strokeWidth={1}
                headSize={6}
                curveness={0.5}
              />
              <Xarrow
                start="3"
                end="pen-bottom"
                color="#000"
                strokeWidth={1}
                headSize={6}
                curveness={0.5}
              />
            </div>
          </div>
        </div>
      </div>
      <WaitHow />
      <div className="flex flex-col gap-4 md:gap-8 py-8 md:py-16 px-4 md:px-[182px]">
        <h1 className="text-2xl md:text-[32px] font-bold mb-2 md:mb-4">
          LET&apos;S DIVE DEEPER.
        </h1>
        <p className="text-sm md:text-base">
          It was important break down this broad HMW statement, so I
          brainstormed what were things I struggled with personally to hone in
          on a particular area. Staying focused and engaged in class throughout
          the semester were my struggle areas. I researched these topics and
          used the insights to create a user survey. I did some desktop research
          around these topics and gathered some insights to create a user
          survey.
        </p>
        <p className="text-lg md:text-xl font-semibold">USER SURVEY</p>
        <p className="text-sm md:text-base">
          I focused this survey on engagement with class material and their time
          spent into learning and understanding content. 66.7% students selected
          that they strongly/disagree with the statement that they engage with
          content inside the classroom. Most students engage with class content
          outside of class.
        </p>
        <Image
          src="/smartnotes/survey.svg"
          width={745.36}
          height={178.47}
          style={{ height: "auto", width: "100%" }}
          alt="survey"
        />
        <p className="text-lg md:text-xl font-semibold">USER INTERVIEWS</p>
        <p className="text-sm md:text-base">
          Why was there was such a large difference in engagement levels inside
          and outside of class? I conducted 4 30-minute interviews with
          students, one from each graduating class and found 3 main pain points.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-[] justify-around self-center">
          <div className="flex flex-1 flex-col gap-2 p-[10px] bg-[#BFD3DF] rounded-[15px]">
            <Image
              src="/smartnotes/expired.png"
              width={30 * 4}
              height={30 * 4}
              style={{ height: "30px", width: "30px" }}
              alt="interview"
            />
            <p className="text-base md:text-lg font-medium">
              Students complete course in an effort to meet deadlines and pass
              exams, <strong>not to retain the information fully.</strong>
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-[10px] bg-[#BFD3DF] rounded-[15px]">
            <Image
              src="/smartnotes/todo.png"
              width={30 * 4}
              height={30 * 4}
              style={{ height: "30px", width: "30px" }}
              alt="interview"
            />
            <p className="text-base md:text-lg font-medium">
              Inability to remain focused during class usually stems from
              completing <strong>other</strong> assignments/tasks.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-2 p-[10px] bg-[#BFD3DF] rounded-[15px]">
            <Image
              src="/smartnotes/puzzled.png"
              width={30 * 4}
              height={30 * 4}
              style={{ height: "30px", width: "30px" }}
              alt="interview"
            />
            <p className="text-base md:text-lg font-medium">
              Not understanding class material hinders students&apos;{" "}
              <strong>performance</strong> while studying for an exam.
            </p>
          </div>
        </div>
        <Line className="my-4 md:my-8" />
        <p className="text-lg md:text-xl font-semibold">
          PUTTING THINGS TOGETHER
        </p>
        <p className="text-sm md:text-base">
          To pull all of the research findings together, I created an affinity
          map to narrow down the focus for this project. I only had a few days,
          so it was essential to break down to project scope. I focused on these
          3 affinity clusters:
        </p>
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 self-center justify-center w-full">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-base font-bold">Focus</p>
              <p className="text-sm md:text-base">
                Lack of engagement and focus during class
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-base font-bold">
                Understanding Course Content
              </p>
              <p className="text-sm md:text-base">
                Difficulty absorbing and understanding content
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm md:text-base font-bold">Lack of Time</p>
              <p className="text-sm md:text-base">
                Not enough time to dedicate to learning content
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ExpandableImage
              src="/smartnotes/stickies.jpeg"
              width={3979}
              height={3723}
              style={{
                width: "100%",
                height: "300px",
                borderRadius: "13.762px",
                boxShadow: "0px 3.67px 3.67px 0px rgba(0, 0, 0, 0.25)",
                objectFit: "cover",
              }}
              alt="affinity"
            />
          </div>
        </div>
        <p className="text-base">
          By creating a persona and a journey map for an adventurous, but
          unfocused, college student, I was able to hone in on the problem
          scope. I wanted to focus on how to help students focus and get a
          better understanding of their content to alleviate last-minute
          pre-exam cramming.
        </p>
        <div className="flex flex-row gap-8 h-[24vw] self-center">
          <ExpandableImage
            src="/smartnotes/faith.png"
            width={1514}
            height={846}
            style={{
              height: "100%",
              width: "auto",
            }}
            alt="persona"
          />
          <ExpandableImage
            src="/smartnotes/graph.png"
            width={1360}
            height={1088}
            style={{
              height: "100%",
              width: "auto",
            }}
            alt="journey map"
          />
        </div>
        <Line className="my-8" />
        <h1 className="text-[32px] font-bold mb-4">REDEFINING THE HMW.</h1>
        <div className="flex flex-row justify-between">
          <div id="text" className="flex-1 md:flex-none h-fit pr-1">
            <p className="text-base">
              Before: HMW improve a college student&apos;s learning experience?
            </p>
          </div>
          <div
            className="flex-1 md:flex-none p-2 bg-[#BFD3DF] rounded-[10px] w-1/3"
            id="box"
          >
            <p className="text-base text-center">
              After: HMW improve a college student&apos;s focus in class to aid
              understanding course content?
            </p>
          </div>
          <div className="invisible sm:visible">
            <Xarrow
              start="text"
              end="box"
              color="#000"
              strokeWidth={1}
              headSize={6}
              curveness={0.5}
            />
          </div>
        </div>
        <div className="flex flex-row flex-1 gap-8 justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold text-[#28536B]">
              Why aid understanding?
            </p>
            <p className="text-lg">
              Struggling to comprehend course material often causes students to
              feel anxious about their exams. This lack of understanding leads
              to a <strong>decrease in focus</strong>, creating a{" "}
              <strong>detrimental cycle</strong> where the inability to
              concentrate further impedes their understanding of the content.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-bold text-[#28536B]">
              Why focus in classrooms?
            </p>
            <p className="text-lg">
              Many students struggle with maintaining concentration during
              lectures and preparing for exams. This often results in a sense of
              being pressed for time while understanding course content
              effectively. According to my survey, a significant{" "}
              <strong>66.7%</strong> of respondents said they{" "}
              <strong>disagreed to staying engaged during class.</strong>
            </p>
          </div>
        </div>
        <Line className="my-8" />
        <h1 className="text-[32px] font-bold mb-4">HOW SHALL WE SOLVE THIS?</h1>
        <p className="text-base">
          After a round of Crazy 8&apos;s, I mapped possible solutions that
          would boost focus within the classroom on an effort/impact matrix. The
          effort refers to the effort required to implement the solution in
          terms of resources of time, money, and technological feasibility. The
          impact is the ability of the product to meet all user needs outlined
          through research and synthesis.{" "}
        </p>
        <div className="flex flex-row gap-8 h-[24vw] self-center">
          <ExpandableImage
            src="/smartnotes/crazy8.png"
            width={1116}
            height={914}
            style={{ height: "100%", width: "auto" }}
            alt="crazy8"
          />
          <ExpandableImage
            src="/smartnotes/table.png"
            width={1400}
            height={818}
            style={{ height: "100%", width: "auto" }}
            alt="table"
          />
        </div>
        <p className="text-base">
          After mapping the pros and cons, I chose to go with SmartNotes!
        </p>
        <Line className="my-8" />
        <h1 className="text-[32px] font-bold mb-4">
          HOW DOES SMART NOTES WORK?
        </h1>
        <div className="flex flex-row gap-8">
          <p className="text-base">
            SmartNotes is an AI-powered pen concept designed to help college
            students review for exams more efficiently. It features a microphone
            and speaker to record lectures and relay synthesized notes. The tool
            can distill information into either a broad overview or a detailed
            explanation, tailored to the user&apos;s needs. Additionally, a hand
            grip sensor vibrates when it detects students losing focus in class.
            SmartNotes can function as both a traditional pen or pencil, as well
            as a digital pen compatible with devices.
          </p>
          <ExpandableImage
            src="/smartnotes/drawing.jpeg"
            width={3620}
            height={2480}
            style={{
              height: "auto",
              width: "35%",
              borderRadius: "15px",
              boxShadow: "0px 3px 3px 0px rgba(0, 0, 0, 0.25)",
            }}
            alt="drawing"
          />
        </div>
        <p className="text-xl font-semibold">
          HOW DOES IT ADDRESS USER PAIN POINTS?
        </p>

        <div className="flex gap-8 md:gap-0 flex-col self-center w-full md:max-w-[65%] items-center">
          <div className="flex flex-row gap-4 md:gap-[42px] justify-between items-center">
            <div className="flex flex-1 flex-col gap-2">
              <h4 className="text-xl md:text-2xl font-bold text-[#28536B]">
                Lack of focus during class time
              </h4>
              <p className="text-base md:text-xl">
                SmartNotes gently vibrates when it detects the user has lost
                focus,{" "}
                <strong>
                  shift their attention and focus back into the class.
                </strong>
              </p>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <Image
                src="/smartnotes/pain1.png"
                width={608}
                height={456}
                className="w-full h-auto"
                alt="pain1"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse md:flex-row gap-4 md:gap-[42px] justify-between items-center">
            <div className="flex-1 w-full flex justify-center">
              <Image
                src="/smartnotes/pain2.png"
                width={456}
                height={456}
                className="w-full h-auto"
                alt="pain2"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <h4 className="text-xl md:text-2xl font-bold text-[#28536B]">
                Difficulty understanding course content
              </h4>
              <p className="text-base md:text-xl">
                SmartNotes provides{" "}
                <strong>supplemental digestible summaries</strong> of the
                lecture which can be as <strong>broad or as detailed</strong> as
                needed. This can be personalised to the students&apos; needs.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-4 md:gap-[42px] justify-between items-center">
            <div className="flex flex-col gap-2 flex-1">
              <h4 className="text-xl md:text-2xl font-bold text-[#28536B]">
                Time pressure to understand content
              </h4>
              <p className="text-base md:text-xl">
                With the reminders and summaries, students can{" "}
                <strong>spend less time</strong> going back to rewatch lecture
                and refer back to readings.
              </p>
            </div>
            <div className="flex-1 w-full flex justify-center">
              <Image
                src="/smartnotes/pain3.png"
                width={456}
                height={456}
                className="w-full h-auto"
                alt="pain3"
              />
            </div>
          </div>
        </div>
        <Line className="my-8" />
        <h1 className="text-[32px] font-bold mb-4">
          CONCEPT TEST & REFLECTIONS
        </h1>
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
          <p className="text-base">
            Users enjoyed how it was a compact and usable everyday solution.
            They thought the summaries would be usefulness in supplementing
            lecture content. The varying levels of synthesis could help
            &ldquo;pinpoint what I need to hear while studying.&rdquo; One user
            expressed that they were a visual learner and hearing the summary
            would be difficult to understand, which is something I would explore
            further with this project.
            <br />
            <br />
            Having such a broad HMW statement was daunting at first, but I
            realized the importance of strong user research to narrow the scope.
            I wish I had established goals for my user research before diving
            deep into it and had spent more time developing a cleaner design.
          </p>
          <Image
            src="/smartnotes/reflections.svg"
            width={348 * 4}
            height={261 * 4}
            style={{ height: "auto", width: "100%" }}
            alt="reflection"
          />
        </div>
      </div>
      <Footer className="mt-[117.5px]" />
    </>
  );
}
