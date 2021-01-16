import React from 'react';
import './DayContainer.less';
import { getIcon } from '../../../utilities/iconIdentifier';
import { formatDate } from '../../../utilities/utilityFunctions';

const DayContainer = props => {
  const { today, data } = props;

  const isToday = today === 'true';

  const dataToDisplay = {
    day: isToday ? "Today" : formatDate(data.dt),
    iconId: data.weather[0].icon,
    temperature: isToday ? Math.round(data.temp) : Math.round(data.temp.day),
    description: data.weather[0].description,
    generalDescription: data.weather[0].main
  }

  return (
    <div className={`day-container ${isToday ? "today" : "further-day"}`}>
      <div>{dataToDisplay.day}</div>
      <img src={getIcon(dataToDisplay.iconId)} alt={dataToDisplay.generalDescription} />
      <div>{dataToDisplay.temperature}</div>
      <div>{dataToDisplay.description}</div>
    </div>
  )
}

export default DayContainer;