import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'

function* addCoordinates(action) {
    try {
        console.log("Таков путь")
    } catch (e) {
        yield put({type: "USER_ADD_COORDINATES", message: e.message});
    }
}

function* mySaga() {
    yield takeEvery("USER_ADD_COORDINATES", addCoordinates);
}

export default mySaga;
