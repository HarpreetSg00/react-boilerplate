import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './components/views/Home/reducer';


export default () => {
    const store = createStore(combineReducers({ 
        homeReducer,
        /* somemorereducer */
    }), IS_SERVER ? {} : window.INITIAL_STATE, applyMiddleware(thunk));
    return store;
}