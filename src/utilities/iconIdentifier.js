import clearSkyDay from '../assets/weatherIcons/clear-sky-day.svg';
import clearSkyNight from '../assets/weatherIcons/clear-sky-night.svg';
import fewCloudsDay from '../assets/weatherIcons/few-clouds-day.svg';
import fewCloudsNight from '../assets/weatherIcons/few-clouds-night.svg';
import scatteredClouds from '../assets/weatherIcons/scattered-clouds.svg';
import brokenClouds from '../assets/weatherIcons/broken-clouds.svg';
import showerRain from '../assets/weatherIcons/shower-rain.svg';
import rainDay from '../assets/weatherIcons/rain-day.svg';
import rainNight from '../assets/weatherIcons/rain-night.svg';
import thunderstorm from '../assets/weatherIcons/thunderstorm.svg';
import snow from '../assets/weatherIcons/snow.svg';
import mist from '../assets/weatherIcons/mist.svg';

export const getIcon = iconId => {
  switch (iconId) {
    case '01d':
      return clearSkyDay;
    case '01n':
      return clearSkyNight;
    case '02d':
      return fewCloudsDay;
    case '02n':
      return fewCloudsNight;
    case '03d':
      return scatteredClouds;
    case '03n':
      return scatteredClouds;
    case '04d':
      return brokenClouds;
    case '04n':
      return brokenClouds;
    case '09d':
      return showerRain;
    case '09n':
      return showerRain;
    case '10d':
      return rainDay;
    case '10n':
      return rainNight;
    case '11d':
      return thunderstorm;
    case '11n':
      return thunderstorm;
    case '13d':
      return snow;
    case '13n':
      return snow;
    case '50d':
      return mist;
    case '50n':
      return mist;
    default:
      return null;
  }
}