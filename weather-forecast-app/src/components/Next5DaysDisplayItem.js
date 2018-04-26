import React from 'react';

const Next5DaysDisplayItem = ({date='jan 10', maxTemp='55', minTemp='20', icon='10d'}) => {
    return(
        <div className="day-item">
            <div className="min-temp">{date}</div>
            <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} />
            <div className="max-temp"><b>{parseInt(maxTemp)}</b></div>
            <div className="min-temp">{parseInt(minTemp)}</div>
            <div className="vseparator"></div>
        </div>
    );
}

export { Next5DaysDisplayItem };