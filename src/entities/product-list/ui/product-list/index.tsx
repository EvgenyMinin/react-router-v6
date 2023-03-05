import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Product, Products } from '../../../../shared/lib';
import { Loader } from '../../../../shared/ui';

import { listProducts } from '../../api';
import { sortProductsFromParams } from '../../lib';
import { ProductCard } from '../product-card';
import { SearchParams } from '../search-params';

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Products>(null);

  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    (async () => {
      const data = await listProducts();
      setProducts(data);
    })();
  }, [])

  useEffect(() => {
    if (products) {
      const sortedProducts = sortProductsFromParams(products, params);
      setProducts(sortedProducts);
    }
  }, [searchParams, products?.length]);

  if (!products) {
    return <Loader />;
  }

  if (!products.length) {
    return <div>Product list is empty</div>;
  }

  return (
    <div>
      <SearchParams />

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
