import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../../client/store/root-reducer';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default () => {
  const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware)));
  return store;
};
