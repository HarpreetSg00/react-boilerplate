import { all } from 'redux-saga/effects';
import homeSage from '@view/Home/saga';

export default function* rootSaga() {
  yield all([homeSage()]);
}
