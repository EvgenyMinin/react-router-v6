import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Product } from '../../../../shared';

import styles from './styles.module.css';

type OwnProps = {
  product: Product;
};

export const ProductCard: FC<OwnProps> = ({ product: { id, name, price } }) => {
  return (
    <Link to={id} className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.price}>{`$${price / 100}`}</p>
    </Link>
  );
};
