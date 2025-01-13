import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WIP from "@/components/WIP";

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
      <WIP />
      <Footer />
    </>
  );
}
