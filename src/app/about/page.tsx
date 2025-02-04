import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import HeartsNoLink from "./hearts-no-link.svg";
// import Hearts from "./hearts.svg";

export default function About() {
  return (
    <>
      <Navbar darkTheme />
      <div className="w-full px-4 md:px-[164px] pt-32 md:pt-60 pb-12 md:pb-100 text-[#ededed] bg-[#3b3b3b]">
        <div className="pt-16 md:pt-0 flex flex-col md:flex-row gap-8 md:gap-[148px] items-center justify-between md:pr-20 pb-16 md:pb-[140px] [&>*]:flex-1">
          <div className="flex justify-center">
            <Image
              alt="profile"
              src="/about/profile.png"
              width={393}
              height={442.77}
              className="w-1/2 md:w-full h-auto"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-10">
            <div className="self-center flex flex-row items-end gap-4 md:gap-12">
              <h1 className="text-3xl md:text-[48px] font-normal pb-4 md:pb-8">
                hi, i&apos;m heli...
              </h1>
              <Image
                alt="helicopter"
                src="/about/helicopter.svg"
                width={120}
                height={120}
                className="w-[80px] md:w-[200px] h-auto"
              />
            </div>
            <p className="text-center md:text-left max-w-full md:max-w-[80%] text-sm md:text-base">
              Like helicopter! I&apos;m a senior at UC Berkeley majoring in
              Cognitive Science & minoring in Data Science with a certificate in
              Design Innovation.
            </p>
            <p className="text-center md:text-left max-w-full md:max-w-[80%] text-sm md:text-base">
              You can catch me fostering a design community at Design @
              Berkeley, consulting on some cool projects at Berkeley Innovation,
              shooting golds with Cal Archery, and building up my{" "}
              <Link href="https://picsbyheli.com/" className="underline">
                photography portfolio
              </Link>{" "}
              with my friends!
              <span className="hidden md:inline">
                Enjoy some of my favorite shots below~
              </span>
            </p>
          </div>
        </div>
        <div className="hidden md:visible">
          <div className="flex flex-col md:flex-row gap-5 justify-between flex-1">
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
            <div className="flex-1 md:flex-[2]">
              <div className="flex flex-col md:flex-row gap-5 justify-between flex-1">
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
            </div>
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4 md:gap-0 mt-8 md:mt-0">
              <HeartsNoLink className="w-full md:w-auto" />
              <p className="text-[#ededed] text-center md:text-right text-lg md:text-2xl font-normal font-neuton">
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
