import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import loginReducer from '../../client/components/views/Login/reducer';
import tagManagmentReducer from '../../client/components/views/TagManagment/reducer';
import categoryManagmentReducer from '../../client/components/views/CategoryManagement/reducer'
import vehicleManagementReducer from '../../client/components/views/VehicleManagement/reducer'

export default () => {
    const store = createStore(combineReducers({ 
        loginReducer, tagManagmentReducer,categoryManagmentReducer,vehicleManagementReducer
        /* somemorereducers */
    }), {}, applyMiddleware(thunk));
    return store;
}