import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
// import Api from '...'

function* addCoordinates(action) {
    try {
        console.log("Таков путь")
    } catch (e) {
        yield put({type: "USER_ADD_COORDINATES", message: e.message});
    }
}

function* clickedRow(action){
    try {
        console.log(action)
    } catch (e) {
        yield put({type: "USER_CLICKED_ON_A_ROW", message: e.message});
    }
}

function* mySaga() {
    yield takeEvery("USER_ADD_COORDINATES", addCoordinates);
    yield takeEvery("USER_CLICKED_ON_A_ROW", clickedRow)
}

export default mySaga;
