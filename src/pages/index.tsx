import { useState } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { APP_NAVIGATION } from '../shared/lib';

import { AdminScreen } from './admin';
import { NotFoundScreen } from './not-found';
import { ProductsScreen } from './products';

export const Routing = () => {
  const [authenticated] = useState<boolean>(true);

  const { home, admin } = APP_NAVIGATION;
  const routes = useRoutes([
    {
      path: `${home}*`,
      element: <ProductsScreen />,
    },
    {
      path: `${admin}/*`,
      element: authenticated ? <AdminScreen /> : <Navigate to={home} />,
    },
    {
      path: '*',
      element: <NotFoundScreen />,
    },
  ]);

  return routes;
};
