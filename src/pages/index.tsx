import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { ProductItem, ProductList } from '../entities/product-list';

import { Navigation } from '../shared';

import { AdminScreen } from './admin';
import { NotFoundScreen } from './not-found';
import { ProductsScreen } from './products';

export const Routing = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsScreen />}>
          <Route path="/" element={<ProductList />} />
          <Route path=":id" element={<ProductItem />} />
        </Route>
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
};
