"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectOverview from "@/components/ProjectOverview";
import Line from "@/components/Line";

export default function Staramics() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px]">
        <Image
          src="/staramics/hero.svg"
          width={1280}
          height={540.5}
          style={{ height: "auto", width: "100%" }}
          alt="staramics"
          priority
        />
      </div>
      <ProjectOverview
        role="Designer"
        duration="January 2024 - May 2024"
        disciplines="Brand Identity, Graphic Design"
        description={
          <>
            <strong>
              Staramics is a ceramics studio that creates long-lasting
              decorative mini ceramic animals that are both whimsical and
              collectable. It helps people showcase their individual
              personalities.
            </strong>
            <br />
            <br />
            This is a brand created in the decal Brand Identity and Graphic
            Design. I wanted to take a fun and whimsical approach to this brand
            since I have only worked with web/ mobile UI. It was a great way for
            me to exercise my creativity and work with Illustrator.
          </>
        }
      />
      <div className="flex flex-col gap-8 px-4 md:px-[182px]">
        <h1 className="text-2xl md:text-[32px] font-bold">
          Logo & Color Palette
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <Image
            src="/staramics/logocolor.svg"
            width={576}
            height={336.75}
            style={{ height: "auto", width: "100%" }}
            alt="staramics"
          />
          <p className="text-base">
            I chose warm and earthy colors to bring a warm, fuzzy feeling to the
            brand. I went with a fun font to showcase the playful nature of the
            studio's products. Editing the font slightly to extend the "r" to
            hug the "a" further highlights the fun! I chose a cat hugging a star
            for the main mascot of this brand since it brought the playfulness
            to another level.
          </p>
        </div>
        <Line className="my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">Additional Assets</h1>
        <div className="flex flex-col md:flex-row gap-2">
          <div>
            <Image
              src="/staramics/assets1.png"
              width={504 * 4}
              height={289 * 4}
              style={{ height: "auto", width: "100%" }}
              alt="staramics"
            />
          </div>
          <div>
            <Image
              src="/staramics/assets2.png"
              width={404 * 4}
              height={289 * 4}
              style={{ height: "auto", width: "100%" }}
              alt="staramics"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-2 -mt-6">
          <div>
            <Image
              src="/staramics/assets3.png"
              width={403 * 4}
              height={289 * 4}
              style={{ height: "auto", width: "100%" }}
              alt="staramics"
            />
          </div>
          <div>
            <Image
              src="/staramics/assets4.png"
              width={505 * 4}
              height={289 * 4}
              style={{ height: "auto", width: "100%" }}
              alt="staramics"
            />
          </div>
        </div>
        <Line className="my-8" />
        <h1 className="text-2xl md:text-[32px] font-bold">Reflection</h1>
        <p className="text-base">
          Staramics helped spark a sense of playful creativity for me. It was
          fulfilling to create a whole brand from scratch, without any pressure
          of deliverables. It reconnected me to the fun of designing and allowed
          me to explore another medium of art I enjoy - ceramics. I wanted this
          brand to be collectables like Smiskis and Sonny Angels, but in ceramic
          form.
        </p>
      </div>
      <Footer className="mt-[80px] md:mt-[177px]" />
    </>
  );
}
