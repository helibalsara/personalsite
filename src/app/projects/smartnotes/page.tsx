"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WIP from "@/components/WIP";
import ProjectOverview from "@/components/ProjectOverview";
import WaitHow from "@/components/WaitHow";
import Line from "@/components/Line";
import Xarrow from "react-xarrows";

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
      <div className="py-16 px-36 bg-[#EDEDED]">
        <div className="flex flex-row justify-between">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">Final Designs</h1>
            <h4 className="text-xl italic mb-4">
              Sneak Peak!! <span className="not-italic">🤫</span>
            </h4>
            <p className="text-xl">
              SmartNotes is an <strong>AI pen tool concept</strong> that aims to
              make reviewing for exams more time efficient for college students.
            </p>
            <br />
            <p className="text-xl" id="1">
              Microphone and speaker to record and relay synthesised lecture
              notes. These notes can be synthesized into a high level
              understanding all the way to a granular explanation, depending on
              what the user needs.
            </p>
            <br />
            <p className="text-xl" id="2">
              Hand grip sensor that vibrates when students lose focus during
              class.
            </p>
            <br />
            <p className="text-xl" id="3">
              Can be a traditional pen/pencil or a digital pen that can be used
              on devices.
            </p>
          </div>
          <div className="w-1/6">
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
                style={{ height: "auto", width: "100%", position: "relative" }}
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
      <WaitHow />
      <div className="flex flex-col gap-8 py-16 px-[182px]">
        <h1 className="text-[32px] font-bold mb-4">LET&apos;S DIVE DEEPER.</h1>
        <p className="text-base">
          It was important break down this broad HMW statement, so I
          brainstormed what were things I struggled with personally to hone in
          on a particular area. Staying focused and engaged in class throughout
          the semester were my struggle areas. I researched these topics and
          used the insights to create a user survey. I did some desktop research
          around these topics and gathered some insights to create a user
          survey.
        </p>
        <p className="text-xl font-semibold">USER SURVEY</p>
        <p className="text-base">
          I focused this survey on engagement with class material and their time
          spent into learning and understanding content. 66.7% students selected
          that they strongly/disagree with the statement that they engage with
          content inside the classroom. Most students engage with class content
          outside of class
        </p>
        <Image
          src="/smartnotes/survey.svg"
          width={745.36}
          height={178.47}
          style={{ height: "auto", width: "100%" }}
          alt="survey"
        />
        <p className="text-xl font-semibold">USER INTERVIEWS</p>
        <p className="text-base">
          Why was there was such a large difference in engagement levels inside
          and outside of class? I conducted 4 30-minute interviews with
          students, one from each graduating class and found 3 main pain points.
        </p>
        <div className="flex flex-row gap-8 max-w-[] justify-around self-center">
          <div className="flex flex-1 flex-col gap-2 p-[10px] bg-[#BFD3DF] rounded-[15px]">
            <Image
              src="/smartnotes/expired.png"
              width={30 * 4}
              height={30 * 4}
              style={{ height: "30px", width: "30px" }}
              alt="interview"
            />
            <p className="text-lg font-medium">
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
            <p className="text-lg font-medium">
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
            <p className="text-lg font-medium">
              Not understanding class material hinders students&apos;{" "}
              <strong>performance</strong> while studying for an exam.
            </p>
          </div>
        </div>
        <Line className="my-8" />
      </div>
      <WIP />
      <Footer />
    </>
  );
}
