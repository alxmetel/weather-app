// Alternatively this component could be written as functional using hooks

import React, { Component } from 'react';
import './TabContentContainer.less';
import appData from '../../../appData.json';
import Loader from '../../shared/Loader/Loader';
import DayContainer from '../DayContainer/DayContainer';

const numOfFurtherDays = 4;

class TabContentContainer extends Component {

  state = {
    forecastData: null,
    dataIsReady: false
  }

  setDataIsReady = val => {
    this.setState({
      dataIsReady: val
    });
  }

  componentDidMount() {
    this.getData();
  }


  componentDidUpdate(prevProps) {
    if (prevProps.activeTab !== this.props.activeTab) {
      this.setDataIsReady(false);
      this.getData();
    }
  }

  getData = () => {
    appData.cities.forEach(elem => {
      if (elem.id === this.props.activeTab) {
        this.fetchForecastData(elem);
      }
    });
  }

  fetchForecastData = cityData => {
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
        console.log("Forecast data fetch error: ", error)
      })
  }

  renderFurtherDays = () => {
    return [...Array(numOfFurtherDays)].map((e, i) => {
      return <DayContainer today="false" data={this.state.forecastData.daily[i + 1]} key={i} />
    });
  }

  renderContent = () => {
    if (this.state.dataIsReady) {
      return (
        <div className="tab-content-container">
          <div className="today-block">
            <DayContainer today="true" data={this.state.forecastData.current} />
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

export default TabContentContainer;