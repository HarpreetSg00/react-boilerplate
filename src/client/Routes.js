import Website from './layout/Website/Website';
import Home, { loadHomeData } from 'views/Home';

const appRoutes = [
	{
		component: Website,
		routes: [
			{
				path: '/',
				exact: true,
				component: Home
				// loadData: loadHomeData
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
