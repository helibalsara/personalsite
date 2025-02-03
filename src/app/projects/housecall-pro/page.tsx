import Line from "@/components/Line";
import Navbar from "@/components/Navbar";
import ProjectOverview from "@/components/ProjectOverview";
import WaitHow from "@/components/WaitHow";
import Image from "next/image";
import EnhancementSection from "@/components/EnhancementSection";
import Footer from "@/components/Footer";
import FinalDesignsSection from "@/components/FinalDesignsSection";

export default function HousecallPro() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px] md:pt-[153px]">
        <Image
          src="/housecall-pro/hero.svg"
          width={1280}
          height={540.5}
          style={{ height: "auto", width: "100%" }}
          alt="housecall-pro"
          priority
        />
      </div>
      <ProjectOverview
        role="Product Design Intern"
        duration="June 2024 - August 2024"
        disciplines="Product Strategy, Design Systems"
        description={
          <>
            In the summer of 2024, I interned at Housecall Pro, a B2B SaaS
            company that provides software solutions for small and medium-sized
            home service businesses. I designed an end-to-end product that
            seamlessly integrated e-signature collection and storage within the
            estimates feature, enhancing credibility by ensuring compliance with
            the E-Sign Act and implementing legally binding elements.
            <br />
            <br />
            Additionally, I built design components for a smooth integration of
            e-signatures into other areas of the software.
          </>
        }
      />
      <FinalDesignsSection
        backgroundColor="#EDEDED"
        items={[
          {
            title: "1/ E-SIGNATURE COMPONENT",
            description:
              "There is currently no method of collecting signatures when approving estimates for the Pro and homeowner. I created a 3-state modal for collecting legally-binding signatures compliant with the E-Signature Act.",
            imageSrc: "/housecall-pro/esig1.gif",
          },
          {
            title: "2/ LOCKED ESTIMATES VIEW",
            description: (
              <>
                The current interests selections are already comprehensive,
                however, they are <strong>difficult to navigate</strong> and
                visualize selected options. To help users save some time, we
                included{" "}
                <strong>
                  pop-up tags, automatic dropdown, and visible scroll bar
                </strong>
                for the selected interests box.
              </>
            ),
            imageSrc: "/housecall-pro/esig2.gif",
          },
        ]}
      />
      <WaitHow />
      <div className="flex flex-col md:flex-row gap-8 items-center p-4 md:p-16 bg-[#DEF0FF]">
        <div className="flex-1 flex-col gap-4">
          <p className="text-sm md:text-base">
            Housecall Pro is a software company aimed towards{" "}
            <strong>small home service business owners (Pros).</strong>
            <br />
            <br />
            They help facilitate scheduling, payments, and business growth for
            HVAC, electricians, plumbers, etc.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src="/housecall-pro/pros.svg"
            width={1280}
            height={540.5}
            style={{ height: "auto", width: "100%" }}
            alt="pros"
          />
        </div>
      </div>
      <div className="flex flex-col py-8 px-4 md:px-[182px] gap-8">
        <h1 className="text-2xl md:text-[32px] font-bold">
          CONTEXT: WHAT ARE ESTIMATES?
        </h1>
        <div className="flex flex-col items-center gap-4 bg-[#EDEDED] py-4 md:py-8 px-4 md:px-11">
          <p className="text-center text-sm md:text-base px-2 md:px-8">
            Estimates are detailed, customizable cost proposals that enable home
            services businesses (Pros) to provide accurate pricing, enhance
            professionalism, and increase the likelihood of securing jobs.
            Here&apos;s the <strong>homebase</strong> view which is what{" "}
            <strong>homeowners</strong> see via email{" "}
            <strong>once an estimate has been sent.</strong>
          </p>
          <Image
            src="/housecall-pro/estimates.svg"
            width={915 * 4}
            height={609 * 4}
            style={{ height: "auto", width: "100%", maxWidth: "915px" }}
            alt="estimates"
          />
        </div>
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">
          DISSECTING THE FLOW
        </h1>
        <p className="text-sm md:text-base">
          Since this a brand new feature on web, where should we place it in the
          flow?
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          <Image
            src="/housecall-pro/flow.png"
            width={379 * 4}
            height={323 * 4}
            className="w-full md:w-2/5 h-auto rounded-lg"
            alt="flow"
          />
          <p className="flex-1 text-sm md:text-base">
            To keep the MVP simple to roll out quickly, we chose to focus only
            one collecting a homeowner signature. This meant there was only one
            place this new feature could be — the <strong>homebase view</strong>{" "}
            where homeowners receive the estimate to approve the services.
          </p>
        </div>
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">
          DESIGN THE COMPONENT
        </h1>
        <p className="text-sm md:text-base">
          So we know our designs need to be legally binding and that we must
          collect homeowner&apos;s signatures through the homebase. How will it
          look like? Let&apos;s look at other e-signature components elsewhere.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="w-full md:w-auto">
            <Image
              src="/housecall-pro/design1.png"
              width={577 * 4}
              height={354 * 4}
              alt="design1"
              className="object-contain w-full"
            />
          </div>
          <div className="w-full md:w-auto">
            <Image
              src="/housecall-pro/design2.png"
              width={303 * 4}
              height={354 * 4}
              alt="design2"
              className="object-contain w-full"
            />
          </div>
        </div>
        <p className="text-sm md:text-base">
          I analyzed what most of these had in common, as those features clearly
          worked. It was important to have a type and draw function, as well as
          important legal copy to ensure intent and consent.
          <br />
          <br />
          After several iterations and check-ins with our design system team, we
          had our final components!
        </p>
        <Image
          src="/housecall-pro/design.svg"
          width={954 * 2}
          height={2014 * 2}
          style={{ height: "auto", width: "100%" }}
          alt="design3"
          className="object-contain"
        />
        <h1 className="text-2xl md:text-[32px] font-bold">
          ❗️SCOPE EXPANSION❗️
        </h1>
        <p className="text-sm md:text-base">
          Another issue HCP was facing was that Pros would edit the estimate
          after it had already been approved by the homeowner, effectively
          changing the price and agreed upon services. However, the estimate
          would still show as &ldquo;Approved.&rdquo; This was a major issue,
          especially as we were focusing on the legality of the estimate.
        </p>
        <p className="text-sm md:text-base">
          <strong>
            We needed to inform Pros that if they changed the estimate, it would
            void the signature and require a new one.
          </strong>{" "}
          But where would this live? I mapped out the flow and noted different
          opportunities to implement this.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
          <div className="flex-1 w-full">
            <Image
              src="/housecall-pro/scope.png"
              width={441 * 2}
              height={304 * 2}
              style={{ height: "auto", width: "100%" }}
              alt="scope"
            />
          </div>
          <div className="flex-1">
            <p className="text-sm md:text-base">
              We went with opportunity 7 — a new locked estimates view!
            </p>
          </div>
        </div>
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">
          PRO-FACING EDITING ESTIMATE
        </h1>
        <p className="text-sm md:text-base">
          Let&apos;s say a Pro wanted to go back and edit an estimate. They
          would first have to unlock the sent estimate, be made aware that once
          changes were made a new signature would be required, then sent to the
          Pro-facing estimate view.
        </p>
        <Image
          src="/housecall-pro/estimate.svg"
          width={916 * 2}
          height={560 * 2}
          style={{ height: "auto", width: "100%" }}
          alt="estimate"
        />
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">
          HOW THESE NEW FLOWS BRINGS VALUE: FINAL DESIGNS
        </h1>
        <EnhancementSection
          title="E-SIGNATURE MODAL"
          titleColor="#0F6FBE"
          gradient={{ from: "#0F6FBE", to: "#DEF0FF" }}
          currentImage={{
            src: "/housecall-pro/esig1.png",
            width: "100%",
          }}
          currentText="No method of collecting a legal signature from the Homeowners."
          redesignImage={{
            src: "/housecall-pro/esig2.png",
            width: "100%",
          }}
          redesignText="Complete modal integrated within Homeowner flow that collects a signature, informs them of the terms and conditions, and helps them confirm their agreement to do business."
          finalImage={{
            src: "/housecall-pro/esig3.gif",
            width: "100%",
          }}
          finalText={{
            title: "Credibility",
            description:
              "Adding a legally binding signature assures both homeowner and Pros on the scope of the work and establishes trust!",
          }}
        />
        <EnhancementSection
          title="LOCKED ESTIMATES VIEW"
          titleColor="#0F6FBE"
          gradient={{ from: "#0F6FBE", to: "#DEF0FF" }}
          currentImage={{
            src: "/housecall-pro/estimate1.png",
            width: "100%",
          }}
          currentText="Estimates could be edited at anytime by the Pro with no warning or notification to the Homeowner."
          redesignImage={{
            src: "/housecall-pro/estimate2.png",
            width: "100%",
          }}
          redesignText="Editing line items is locked and informs the Pro that a new signature will be needed once any changes are made."
          finalImage={{
            src: "/housecall-pro/estimate3.gif",
            width: "100%",
          }}
          finalText={{
            title: "Security",
            description:
              "A locked view keeps Pros accountabile for any changes and assures the homeowner they are getting exactly what they approved.",
          }}
        />
        <Line className="my-4 md:my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">REFLECTIONS</h1>
        <p className="text-sm md:text-base">
          I&apos;d like to extend a huge thank you to my manager Stumpy and the
          Design Systems team from Housecall Pro for guiding and supporting me
          through this complex software teaching me how to work with different
          components and states! Another shout out to Kellie for letting me sit
          in on her usability testing sessions and analysing the research on a
          completely different area of the product! I learned so much about how
          to properly use design systems, work with project managers, and really
          defining and polishing an MVP through this internship!
        </p>
      </div>
      <Footer className="mt-20 md:mt-[160px]" />
    </>
  );
}
