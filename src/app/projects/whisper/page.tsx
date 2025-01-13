import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import WIP from "@/components/WIP";

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
      <WIP />
      <Footer />
    </>
  );
}
