import styles from "./Checkbox.module.css";

interface ICheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckboxInput = ({ label, checked, onChange }: ICheckboxProps) => {
  return (
    <label className={styles.labelContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.input}
      />
      {label}
    </label>
  );
};

export default CheckboxInput;
