import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import BigSection from "@/components/BigSection";
import LittleSection from "@/components/LittleSection";
import WIP from "@/components/WIP";

export default function InternConnect() {
  return (
    <>
      <Navbar />
      <div className="pt-[153px] px-36">
        <div className="flex flex-row w-full gap-16">
          <Image
            src="/internconnect.png"
            width={536}
            height={339}
            style={{ height: "100%", width: "auto" }}
            alt="InternConnect"
            priority
          />
          <div className="flex flex-col gap-4">
            <h3 className="font-normal text-xl max-w-[90%]">
              InternConnect is an online <strong>community</strong> platform for
              computer science students looking to{" "}
              <strong>level up their career</strong>.
            </h3>
            <div className="flex flex-col gap-2">
              <h3>Role</h3>
              <p className="text-sm">UI Designer</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Duration</h3>
              <p className="text-sm">June 2023 - August 2023</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Disciplines</h3>
              <p className="text-sm">UI Design, Branding</p>
            </div>
            <div className="flex flex-col gap-2">
              <h3>Team</h3>
              <p className="text-sm">Sekar Setyanto, Yuka Natsuki, Te-Jung Chen, and Anyan Xien</p>
            </div>
          </div>
        </div>
        <div className="h-px w-full bg-black mt-[100px] mb-12" />
        <div />
      </div>
      <WIP />
      <Footer />
    </>
  );
}
