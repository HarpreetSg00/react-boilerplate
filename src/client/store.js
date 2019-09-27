import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools as compose } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import loginReducer from './components/views/Login/reducer';
import tagManagmentReducer from './components/views/TagManagment/reducer'
import categoryManagmentReducer from './components/views/CategoryManagement/reducer'
import vehicleManagementReducer from './components/views/VehicleManagement/reducer'

const store = createStore(combineReducers({
  loginReducer,tagManagmentReducer,categoryManagmentReducer,vehicleManagementReducer
    /* somemorereducer */
  }), IS_SERVER ? {} : window.INITIAL_STATE, compose(applyMiddleware(thunk)));
  
export default store;

