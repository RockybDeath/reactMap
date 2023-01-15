import { createSlice } from '@reduxjs/toolkit'

//Просто болванка чтобы в таблице было 2 позиции с координатами
//В нормальном UI конечно нужно создавать поля для нормального добавления координат
let uniqueKey = 2;

function getUniqueKey(){
    return uniqueKey++;
}

export const coordinates = createSlice({
    name: 'coordinates',
    initialState: {
        value: [{
            key: 1,
            number: '1',
            coordinateBegXLat: '29.84660399',
            coordinateBegYLng: '30.29496392',
            coordinateEndXLat: '29.82934196',
            coordinateEndYLng: '30.42423701'
        }],
    },
    reducers: {
        addCoordinate: (state, action) => {

            let key = getUniqueKey();

            action.payload = {
                ...action.payload,
                key: key,
                number: key.toString()
            }

            return {
                ...state,
                value: [
                    ...state.value,
                    action.payload
                ]
            }
        }
    },
})

export const { addCoordinate } = coordinates.actions

export const getCoordinates = (state) => state.coordinates.value

export default coordinates.reducer
