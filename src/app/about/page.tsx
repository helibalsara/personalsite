import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeartsNoLink from "./hearts-no-link.svg";
// import Hearts from "./hearts.svg";

export default function About() {
  return (
    <>
      <Navbar darkTheme />
      <div className="px-[164px] pt-60 pb-100 text-[#ededed] bg-[#3b3b3b]">
        <div className="flex gap-[148px] items-center justify-between pr-20 pb-[140px] [&>*]:flex-1">
          <div>
            <Image
              alt="profile"
              src="/about/profile.png"
              width={393}
              height={442.77}
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row items-end gap-12">
              <h1 className="text-[48px] font-normal pb-8">
                hi, i&apos;m heli...
              </h1>
              <Image
                alt="helicopter"
                src="/about/helicopter.svg"
                width={200}
                height={200}
              />
            </div>
            <p className="max-w-[80%]">
              Like helicopter! I&apos;m a senior at UC Berkeley majoring in
              Cognitive Science & minoring in Data Science with a certificate in
              Design Innovation.
            </p>
            <p className="max-w-[80%]">
              You can catch me fostering a design community at Design @
              Berkeley, consulting on some cool projects at Berkeley Innovation,
              shooting golds with Cal Archery, and building up my photography
              portfolio with my friends! Enjoy some of my favorite shots below~
            </p>
          </div>
        </div>
        <div className="flex gap-5 justify-between flex-1">
          <div className="flex gap-5 flex-col flex-1">
            <Image
              alt="image1"
              src="/about/image1.png"
              width={300}
              height={200}
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              alt="image4"
              src="/about/image4.png"
              width={300}
              height={360}
              style={{ width: "100%", height: "auto" }}
            />
            <Image
              alt="image8"
              src="/about/image8.png"
              width={300}
              height={419.5}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="flex-[2]">
            <div className="flex gap-5 justify-between flex-1">
              <div className="flex gap-5 flex-col flex-1">
                <Image
                  alt="image2"
                  src="/about/image2.png"
                  width={300}
                  height={200}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  alt="image5"
                  src="/about/image5.png"
                  width={300}
                  height={208.5}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  alt="image6"
                  src="/about/image6.png"
                  width={300}
                  height={203}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  alt="image9"
                  src="/about/image9.png"
                  width={300}
                  height={213.5}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <div className="flex gap-5 flex-col flex-1">
                <Image
                  alt="image3"
                  src="/about/image3.png"
                  width={300}
                  height={434}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  alt="image7"
                  src="/about/image7.png"
                  width={300}
                  height={200}
                  style={{ width: "100%", height: "auto" }}
                />
                <Image
                  alt="image10"
                  src="/about/image10.png"
                  width={300}
                  height={214}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <HeartsNoLink />
              <p className="text-[#ededed] text-right text-2xl font-normal font-neuton">
                message for any photography inquiries, thanks!
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
