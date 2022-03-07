// imports
const request = require('postman-request');

// weather API data
const URL = 'http://api.weatherstack.com/';
const mode = 'current?access_key=';
const apiKey = '7f5090cf0ad6c85dbe9aa9b788bf4120';
const query = '&query=';
const units = '&units=m';

// request to weather API to load current weather for location
const getWeather = (error, data) => {
    if (error) {
        console.log(error);
    } else {
        request(
            {
                // coords need to be in reverse due to difference between API (geocoords gives lon,lat, weather takes lat,lon)
                url: URL + mode + apiKey + query + data.coords[1] + ',' + data.coords[0] + units,
                json: true
            },
            (error, response) => {
                if (error) {
                    console.log(error.message);
                } else if (response.body.error) {
                    console.log('Error ' + response.body.error.code + ': ' + response.body.error.info);
                } else {
                    console.log('Response Status: ' + response.statusCode + ' ' + response.statusMessage);
                    console.log('Weather forecast for: ' + data.placeName);
                    response.body.current.weather_descriptions.forEach((el) => {
                        console.log(el);
                    });
    
                    // challenge 6 code:
                    console.log('Current temperature: ' + response.body.current.temperature + ' degrees (RealFeel: ' + response.body.current.feelslike + ' degrees)');
                    console.log('Rain probability: ' + response.body.current.precip + ' %');
                }
            }
        )
    }
}

module.exports = {
    getWeather: getWeather
}