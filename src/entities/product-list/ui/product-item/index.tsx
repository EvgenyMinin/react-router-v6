import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { Loader, Product } from '../../../../shared';

import { retrieveProduct } from '../../api';

import styles from './styles.module.css';

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
          navigate('/', { replace: true });
        }
      })();
    }
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (!product) {
    return <Loader />;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{`$${product.price / 100}`}</p>
      <p>{product.description}</p>
      <button className={styles.buttonBack} onClick={handleBack}>
        Back
      </button>
    </div>
  );
};
