import { combineReducers } from 'redux'
import coordinatesReducer from "./coordinates";
import stepsArrayReducer from "./stepsArray";

const rootReducer = combineReducers({
    coordinates: coordinatesReducer,
    stepsArray: stepsArrayReducer,
})

export default rootReducer
