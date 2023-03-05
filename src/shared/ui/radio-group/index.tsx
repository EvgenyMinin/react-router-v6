import { ChangeEvent, FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './styles.module.css';

type OwnProps = {
  label: string;
  items: string[];
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RadioGroup: FC<OwnProps> = ({ label, items, name, onChange }) => {
  const [searchParams] = useSearchParams();

  return (
    <div className={styles.radioContainer}>
      <span>{label}:</span>
      {items.map((item) => (
        <label key={item}>
          {item}
          <input
            type="radio"
            name={name}
            value={item.toLowerCase()}
            onChange={onChange}
            defaultChecked={searchParams.get(name) === item.toLowerCase()}
          />
        </label>
      ))}
    </div>
  );
};
