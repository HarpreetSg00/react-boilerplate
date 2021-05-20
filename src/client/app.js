import React from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import useStyles from 'isomorphic-style-loader/useStyles';

import appRoutes from './Routes';
import gs from './assets/scss/style.scss';


function App({ }) {
	useStyles(gs);

	return (
		<BrowserRouter>{renderRoutes(appRoutes)}</BrowserRouter>
	)
}

export default App;
