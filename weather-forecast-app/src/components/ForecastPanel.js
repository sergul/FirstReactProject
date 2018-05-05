import React, { Component } from 'react';
import { fetch5DaysWeatherData } from '../api/AppApi';
import { SearchBar, TodaysDisplay, Next5DaysDisplay } from './index';

/**
 * Represents the forcast panel UI and behaviour / logic
 * 
 */

class ForecastPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { city: 'Seattle' };
    }

    /**
     * Aggregates avarage weather for each day (As this data contains each 3 hours data for each day)
     * 
     * @argument hourlyData {Array} - contains the list of 3 hours weather data for 5 days
     * @returns dailyData {Object} - contains aggregated daily weather data
     */
    aggregate3HoursToDaily = (hourlyData) => {
        let dailyData = {list:[]};
        let collectedPerDay = this.collectPerDay(hourlyData);
        for (let key in collectedPerDay) {
            const max = collectedPerDay[key].reduce((prev, current) => {
                return (prev.main.temp > current.main.temp) ? prev : current;
            });
           
            let item = {date:key, maxTemp: max.main.temp, tempKF: collectedPerDay[key][0].main.temp_kf, weather: max.weather[0].description, humidity: max.main.humidity, icon:max.weather[0].icon};
            dailyData.list.push(item);
        }
        dailyData.list = dailyData.list.slice(0, 5);
        console.log(dailyData);
        return dailyData;
    }

    /**
     * Converts 3 hours data to daily data 
     * 
     * @argument hourlyData {Array} - contains the list of 3 hours weather data for 5 days
     * @returns collectedItems {Object} - contains converted data for each day and keys as dates
     */
    collectPerDay = (hourlyData) => {
        let collectedItems = {};
        for (let item of hourlyData) {
            const date = new Date(item.dt_txt);
            var locale = "en-us";
            var month = date.toLocaleString(locale, {month: "short"});
            const formattedDateText = `${month} ${date.getDate()}`;
            if (!collectedItems[formattedDateText]) {
                collectedItems[formattedDateText] = [];
            }
            collectedItems[formattedDateText].push(item);
        }
        return collectedItems;
    }

    componentDidMount() {
        const data = fetch5DaysWeatherData(this.state.city, data => {
            const aggregatedData = this.aggregate3HoursToDaily(data.list)
            this.setState({weatherData: aggregatedData});
        });
    }

    onSearchTextChangeCallback = (value) => {
        this.setState({city: value});
    }

    onSearchClick = () => {
        const data = fetch5DaysWeatherData(this.state.city, data => {
            const aggregatedData = this.aggregate3HoursToDaily(data.list)
            this.setState({weatherData: aggregatedData});
        });
    }

    onRemoveClick =() => {
        this.setState({city: ''});
    }

    render() {
        return (
            <div className="center-horizontally-child forecast-panel-background">
                <SearchBar onSearchTextChangeCallback={this.onSearchTextChangeCallback}
                onSearchClick={this.onSearchClick}
                onRemoveClick={this.onRemoveClick}
                inputText={this.state.city}/>
                {this.state.weatherData && <TodaysDisplay {...this.state.weatherData.list[0]}/>}
                <Next5DaysDisplay {...this.state.weatherData}/>
            </div>
        );
    }
}

export default ForecastPanel;