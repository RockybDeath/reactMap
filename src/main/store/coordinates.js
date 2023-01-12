import { createSlice } from '@reduxjs/toolkit'

export const coordinates = createSlice({
    name: 'coordinates',
    initialState: {
        value: [{
            key: '1',
            number: '1',
            coordinateBegXLat: '59.84660399',
            coordinateBegYLng: '30.29496392',
            coordinateEndXLat: '59.82934196',
            coordinateEndYLng: '30.42423701'
        }],
    },
    reducers: {
        addCoordinate: (state) => {
            state.value.push(state)
        }
    },
})

export const { addCoordinate } = coordinates.actions

export const selectCoordinates = (state) => state.coordinates.value

export default coordinates.reducer
