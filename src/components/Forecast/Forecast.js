// Alternatively this component could be written as functional using hooks

import React, { Component } from 'react';
import './Forecast.less';
import appData from '../../appData.json';
import Loader from '../Loader/Loader';
import ForecastItem from '../ForecastItem/ForecastItem';

const numOfFurtherDays = 4;

class Forecast extends Component {

  state = {
    forecastData: null,
    dataIsReady: false
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.activeTab !== this.props.activeTab) {
      this.setState({
        dataIsReady: false
      });
      this.getData();
    }
  }


  fetchWeatherData = cityData => {
    const cityLatitude = cityData.coordinates.latitude;
    const cityLongitude = cityData.coordinates.longitude;
    const dataToExclude = "minutely,hourly,alerts";
    const units = "metric";
    const appId = "b45eb137fe5cd7f18060b90c9b7953c4";

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLatitude}&lon=${cityLongitude}&exclude=${dataToExclude}&units=${units}&appid=${appId}`;

    fetch(url)
      .then(response => response.json()).then(data => {
        this.setState({
          forecastData: data,
          dataIsReady: true
        });
      })
      .catch(error => {
        console.log("Weather data fetch error: ", error)
      })
  }

  getData = () => {
    appData.cities.forEach(elem => {
      if (elem.id === this.props.activeTab) {
        this.fetchWeatherData(elem);
      }
    });
  }

  renderFurtherDays = () => {
    return [...Array(numOfFurtherDays)].map((e, i) => {
      return (
        <ForecastItem
          type="furtherDay"
          data={this.state.forecastData.daily[i + 1]}
          key={i}
        />
      )
    });
  }

  renderContent = () => {
    if (this.state.dataIsReady) {
      return (
        <div className="forecast-container">
          <div className="today-block">
            <ForecastItem
              type="today"
              data={this.state.forecastData.current}
            />
          </div>
          <div className="further-days-block">
            {this.renderFurtherDays()}
          </div>
        </div>
      )
    } else {
      return <Loader />
    }
  }

  render() {
    return this.renderContent();
  }
}

export default Forecast;