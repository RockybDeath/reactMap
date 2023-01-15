import { createSlice } from '@reduxjs/toolkit'

export const stepsArray = createSlice({
    name: 'stepsArray',
    initialState: {
        value: [],
        firstMarkerCoordinates: undefined,
        secondMarkerCoordinates: undefined
    },
    reducers: {
        changeSteps: (state, action) => {

            let newValue = [];

            let firstMarkerCoordinates = undefined;

            let secondMarkerCoordinates = undefined;

            action.payload.trips[0].legs[0].steps.forEach(point => newValue.push(point.maneuver.location))

            if(newValue.length >= 2){
                firstMarkerCoordinates = newValue[0]
                secondMarkerCoordinates = newValue[newValue.length - 1]
            }

            return {
                ...state,
                value: newValue,
                firstMarkerCoordinates: firstMarkerCoordinates,
                secondMarkerCoordinates: secondMarkerCoordinates
            }
        }
    },
})

export const { changeSteps } = stepsArray.actions

export const getSteps = (state) => state.stepsArray.value

export const getFirstMarker = (state) => state.stepsArray.firstMarkerCoordinates;

export const getSecondMarker = (state) => state.stepsArray.secondMarkerCoordinates;

export default stepsArray.reducer
