import { ChangeEvent } from "react";
import styles from './Input.module.scss';

type TProps = {
  title?: string,
  value: string,
  onChange: (event: ChangeEvent) => void,
}

export const Input: React.FC<TProps> = ({ title = 'Input', value, onChange }) => {
  return (
    <label className={styles.wrapper}>
      {title}
      <input
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};