const API_BASE_ADDRESS = 'https://router.project-osrm.org/trip/v1/driving/';

const API_BASE_SETTINGS = '?steps=true&overview=false'


//Апи почему-то возвращает странные точки, которые идут через реки, дома и т.д, не очень понимаю с чем связано.

export default class Api {
    static async fetchHaul(parameters) {

        const coordinates = parameters.coordinateBegXLat + ','
            + parameters.coordinateBegYLng + ';'
            + parameters.coordinateEndXLat + ','
            + parameters.coordinateEndYLng;

        const uri = API_BASE_ADDRESS + coordinates + API_BASE_SETTINGS;

        const response = await fetch(uri, {
            method: 'GET'
        })

        if (response.ok) {
            return await response.json();
        }

        throw new Error("Unexpected error!!!");
    }
}
