import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represents today's weather UI
 */

const TodaysDisplay = ({ date, maxTemp, minTemp, weather, humidity, icon }) => {
    return (
        <div className="cuurent-weather-container">
            <table align="center">
                <tbody>
                    <tr>
                        <td><span className="degree">{parseInt(maxTemp)}</span></td>
                        <td align="left" valign="top">
                            <span className="degree-left float-left">o</span>
                            <div className="float-right">
                                <span className="degree-right">F</span>
                                <div className="weather-label">
                                    <div>{weather}</div>
                                    <div>{humidity}% Humidity</div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

TodaysDisplay.propTypes = {
    date: PropTypes.string,
    maxTemp: PropTypes.number,
    minTemp: PropTypes.number,
    weather: PropTypes.string,
    humidity: PropTypes.number,
    icon: PropTypes.string
};

export { TodaysDisplay };