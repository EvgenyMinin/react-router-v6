import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { APP_NAVIGATION, Navigation, ProtectedRoute } from '../shared';

import { AdminScreen } from './admin';
import { NotFoundScreen } from './not-found';
import { ProductsScreen } from './products';

export const Routing = () => {
  const { home, admin } = APP_NAVIGATION;

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path={`${home}*`} element={<ProductsScreen />} />
        <Route
          path={admin}
          element={
            <ProtectedRoute isAllowed={false}>
              <AdminScreen />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </Router>
  );
};
