import { BrowserRouter } from 'react-router-dom';

import { Routing } from '../pages';

import { Navigation } from '../shared/ui';

export const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routing />
    </BrowserRouter>
  );
};
