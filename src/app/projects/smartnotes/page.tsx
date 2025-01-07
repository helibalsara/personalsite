import Image from "next/image";
import Navbar from "@/components/Navbar";
import LittleSection from "@/components/LittleSection";
import Footer from "@/components/Footer";
import BigSection from "@/components/BigSection";

export default function SmartNotes() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px] px-36">
        <div className="flex flex-row w-full gap-16">
          <Image
            src="/smartnotes.png"
            width={536}
            height={339}
            style={{ height: "100%", width: "auto" }}
            alt="smartnotes"
            priority
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-normal text-xl max-w-[90%]">
              SmartNotes is an <strong>AI pen tool concept</strong> that aims to
              make <strong>reviewing for exams more time efficient</strong> for
              college students.
            </h3>
            <div className="flex flex-col gap-2">
              <h3>Role</h3>
              <p className="text-sm">UX Research & Product Designer</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Duration</h3>
              <p className="text-sm">January 30 - February 3, 2023</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Disciplines</h3>
              <p className="text-sm">Human-Centric Design, Concept Design</p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black mt-[100px] mb-12" />
        <div className="flex flex-col gap-5">
          <h1>The Problem</h1>
          <p>
            The college learning experience is a vast, end-to-end process both
            inside and outside the classroom. There&apos;s a myriad of ways we
            learn and engage with course content. However, many find the{" "}
            <strong>current learning process disengaging</strong> and{" "}
            <strong>unaccommodating</strong> to each individual student&apos;s needs.
          </p>
        </div>
        <div className="py-12">
          <p>Ultimately, our question is...</p>
          <p className="text-3xl">
            <strong>HMW</strong> improve a college student&apos;s learning
            experience?
          </p>
        </div>
      </div>
      <BigSection title="Research Methods" color="grey" topBorder>
        <div className="pl-12 h-full">
          <Image
            src="/smartnotes/smartnotesGraphic.svg"
            width={0}
            height={0}
            style={{ height: "auto", width: "100%" }}
            alt=""
          />
        </div>
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Survey">
            <div className="flex flex-col gap-9">
              <p>
                After conducting secondary research online and finding students
                were less engaged and motivated in class, I gathered
                quantitative research focused on the students at Berkeley
                through a survey.
              </p>
              <Image
                src="/smartnotes/smartnotesGraphic2.svg"
                width={0}
                height={0}
                style={{ height: "auto", width: "100%" }}
                alt=""
              />
            </div>
          </LittleSection>
          <LittleSection title="User Interviews">
            <div className="flex flex-col gap-9">
              <p>
                Why was there was such a large difference in engagement levels
                inside and outside of class? I conducted{" "}
                <strong>4 30-minute interviews</strong> with students, one from
                each graduating class and found{" "}
                <strong>3 main pain points</strong>.
              </p>
              <div className="flex flex-row gap-4 justify-center [&>*]:flex-1">
                <div className="flex flex-col gap-3 items-start bg-[#BFD3DF] rounded-[15px] p-3">
                  <Image
                    src="/smartnotes/checkboxesIcon.svg"
                    width={0}
                    height={0}
                    style={{ height: "30px", width: "auto" }}
                    alt="checkboxes"
                  />
                  <p>
                    Inability to remain focused during class usually stems from
                    completing other assignments/tasks.
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start bg-[#BFD3DF] rounded-[15px] p-3">
                  <Image
                    src="/smartnotes/puzzledIcon.svg"
                    width={0}
                    height={0}
                    style={{ height: "30px", width: "auto" }}
                    alt="checkboxes"
                  />
                  <p>
                    Inability to remain focused during class usually stems from
                    completing other assignments/tasks.
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start bg-[#BFD3DF] rounded-[15px] p-3">
                  <Image
                    src="/smartnotes/expiredIcon.svg"
                    width={0}
                    height={0}
                    style={{ height: "30px", width: "auto" }}
                    alt="expired"
                  />
                  <p>
                    Students are completing course work in an effort to meet
                    deadlines and pass exams, not to retain the information
                    fully.
                  </p>
                </div>
              </div>
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection title="Synthesis" color="white">
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Affinity Mapping">
            <div className="flex flex-col gap-12">
              <p>
                To pull all of the research findings together, I created an
                affinity map to narrow down the focus for this project. I only
                had a few days, so it was essential to break down to project
                scope. I focused on these 3 affinity clusters:
              </p>
              <div className="flex flex-row gap-8">
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-[#28536b] font-bold">Focus</p>
                    <p>Lack of engagement and focus during class</p>
                  </div>
                  <div>
                    <p className="text-[#28536b] font-bold">
                      Understanding Course Content
                    </p>
                    <p>Difficulty absorbing and understanding content</p>
                  </div>
                  <div>
                    <p className="text-[#28536b] font-bold">Lack of Time</p>
                    <p>Not enough time to dedicate to learning content</p>
                  </div>
                </div>
                <Image
                  src="/smartnotes/affinityMap.png"
                  width={515.606}
                  height={489}
                  alt="affinity map"
                />
              </div>
            </div>
          </LittleSection>
          <LittleSection title="Persona">
            <Image
              src="/smartnotes/persona.png"
              width={756}
              height={425.25}
              style={{ width: "100%", height: "auto" }}
              alt="persona map"
            />
          </LittleSection>
          <LittleSection title="User Journey">
            <Image
              src="/smartnotes/journey.png"
              width={756}
              height={603.056}
              style={{ width: "100%", height: "auto" }}
              alt="journey map"
            />
          </LittleSection>
          <div className="text-right w-full flex flex-row justify-end">
            <p className="max-w-[70%]">
              Creating a user persona and their journey map allowed me to hone
              in on the problem scope so that when I begin ideating, my
              solutions solve the main pain points at hand. At this point, I
              needed to <strong>add more context to my HMW</strong>.
            </p>
          </div>
        </div>
      </BigSection>
      <BigSection title="Redefining the HMW" color="white">
        <div className="pl-10">
          <div className="flex flex-row gap-9 mt-12">
            <p>HMW improve a college student&apos;s learning experience?</p>
            <Image
              src="/smartnotes/arrow.svg"
              width={0}
              height={0}
              style={{ height: "auto", width: "auto" }}
              alt="arrow"
            />
            <p>
              <strong>
                HMW improve a college student&apos;s focus in class to aid
                understanding course content?
              </strong>
            </p>
          </div>
          <div className="flex flex-row gap-[60px] mt-14">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="w-5 h-5 bg-[#28536b] rounded-full text-white text-xs font-bold flex justify-center items-center flex-shrink-0">
                  <h6>1</h6>
                </div>
                <p className="text-[#28536b] font-bold">Why focus in classrooms?</p>
              </div>
              <p>
                Many students struggle with maintaining concentration during
                lectures and preparing for exams. This often results in a sense
                of being pressed for time while understanding course content
                effectively. According to my survey, a significant{" "}
                <strong>66.7%</strong> of respondents said they{" "}
                <strong>disagreed to staying engaged during class</strong>.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="w-5 h-5 bg-[#28536b] rounded-full text-white text-xs font-bold flex justify-center items-center flex-shrink-0">
                  <h6>2</h6>
                </div>
                <p className="text-[#28536b] font-bold">Why aid understanding?</p>
              </div>
              <p>
                Students often find themselves struggling to grasp course
                material effectively, leading to a cycle of cramming and
                surface-level learning. This approach not only affects their
                academic performance but also their long-term retention of
                important concepts.
              </p>
            </div>
          </div>
        </div>
      </BigSection>
      <BigSection title="Ideation" color="white">
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Crazy 8's">
            <div className="flex flex-col gap-9">
              <p>
                With all of my research synthesised into actionable insights, it
                was time to start ideating. I used the crazy 8&apos;s method to
                generate as many ideas as possible in a short amount of time.
              </p>
              <Image
                src="/smartnotes/crazy8s.png"
                width={756}
                height={425.25}
                style={{ width: "100%", height: "auto" }}
                alt="crazy 8s"
              />
            </div>
          </LittleSection>
          <LittleSection title="Effort/ Impact Matrix">
            <div className="flex flex-col gap-9">
              <p>
                The effort refers to the effort required to implement the
                solution, and the impact refers to how much it would help solve
                the problem.
              </p>
              <Image
                src="/smartnotes/effort.png"
                width={756}
                height={425.25}
                style={{ width: "100%", height: "auto" }}
                alt="effort"
              />
              <div className="text-right w-full flex flex-row justify-end">
                <p className="max-w-[70%]">
                  The blue sticky notes are solutions I decided to flesh out
                  further by building a pros/cons analysis as they were on the
                  high impact side of the matrix.
                </p>
              </div>
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection
        title="Final Designs"
        color="white"
        noBorderBottom
      >
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="Initial Sketches & Mid-Fi">
            <div className="flex flex-row gap-16">
              <Image
                src="/smartnotes/lowfi.png"
                width={756}
                height={425.25}
                style={{ width: "100%", height: "auto" }}
                alt="lowfi"
              />
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <BigSection color="grey" extendLineTop>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">
            How does it address user pain points?
          </h2>
          <div className="flex flex-row gap-16">
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="w-5 h-5 bg-[#28536b] rounded-full text-white text-xs font-bold flex justify-center items-center flex-shrink-0">
                  <h6>1</h6>
                </div>
                <p className="text-[#28536b] font-bold">
                  Lack of focus during class time
                </p>
              </div>
              <p>
                SmartNotes gently vibrates when it detects the user has lost
                focus. This helps students{" "}
                <strong>stay engaged during class</strong> and{" "}
                <strong>minimise distractions</strong>.
              </p>
              <Image
                src="/smartnotes/voiceSearch.svg"
                width={0}
                height={0}
                style={{ height: "auto", width: "auto" }}
                alt="voiceSearch"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="w-5 h-5 bg-[#28536b] rounded-full text-white text-xs font-bold flex justify-center items-center flex-shrink-0">
                  <h6>2</h6>
                </div>
                <p className="text-[#28536b] font-bold">
                  Difficulty understanding course content
                </p>
              </div>
              <p>
                SmartNotes provides{" "}
                <strong>supplemental digestible summaries</strong> of the
                lecture which can be as{" "}
                <strong>broad or as detailed as needed</strong>. This can be
                personalised to the students&apos; needs.
              </p>
              <Image
                src="/smartnotes/studyTogether.svg"
                width={0}
                height={0}
                style={{ height: "auto", width: "auto" }}
                alt="studyTogether"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <div className="w-5 h-5 bg-[#28536b] rounded-full text-white text-xs font-bold flex justify-center items-center flex-shrink-0">
                  <h6>3</h6>
                </div>
                <p className="text-[#28536b] font-bold">
                  Time pressure to understand content
                </p>
              </div>
              <p>
                With the reminders and summaries, students can{" "}
                <strong>spend less time</strong> going back to rewatch
                lecture and refer back to readings.
              </p>
              <Image
                src="/smartnotes/savingTime.svg"
                width={0}
                height={0}
                style={{ height: "auto", width: "auto" }}
                alt="savingTime"
              />
            </div>
          </div>
        </div>
      </BigSection>
      <BigSection color="white" title="Reflection">
        <div className="flex flex-col pt-[108px] gap-[52px]">
          <LittleSection title="User Feedback">
            <p>
              I conducted a quick feedback session with 2 students to get their
              thoughts on the concept. They were excited about the idea of
              having a tool that would help them stay focused in class and
              understand the content better. However, they were concerned about
              the cost of the pen and whether it would be worth the investment.
              This is something I would like to explore further with this
              project.
            </p>
            <div className="flex flex-col gap-9">
              <p>
                Having such a broad HMW statement was daunting at first, but I
                found that by focusing on the pain points that emerged from my
                research, I was able to narrow down the scope and create a
                solution that addressed the most pressing needs of students.
              </p>
              <p>
                If I had more time, I would have liked to explore more features
                and conduct more user testing to validate my assumptions. I
                would also have liked to explore the business viability of this
                concept and how it could be implemented in a way that would be
                accessible to students.
              </p>
            </div>
          </LittleSection>
        </div>
      </BigSection>
      <Footer />
    </>
  );
}
