import Website from './layout/Website/Website';
import Home, { loadHomeData } from 'views/Home';
import About from 'views/About';

const appRoutes = [
	{
		component: Website,
		routes: [
			{
				path: '/',
				exact: true,
				component: Home
				// loadData: loadHomeData
			},
			{
				path: '/about',
				exact: true,
				component: About
			}
			/* Parameterized data */
			/* {
            path: '/route/:slug',
            exact: true,
            component: Home,
            loadDataWithMatch: loadHomeData
        }, */
		]
	}
];

export default appRoutes;
