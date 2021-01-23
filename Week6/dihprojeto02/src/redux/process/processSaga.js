import { all, call, put, takeEvery } from 'redux-saga/effects';
import { processType } from './processType';
import ProcessService from '../../services/ProcessService';

function* deleteProcess(action) {
    yield call(ProcessService.deleteProcess, action.payload.processId);
};

function* insertProcess(action) {
    yield call(ProcessService.createProcess, action.payload.process);
};

function* loadOne(action) {
    const response = yield call(ProcessService.readProcess, action.payload.processEntryId);
    yield put({ type: processType.LOAD_ONE, payload: response });
};

function* loadProcesses() {
    const response = yield call(ProcessService.readProcesses);
    yield put({ type: processType.ASYNC_LOAD, payload: response.data });
};

function* loadQuery(action) {
    console.log(action);
    const response = yield call(ProcessService.readQuery, action.payload.query);
    yield put({ type: processType.ASYNC_LOAD, payload: response.data });
};

function* updateProcess(action) {
    yield call(ProcessService.updateProcess, action.payload.process);
};


function* watchDeleteProcess() {
    yield takeEvery(processType.ASYNC_DELETE, deleteProcess);
};

function* watchInsertProcess() {
    yield takeEvery(processType.ASYNC_INSERT, insertProcess);
};

function* watchLoadOne() {
    yield takeEvery(processType.ASYNC_LOAD_ONE, loadOne);
};

function* watchLoadProcesses() {
    yield takeEvery(processType.ASYNC_LOAD_ALL, loadProcesses);
};

function* watchLoadQuery() {
    yield takeEvery(processType.ASYNC_LOAD_QUERY, loadQuery);
};

function* watchUpdateProcess() {
    yield takeEvery(processType.ASYNC_UPDATE, updateProcess);
};

export default function* rootProcessSaga() {
    yield all([
        watchDeleteProcess(),
        watchInsertProcess(),
        watchLoadProcesses(),
        watchLoadOne(),
        watchLoadQuery(),
        watchUpdateProcess(),
    ]);
};