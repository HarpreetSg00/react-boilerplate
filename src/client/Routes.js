import Home from '@view/Home';
import About from '@view/About';

import Website from './layout/Website/Website';

const appRoutes = [
  {
    component: Website,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/about',
        exact: true,
        component: About,
      },
    ],
  },
];

export default appRoutes;
