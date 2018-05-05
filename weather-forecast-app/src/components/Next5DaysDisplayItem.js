import React from 'react';

/**
 * Represents the UI for a single item of next day weather
 * 
 */

const Next5DaysDisplayItem = ({date='jan 10', maxTemp='55', tempKF='20', icon='10d'}) => {
    return(
        <div className="day-item">
            <div className="min-temp">{date}</div>
            <img className="weather-icon" src={`http://openweathermap.org/img/w/${icon}.png`} />
            <div className="max-temp"><b>{parseInt(maxTemp)}</b></div>
            <div className="min-temp">{tempKF}</div>
            <div className="vseparator"></div>
        </div>
    );
}

export { Next5DaysDisplayItem };