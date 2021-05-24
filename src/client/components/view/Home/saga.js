import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '@store/action-type';

// eslint-disable-next-line no-unused-vars
function* getSomeDataSaga({ payload }) {
  try {
    const res = yield call(() => axios.get('https://baconipsum.com/api/?type=meat-and-filler'));
    yield put({ type: types.FETCH_SOME_DATA_SUCCESS, payload: res.data });
  } catch (errData) {
    yield put({ type: types.FETCH_SOME_DATA_ERROR, payload: errData });
  }
}

// Watcher/Listener
export default function* homeSaga() {
  yield takeLatest(types.FETCH_SOME_DATA_REQUEST, getSomeDataSaga);
}
