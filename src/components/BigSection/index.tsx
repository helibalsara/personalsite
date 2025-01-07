import styles from "./index.module.css";

interface Props {
  title?: string;
  color: "grey" | "white" | string;
  children?: React.ReactNode;
  topBorder?: boolean;
  extendLineBottom?: boolean;
  extendLineTop?: boolean;
  noBorderBottom?: boolean;
  noLine?: boolean;
}

export default function BigSection({
  title,
  color,
  children,
  topBorder,
  extendLineBottom,
  extendLineTop,
  noBorderBottom,
  noLine,
}: Props) {
  return (
    <div
      className={`
        flex flex-row w-full pl-36 md:pl-12 md:pr-12 border-b border-black gap-4
        ${color === "grey" ? "bg-[#ededed]" : ""}
        ${!extendLineBottom ? "pb-12" : ""}
        ${!extendLineTop ? "pt-12" : ""}
        ${topBorder ? "border-t border-black" : ""}
        ${noBorderBottom ? "border-b-0" : ""}
      `}
      style={color !== "grey" && color !== "white" ? { background: color } : {}}
    >
      <div className={`
        h-full w-full
        ${noLine ? "" : "lg:pl-4 lg:pr-72 lg:border-l-2 lg:border-black"}
      `}>
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </div>
  );
}
