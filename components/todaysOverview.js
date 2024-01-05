import styles from '../styles/TodayOverview.module.css'
import Image from 'next/image'
import AirIcon from '@mui/icons-material/Air';
import moment from 'moment';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import SpeedIcon from '@mui/icons-material/Speed';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LightModeIcon from '@mui/icons-material/LightMode';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const TodaysOverview = ({ forecast, weather, darkMode }) => {
  return (
    <div>
      <h1 className={darkMode ? `${styles.heading} ${styles.darkHeading}` : styles.heading}>Today Overview</h1>
      <div className={styles.mediaDiv}>
        <div className={styles.contentDivisions}>
          <div className={darkMode ? `${styles.currentWeather} ${styles.darkBG}` : styles.currentWeather}>
            <div>
              <Image src={`https://weather-pekkiriscim.vercel.app/src/img/animated/${weather.weather[0].icon}.svg`} alt='' width={80} height={80} />
              <h1>{(weather.main.temp.toString()).substring(0, 4)}°C</h1>
              <p>{weather.weather[0].main}</p>
              <div className={styles.details}>
                <p><LocationOnOutlinedIcon sx={{ marginRight: '10px' }} />{weather.name}</p>
                <p><CalendarMonthIcon sx={{ marginRight: '10px' }} />{moment.unix(weather.dt).format('D MMMM dddd')}</p>
              </div>
            </div>
          </div>
          <div className={darkMode ? `${styles.weatherConditions} ${styles.darkBGDivs}` : styles.weatherConditions}>
            <div>
              <AirIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Wind Speed</p>
                <h2>{weather?.wind.speed} km/h</h2>
              </div>
            </div>
            <div>
              <WaterDropOutlinedIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Humidity</p>
                <h2>{weather.main.humidity}%</h2>
              </div>
            </div>
            <div>
              <SpeedIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Pressure</p>
                <h2>{weather.main.pressure} hPa</h2>
              </div>
            </div>
            <div>
              <VisibilityIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Visibility</p>
                <h2>{weather.visibility / 1000} km</h2>
              </div>
            </div>
            <div>
              <LightModeIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Sunrise</p>
                <h2>{moment.unix(weather.sys.sunrise).format('HH:mm')}</h2>
              </div>
            </div>
            <div>
              <WbTwilightIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Sunset</p>
                <h2>{moment.unix(weather.sys.sunset).format('HH:mm')}</h2>
              </div>
            </div>
          </div>
          <table className={darkMode ? `${styles.tableForTemps} ${styles.darkBG}` : styles.tableForTemps}>
            <tbody>
              <tr>
                <td>
                  <span className={styles.colorText}>{moment.unix(forecast.list[0].dt).format('dddd')}</span>
                  <br />
                  {moment.unix(forecast.list[0].dt).format('HH:mm')}
                </td>
                <td className={styles.alignText}><b>{(forecast.list[0].main.temp.toString()).substring(0, 4)}°C</b></td>
              </tr>
              <tr>
                <td>
                  <span className={styles.colorText}>{moment.unix(forecast.list[1].dt).format('dddd')}</span>
                  <br />
                  {moment.unix(forecast.list[1].dt).format('HH:mm')}
                </td>
                <td className={styles.alignText}><b>{(forecast.list[1].main.temp.toString()).substring(0, 4)}°C</b></td>
              </tr>
              <tr>
                <td>
                  <span className={styles.colorText}>{moment.unix(forecast.list[2].dt).format('dddd')}</span>
                  <br />
                  {moment.unix(forecast.list[2].dt).format('HH:mm')}
                </td>
                <td className={styles.alignText}><b>{(forecast.list[2].main.temp.toString()).substring(0, 4)}°C</b></td>
              </tr>
              <tr>
                <td>
                  <span className={styles.colorText}>{moment.unix(forecast.list[3].dt).format('dddd')}</span>
                  <br />
                  {moment.unix(forecast.list[3].dt).format('HH:mm')}
                </td>
                <td className={styles.alignText}><b>{(forecast.list[3].main.temp.toString()).substring(0, 4)}°C</b></td>
              </tr>
              <tr>
                <td>
                  <span className={styles.colorText}>{moment.unix(forecast.list[4].dt).format('dddd')}</span>
                  <br />
                  {moment.unix(forecast.list[4].dt).format('HH:mm')}
                </td>
                <td className={styles.alignText}><b>{(forecast.list[4].main.temp.toString()).substring(0, 4)}°C</b></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={darkMode ? `${styles.weatherConditionsMedia} ${styles.darkBGDivs}` : styles.weatherConditionsMedia}>
          <div>
            <AirIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Wind Speed</p>
              <h2>{weather?.wind.speed} km/h</h2>
            </div>
          </div>
          <div>
            <WaterDropOutlinedIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Humidity</p>
              <h2>{weather.main.humidity}%</h2>
            </div>
          </div>
          <div>
            <SpeedIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Pressure</p>
              <h2>{weather.main.pressure} hPa</h2>
            </div>
          </div>
          <div>
            <VisibilityIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Visibility</p>
              <h2>{weather.visibility / 1000} km</h2>
            </div>
          </div>
          <div>
            <LightModeIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Sunrise</p>
              <h2>{moment.unix(weather.sys.sunrise).format('HH:mm')}</h2>
            </div>
          </div>
          <div>
            <WbTwilightIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Sunset</p>
              <h2>{moment.unix(weather.sys.sunset).format('HH:mm')}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodaysOverview;