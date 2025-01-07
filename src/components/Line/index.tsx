export default function Line({ className }: { className?: string }) {
  return <div className={`w-full h-[1px] bg-black ${className || ""}`} />;
}
