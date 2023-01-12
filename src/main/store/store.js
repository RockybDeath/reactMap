import { configureStore } from '@reduxjs/toolkit'
import coordinatesReducer from "./coordinates";
import createSagaMiddleware from 'redux-saga'
import mySaga from "../saga/sagas";

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: {
        coordinates: coordinatesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})


sagaMiddleware.run(mySaga)
