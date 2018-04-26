import React, { Component } from 'react';
import { fetch5DaysWeatherData } from '../api/AppApi';
import { SearchBar, TodaysDisplay, Next5DaysDisplay } from './index';

class ForecastPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { city: 'Seattle' };
    }

    aggregateToDaily = (hourlyData) => {
        console.log(hourlyData);
        let dailyData = {list:[]};
        let collectedPerDay = this.collectPerDay(hourlyData);
        for (let key in collectedPerDay) {
            const max = collectedPerDay[key].reduce((prev, current) => {
                return (prev.main.temp > current.main.temp) ? prev : current;
            });
            const min = collectedPerDay[key].reduce((prev, current) => {
                return (prev.main.temp > current.main.temp) ? current : prev;
            });
            let item = {date:key, maxTemp: max.main.temp, minTemp: min.main.temp, weather: max.weather[0].description, humidity: max.main.humidity, icon:max.weather[0].icon};
            dailyData.list.push(item);
        }
        dailyData.list = dailyData.list.slice(0, 5);
        console.log(dailyData);
        return dailyData;
    }

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
            const aggregatedData = this.aggregateToDaily(data.list)
            this.setState({weatherData: aggregatedData});
        });
    }

    onSearchTextChangeCallback = (value) => {
        this.setState({city: value});
    }

    onSearchClick = () => {
        const data = fetch5DaysWeatherData(this.state.city, data => {
            const aggregatedData = this.aggregateToDaily(data.list)
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