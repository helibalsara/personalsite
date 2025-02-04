import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import WIP from "@/components/WIP";
import ProjectOverview from "@/components/ProjectOverview";
import FinalDesignsSection from "@/components/FinalDesignsSection";

export default function InternConnect() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px]">
        <Image
          src="/internconnect/hero.svg"
          width={1280}
          height={540.5}
          style={{ height: "auto", width: "100%" }}
          alt="internconnect"
          priority
        />
      </div>
      <ProjectOverview
        role="UI Designer"
        duration="June 2023 - August 2023"
        disciplines="UI, Branding"
        team="Sekar Setyanto, Yuka Natsuki, Te-Jung Chen, Anyan Xien, and me!"
        description={
          <>
            InternConnect is an online community platform designed to help
            computer science students navigate the challenging process of
            securing internships.
            <br />
            <br />
            As part of our CS 160 project, we were tasked with identifying a
            community and addressing a common struggle. We chose to create a
            <strong>centralized, forum-styled platform</strong> that{" "}
            <strong>simplifies internship preparation</strong> by connecting
            students with opportunities, mentors, and resources — empowering
            them to confidently launch their careers in tech.
          </>
        }
      />
      <FinalDesignsSection
        backgroundColor="#353434"
        textColor="white"
        items={[
          {
            title: "1/ COMMUNITIES",
            description:
              "Communities is designed to facilitate meaningful networking through dedicated forums for Project Collaboration, Career Experience, Mentorship, and Peer Interviews. Users can easily engage in focused discussions and find the support they need with options to like, comment, or manage posts. Users can share content and customize their feed view to stay updated on the latest or most popular discussions.",
            imageSrc: "/internconnect/final1.gif",
          },
          {
            title: "2/ RESUME BUILDER",
            description:
              "The Resume Builder guides users in creating a polished, customizable resume with sections like Profile, Education, Experiences, Projects, Languages, and Tools. Users can easily add or remove entries, navigate smoothly through sections, and download a professionally formatted PDF. This tool streamlines the resume creation process, helping users enhance their chances of securing internships.",
            imageSrc: "/internconnect/final2.gif",
          },
          {
            title: "3/ RESOURCES",
            description:
              "The Resources section offers curated tools and information in three categories: Data Structures and Algorithms, Internship Search, and Sample Resumes. Users can easily access platforms like LeetCode and TopCoder, browse categorized coding resources, find sample resumes for various CS careers, and explore organized internship opportunities with direct application links. This feature simplifies the search process, making valuable resources more accessible and less overwhelming for students.",
            imageSrc: "/internconnect/final3.gif",
          },
          {
            title: "4/ USER PROFILE & DARK MODE",
            description:
              "The log-out process is straightforward: users can click on their profile picture in the top-right corner, revealing a drop-down overlay with their details and a 'Log Out' button. Inspired by major platforms, this familiar design ensures a smooth experience. Additionally, users can toggle between light and dark views for personalized browsing.",
            imageSrc: "/internconnect/final4.gif",
          },
        ]}
      />
      <div className="flex flex-col gap-8 px-4 md:px-[182px] py-[72px]">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-8 flex-1">
            <h1 className="text-2xl md:text-[40px] font-bold">
              Accessibility Audits
            </h1>
            <p className="text-sm md:text-base">
              We audited our site&apos;s main pages using Google Chrome&apos;s
              Lighthouse tool. Notably, our <strong>landing page</strong>{" "}
              achieved a perfect score of 100/100 for accessibility.
            </p>
            <Image
              src="/internconnect/accessibility.png"
              width={4096}
              height={2662}
              style={{ height: "auto", width: "100%" }}
              alt="accessibility"
            />
          </div>
          <div className="flex flex-col gap-[52px] flex-1">
            <div className="flex flex-row gap-4 items-start overflow-x-auto pb-2">
              <div className="flex flex-col items-center flex-shrink-0">
                <Image
                  src="/internconnect/number1.png"
                  width={127 * 2}
                  height={108 * 2}
                  className="w-[100px] md:w-[127px] h-auto"
                  alt="100"
                />
                <p className="text-lg md:text-xl font-bold font-sfpro text-center">
                  Accessibility
                </p>
                <p className="text-xs md:text-sm text-center">
                  &ldquo;Project Collaboration&rdquo; Page
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <Image
                  src="/internconnect/number2.png"
                  width={127 * 2}
                  height={108 * 2}
                  className="w-[100px] md:w-[127px] h-auto"
                  alt="92"
                />
                <p className="text-lg md:text-xl font-bold font-sfpro text-center">
                  Accessibility
                </p>
                <p className="text-xs md:text-sm text-center">
                  &ldquo;Resume Builder&rdquo; Page
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <Image
                  src="/internconnect/number2.png"
                  width={127 * 2}
                  height={108 * 2}
                  className="w-[100px] md:w-[127px] h-auto"
                  alt="92"
                />
                <p className="text-lg md:text-xl font-bold font-sfpro text-center">
                  Accessibility
                </p>
                <p className="text-xs md:text-sm text-center">
                  &ldquo;Resources&rdquo; Page
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base">
              We conducted audits on our Communities, Resume Builder, and
              Resources pages which initially received scores of 84, 61, and 77
              respectively. We then integrated alt text and utilized
              "aria-labels" to provide accessible names for buttons and links.
              We also changed some low contrast color selections. Subsequent
              evaluations showcased improved scores, with the Project
              Collaboration, Resume Builder, and Resources tabs registering{" "}
              <strong>100</strong>, <strong>92</strong>, and <strong>92</strong>{" "}
              respectively.
            </p>
          </div>
        </div>
      </div>
      <Image
        src="/internconnect/screens.svg"
        width={1286}
        height={1525}
        style={{ height: "auto", width: "100%" }}
        alt="screens"
      />
      <div className="flex flex-col gap-8 pt-8 md:pt-[72px] pb-8 md:pb-[76px] px-4 md:px-[182px]">
        <h1 className="text-2xl md:text-[40px] font-bold">
          Next Steps & Reflection
        </h1>
        <p className="text-lg md:text-xl">
          Owing to time limitations, we couldn&apos;t fully realize the
          product&apos;s potential. There remain promising ideas that can be
          explored in future iterations.
        </p>
        <div className="flex flex-col gap-6">
          {[
            "Include more variety of community forums and resources",
            "Add the ability to save resume in one click or an auto-save feature",
            "Add a profile page where users can see their recent posts and  customize their profile picture and information",
            "Add the ability for users to add, update, and customize their own resources",
            "Provide several resume format options",
          ].map((text, index) => (
            <div className="flex flex-row gap-2 items-center" key={index}>
              <Image
                src="/internconnect/star.svg"
                width={25}
                height={25}
                alt="star"
              />
              <p className="text-lg md:text-xl font-bold text-[#4E5F99]">
                {text}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xl">
          Our computer science internship community website was born from our
          own personal struggles and a solid understanding of the challenges
          that computer science students encounter in their journey. We
          identified the need for a platform that not only enhances technical
          learning but also nurtures a collaborative and inclusive community. I
          learned how to communicate designs to engineers and creating a design
          system to streamline the implementation process!
        </p>
      </div>
      <Footer className="mt-20 md:mt-[160px]" />
    </>
  );
}
