import styles from "./index.module.css";

interface Props {
  darkTheme?: boolean;
}

export default function HamburgerMenu({ darkTheme }: Props) {
  return (
    <div className="w-8 h-6 relative flex flex-col justify-between cursor-pointer">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`w-full h-1 ${darkTheme ? "bg-[#fbfbfb]" : "bg-black"}`}
        />
      ))}
    </div>
  );
}
