import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import mySaga from "../saga/sagas";
import rootReducer from "../reducers/mainReducer";

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})


sagaMiddleware.run(mySaga)
