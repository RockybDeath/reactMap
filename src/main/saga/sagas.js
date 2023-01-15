import { call, put, takeEvery } from 'redux-saga/effects'
import {addCoordinate} from "../reducers/coordinates";
import Api from "../api/api";
import {changeSteps} from "../reducers/stepsArray";
// import Api from '...'

function* addCoordinates(action) {
    try {
        let coordinate = {
            number: '2',
            coordinateBegXLat: '29.84660399',
            coordinateBegYLng: '30.29496392',
            coordinateEndXLat: '29.82934196',
            coordinateEndYLng: '30.42423701'
        }
        yield put(addCoordinate(coordinate));
    } catch (e) {
        yield put({type: "USER_ADD_COORDINATES_ERROR", message: e.message});
    }
}

function* clickedRow(action){
    try {
        const data = yield call(Api.fetchHaul, action.value);
        yield put(changeSteps(data));
    } catch (e) {
        yield put({type: "USER_CLICKED_ON_A_ROW_ERROR", message: e.message});
    }
}

function* mySaga() {
    yield takeEvery("USER_ADD_COORDINATES", addCoordinates);
    yield takeEvery("USER_CLICKED_ON_A_ROW", clickedRow)
}

export default mySaga;
