import { FC, SyntheticEvent } from 'react';

import cn from 'classnames';

import styles from './styles.module.css';

type OwnProps = {
  label: string;
  onClick: (e: SyntheticEvent) => Promise<void>;
  isDelete?: boolean;
};

export const SubmitButton: FC<OwnProps> = ({ label, onClick, isDelete }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={cn(styles.button, { [styles.isDelete]: isDelete })}
    >
      {label}
    </button>
  );
};
