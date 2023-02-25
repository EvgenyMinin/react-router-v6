import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { Navigation } from '../shared';

import { AdminScreen } from './admin';
import { NotFoundScreen } from './not-found';
import { ProductsScreen } from './products';

export const Routing = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/*" element={<ProductsScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
};
