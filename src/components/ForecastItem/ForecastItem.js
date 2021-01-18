import React from 'react';
import './ForecastItem.less';
import { getIcon } from '../../utilities/iconIdentifier';
import { formatDate } from '../../utilities/utilityFunctions';

const ForecastItem = props => {
  const { type, data } = props;

  const isToday = type === 'today';

  const dataToDisplay = {
    day: isToday ? "Today" : formatDate(data.dt),
    iconId: data.weather[0].icon,
    temperature: isToday ? Math.round(data.temp) : Math.round(data.temp.day),
    description: data.weather[0].description,
    generalDescription: data.weather[0].main
  }

  const renderDayBlock = () => {
    if (type === "today") {
      return (
        <div className='forecast-item-container today'>
          <h2 className="day">{dataToDisplay.day}</h2>
          <div className="wrapper">
            <div className="icon-block">
              <img className="icon" src={getIcon(dataToDisplay.iconId)} alt={dataToDisplay.generalDescription} />
            </div>
            <div className="text-block">
              <div className="temperature">{dataToDisplay.temperature}&#176;</div>
              <div className="description">{dataToDisplay.description}</div>
            </div>
          </div>
        </div>
      )
    } else if (type === "furtherDay") {
      return (
        <div className='forecast-item-container further-day'>
          <h2 className="day">{dataToDisplay.day}</h2>
          <div className="icon-block">
            <img className="icon" src={getIcon(dataToDisplay.iconId)} alt={dataToDisplay.generalDescription} />
          </div>
          <div className="temperature-block">
            <div className="temperature">{dataToDisplay.temperature}&#176;</div>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
  
  return renderDayBlock();
}

export default ForecastItem;