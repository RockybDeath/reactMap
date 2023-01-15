import { createSlice } from '@reduxjs/toolkit'

//Просто болванка чтобы в таблице было 2 позиции с координатами
//В нормальном UI конечно нужно создавать поля для нормального добавления координат
let uniqueKey = 6;

function getUniqueKey(){
    return uniqueKey++;
}

export const coordinates = createSlice({
    name: 'coordinates',
    initialState: {
        value: [{
            key: 1,
            number: '1',
            coordinateBegXLat: '59.84660399',
            coordinateBegYLng: '30.29496392',
            coordinateEndXLat: '59.82934196',
            coordinateEndYLng: '30.42423701'
        },
            {
                key: 2,
                number: '2',
                coordinateBegXLat: '59.82934196',
                coordinateBegYLng: '30.42423701',
                coordinateEndXLat: '59.82761295',
                coordinateEndYLng: '30.41705607'
            },
            {
                key: 3,
                number: '3',
                coordinateBegXLat: '59.83567701',
                coordinateBegYLng: '30.38064206',
                coordinateEndXLat: '59.84660399',
                coordinateEndYLng: '30.29496392'
            },
            {
                key: 4,
                number: '4',
                coordinateBegXLat: '59.84660399',
                coordinateBegYLng: '30.29496392',
                coordinateEndXLat: '59.82761295',
                coordinateEndYLng: '30.41705607'
            },
            {
                key: 5,
                number: '5',
                coordinateBegXLat: '59.83567701',
                coordinateBegYLng: '30.38064206',
                coordinateEndXLat: '59.84660399',
                coordinateEndYLng: '30.29496392'
            }
        ],
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
