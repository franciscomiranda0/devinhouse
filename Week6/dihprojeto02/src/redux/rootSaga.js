import { all } from 'redux-saga/effects';
import processSaga from './process/processSaga';

export default function* rootSaga() {
    yield all([
        processSaga()
    ]);
};