import { useEffect, useState } from 'react';

import { Products } from '../../../../shared/lib';
import { Loader } from '../../../../shared/ui';

import { listProducts } from '../../api';
import { ProductCard } from '../product-card';

export const ProductList = () => {
  const [products, setProducts] = useState<Products>(null);

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      setProducts(data);
    })();
  }, []);

  if (!products) {
    return <Loader />;
  }

  if (!products.length) {
    return <div>Product list is empty</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
