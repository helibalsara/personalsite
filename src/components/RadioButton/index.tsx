import styles from "./index.module.css";

interface Props {
  value: number;
  text: string;
  onChange: () => void;
  checked: boolean;
}

export default function RadioButton({ value, text, onChange, checked }: Props) {
  return (
    <div className={styles.container}>
      <input
        type="radio"
        id={value.toString()}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label htmlFor={value.toString()}>{text}</label>
    </div>
  );
}