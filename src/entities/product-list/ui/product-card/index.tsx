import { FC } from 'react';

import { Product } from '../../lib';

type OwnProps = {
  product: Product;
};

export const ProductCard: FC<OwnProps> = ({ product }) => {
  return <div>{product.name}</div>;
};
