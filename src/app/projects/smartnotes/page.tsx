import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WIP from "@/components/WIP";

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
      <WIP />
      <Footer />
    </>
  );
}
