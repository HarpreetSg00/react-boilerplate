import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import homeReducer from '../../client/components/views/Home/reducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
	homeReducer
	/* somemorereducers */
});

export default () => {
	const store = createStore(
		reducer,
		compose(applyMiddleware(sagaMiddleware))
	);
	return store;
};
