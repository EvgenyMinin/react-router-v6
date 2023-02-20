import React, { useEffect, useState } from 'react';

import { listProducts } from '../api/getProducts';
import { Products } from '../lib';
import { ProductCard } from './product-card';

export const ProductList = () => {
  const [products, setProsucts] = useState<Products>(null);

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      setProsucts(data);
    })();
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }

  if (!products.length) {
    return <div>Product list is empty</div>;
  }

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};
