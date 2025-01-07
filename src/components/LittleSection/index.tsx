import styles from "./index.module.css";

interface Props {
  title: string;
  children?: React.ReactNode;
}

export default function LittleSection({ title, children }: Props) {
  return (
    <div className="flex flex-row gap-24 w-full">
      <div className="flex flex-row justify-end text-right min-w-32">
        <h3 className="text-black text-xl italic font-normal max-w-20">{title}</h3>
      </div>
      <div className="pt-1 w-full">{children}</div>
    </div>
  );
}
