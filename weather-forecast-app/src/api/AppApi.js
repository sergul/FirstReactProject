export const fetch5DaysWeatherData = (cityName='Seattle', successCallback) => {
    fetch(`${getBaseURL()}/forecast?q=${cityName}&units=imperial&${getAPIKey()}`)
    .then(response => {
        return response.json();
    })
    .then(json => {
        successCallback(json);
    })
    .catch((error) => {
        console.log(error);
    });
}

const getBaseURL = () => ('http://api.openweathermap.org/data/2.5');
const getAPIKey = () => ('APPID=70e1904c932477f1d25f25869cad54db');