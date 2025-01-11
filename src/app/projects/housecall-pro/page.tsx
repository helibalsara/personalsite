import FinalDesign from "@/components/FinalDesign";
import Line from "@/components/Line";
import Navbar from "@/components/Navbar";
import ProjectOverview from "@/components/ProjectOverview";
import WaitHow from "@/components/WaitHow";
import WIP from "@/components/WIP";
import Image from "next/image";
import BindingElement from "@/components/BindingElement";

export default function HousecallPro() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px]">
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
        disciplines="June 2024 - August 2024"
        team="Sarah Suen (PM), Uyen Phan, Michid Bayambajav, Joanna Ye, Angie Nguyen, and me!"
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
      <div className="flex flex-col py-8 px-36 gap-16 bg-[#EDEDED]">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Final Designs</h1>
          <h2 className="text-xl italic">Sneak Peak!! 🤫</h2>
        </div>
        <FinalDesign
          title="1/ E-SIGNATURE COMPONENT"
          description="There is currently no method of collecting signatures when approving estimates for the Pro and homeowner. I created a 3-state modal for collecting legally-binding signatures compliant with the E-Signature Act."
          imageSrc="/housecall-pro/esig1.gif"
        />
        <FinalDesign
          title="2/ LOCKED ESTIMATES VIEW"
          description={
            <>
              The current interests selections are already comprehensive,
              however, they are difficult to navigate and visualize selected
              options. To help users save some time, we included pop-up tags,
              automatic dropdown, and visible scroll bar for the selected
              interests box.
            </>
          }
          imageSrc="/housecall-pro/esig2.gif"
        />
      </div>
      <WaitHow />
      <div className="flex flex-row gap-8 items-center p-16 bg-[#DEF0FF]">
        <div className="flex-1 flex-col gap-4">
          <p>
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
            priority
          />
        </div>
      </div>
      <div className="flex flex-col py-8 px-36 gap-8">
        <h1 className="text-[32px] font-bold">CONTEXT: WHAT ARE ESTIMATES?</h1>
        <div className="flex flex-col items-center gap-4 bg-[#EDEDED] py-8 px-11">
          <p className="text-center text-base px-8">
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
            priority
          />
        </div>
        <Line className="my-8" />
        <h1 className="text-[32px] font-bold">
          PROBLEM: WHY DO WE NEED A LEGAL SIGNATURE?
        </h1>
        <p className="text-base">
          Pros cannot collect homeowners signature and gain approval for work
          when sending an estimate remotely. This lack of clear, legally binding
          signatures on estimates and other critical documents means Pros have
          poorer evidence of the approval when facing legal disputes or having
          other types of misunderstandings with their customers.
        </p>
        <p className="text-base">How it impacts Pros:</p>
        <div className="flex flex-row gap-8 justify-center items-stretch">
          <div className="flex justify-center items-center p-3 bg-[#DEF0FF] rounded-lg max-w-[240px]">
            <p className="text-base text-center">
              Impaired ability to <strong>prove</strong> the agreed scope of
              work during legal disputes.
            </p>
          </div>
          <div className="flex justify-center items-center p-3 bg-[#DEF0FF] rounded-lg max-w-[240px]">
            <p className="text-base text-center">
              Lack of signed confirmation can result in customers{" "}
              <strong>backing out</strong> of services.
            </p>
          </div>
          <div className="flex justify-center items-center p-3 bg-[#DEF0FF] rounded-lg max-w-[240px]">
            <p className="text-base text-center">
              Lack of <strong>remote</strong> options <strong>delays</strong>{" "}
              service as customers print and sign estimates.
            </p>
          </div>
        </div>
        <p className="text-base">
          The mobile flow has a way to capture a signature already in person.
          However, we needed a complete <strong>remote</strong> method to
          approve, collect, and store homeowner signatures which can be pulled
          up for future reference.
        </p>
        <div className="flex flex-col bg-[#EDEDED] py-8 px-11 gap-4">
          <Image
            src="/housecall-pro/mobile1.svg"
            width={915 * 4}
            height={609 * 4}
            style={{ height: "auto", width: "100%" }}
            alt="mobile-flow"
            priority
          />
          <div className="grid grid-cols-4 gap-9 w-full">
            <Image
              src="/housecall-pro/mobile2.png"
              width={1170}
              height={2532}
              alt="mobile-flow"
              priority
            />
            <Image
              src="/housecall-pro/mobile3.png"
              width={1170}
              height={2532}
              alt="mobile-flow"
              priority
            />
            <Image
              src="/housecall-pro/mobile4.png"
              width={1170}
              height={2532}
              alt="mobile-flow"
              priority
            />
            <Image
              src="/housecall-pro/mobile5.png"
              width={1170}
              height={2532}
              alt="mobile-flow"
              priority
            />
          </div>
        </div>
        <p className="text-xl font-semibold">
          WAIT...WHAT MAKES A SIGNATURE LEGALLY BINDING?
        </p>
        <p className="text-base">
          A legally binding e-signature consists of 5 components and our design
          must address all 5:
        </p>
        <div className="grid grid-cols-2 gap-8 mx-auto">
          <BindingElement
            imageSrc="/housecall-pro/bind1.png"
            title="Intent"
            description="Ability to decline instead of sign"
          />
          <BindingElement
            imageSrc="/housecall-pro/bind2.png"
            title="Consent"
            description="Understand that this is a signature"
          />
          <BindingElement
            imageSrc="/housecall-pro/bind3.png"
            title="Associations"
            description="Save the signature to the agreement"
          />
          <BindingElement
            imageSrc="/housecall-pro/bind4.png"
            title="Attribution"
            description="Identify and prove who signed it"
          />
        </div>
        <div className="flex flex-row justify-center">
          <BindingElement
            imageSrc="/housecall-pro/bind5.png"
            title="Retention"
            description="Share and store the signed agreement"
          />
        </div>
        <Line className="my-8" />
        <h1 className="text-[32px] font-bold">DISSECTING THE FLOW</h1>
        <p className="text-base">
          Since this a brand new feature on web, where should we place it in the
          flow?
        </p>
        <div className="flex flex-row gap-8 items-center justify-between">
          <Image
            src="/housecall-pro/flow.png"
            width={379 * 4}
            height={323 * 4}
            style={{
              height: "100%",
              width: "auto",
              maxWidth: "40%",
              borderRadius: "10px",
            }}
            alt="flow"
            priority
          />
          <p className="flex-1 text-base">
            To keep the MVP simple to roll out quickly, we chose to focus only
            one collecting a homeowner signature. This meant there was only one
            place this new feature could be — the <strong>homebase view</strong>{" "}
            where homeowners receive the estimate to approve the services.
          </p>
        </div>
        <Line className="my-8" />
        <h1 className="text-[32px] font-bold">DESIGN THE COMPONENT</h1>
        <p className="text-base">
          So we know our designs need to be legally binding and that we must
          collect homeowner&apos;s signatures through the homebase. How will it
          look like? Let&apos;s look at other e-signature components elsewhere.
        </p>
        <div className="flex flex-row gap-8">
          <div>
            <Image
              src="/housecall-pro/design1.png"
              width={577 * 4}
              height={354 * 4}
              alt="design1"
              priority
              className="object-contain"
            />
          </div>
          <div>
            <Image
              src="/housecall-pro/design2.png"
              width={303 * 4}
              height={354 * 4}
              alt="design2"
              priority
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-base">
          I analyzed what most of these had in common, as those features clearly
          worked. It was important to have a type and draw function, as well as
          important legal copy to ensure intent and consent.
          <br />
          <br />
          After several iterations and check-ins with our design system team, we
          had our final components!
        </p>
      </div>
      <WIP />
    </>
  );
}
