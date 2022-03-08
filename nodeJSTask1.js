//https://app.codility.com/self-register/AgileEngine-Node--Angular--Short/

const axios = require('axios');

require('./callMock');

const ApiURL    = "https://example.com/data/2.5/weather?";

function cityWeather(city) {
    // Implement the function
    // You can use console.log for debugging
    // API url = `https://example.com/data/2.5/weather?...`
    // Use q parameter (city) at the end of the url in order to mock data correctly
    return new Promise((resolve, reject) => {
        if ( typeof city !== "string" ) {
            throw new TypeError("not a string");
        } 
        if ( (!city) || (city == undefined) || (city.trim() == "") ) {
            throw new TypeError("string is empty");
        }
        // Implement the function - call http request
        axios.get(ApiURL + city).then((response) => {
            console.log(response.data.main);
            if ( response.data ) {
                resolve(response.data.main);
            } else {
                resolve({"message": "city not found", "code": 404});
            }
        }).catch((error) => {
            reject(error);
        });
        // Implement the function
    });
}

module.exports = {
    cityWeather
};
