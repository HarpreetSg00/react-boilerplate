import { all } from 'redux-saga/effects';
import homeSage from 'views/Home/saga';

export default function* rootSaga() {
    yield all([homeSage()]);
}