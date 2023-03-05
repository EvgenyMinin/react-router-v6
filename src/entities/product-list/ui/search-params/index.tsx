import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

import { RadioGroup } from '../../../../shared/ui';

import styles from './styles.module.css';

export const SearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateParams = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    const currentParams = Object.fromEntries([...searchParams]);
    const newParams = { ...currentParams, [name]: value };
    setSearchParams(newParams);
  };

  return (
    <div className={styles.container}>
      <RadioGroup
        label="Sort"
        name="sort"
        items={['Name', 'Price']}
        onChange={updateParams}
      />

      <RadioGroup
        label="Order"
        name="order"
        items={['Ascending', 'Descending']}
        onChange={updateParams}
      />
    </div>
  );
};
