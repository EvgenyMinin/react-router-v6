import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AdminScreen } from './admin';
import { NotFoundScreen } from './not-found';
import { ProductsScreen } from './products';

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductsScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
};
