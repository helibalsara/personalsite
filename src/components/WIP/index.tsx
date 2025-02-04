import Image from "next/image";

export default function WIP() {
  return (
    <div className="px-36 py-16 flex flex-row justify-evenly items-center">
      <h6 className="text-black text-2xl italic font-normal">
        Work in progress... Come back soon!
      </h6>
      <Image
        src="/panda.svg"
        alt="WIP Panda"
        width={200}
        height={0}
        style={{ height: "auto" }}
      />
    </div>
  );
}
