import styles from "./index.module.css";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Button({ onClick, children }: Props) {
  return (
    <button 
      className="all-unset shadow-[0px_3.67px_3.67px_0px_rgba(0,0,0,0.25)] px-2 py-1 rounded hover:bg-[#eaeaea] cursor-pointer" 
      onClick={onClick}
    >
      {children}
    </button>
  );
}
