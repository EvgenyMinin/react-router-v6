import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { Loader } from '../../../../shared';

import { retrieveProduct } from '../../api';
import { Product } from '../../lib';

export const ProductItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const product = await retrieveProduct(id);
          setProduct(product);
        } catch (error) {
          console.warn(error);
          navigate('/');
        }
      })();
    }
  }, [id]);

  if (!product) {
    return <Loader />;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{`$${product.price / 100}`}</p>
      <p>{product.description}</p>
    </div>
  );
};
