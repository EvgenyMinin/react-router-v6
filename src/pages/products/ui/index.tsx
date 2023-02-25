import { Route, Routes } from 'react-router';

import { ProductItem, ProductList } from '../../../entities/product-list';

export const ProductsScreen = () => (
  <div>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path=":id" element={<ProductItem />} />
    </Routes>
  </div>
);
