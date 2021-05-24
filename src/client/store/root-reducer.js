import { combineReducers } from 'redux';
import homeReducer from '@view/Home/reducer';

const reducer = combineReducers({
  homeReducer,
  /* somemorereducers */
});

export default reducer;
