import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import StyleContext from "isomorphic-style-loader/StyleContext";
import { Provider } from 'react-redux';
import storeClient from 'store/store.js';
import App from './app';

const insertCss = (...styles) => {
	const removeCss = styles.map(style => style._insertCss());
	return () => removeCss.forEach(dispose => dispose());
};

ReactDOM.hydrate(
	<StyleContext.Provider value={{ insertCss }}>
		<Provider store={storeClient()}>
			<App />
		</Provider>
	</StyleContext.Provider>,
	document.querySelector('#root')
);
