import styles from '../../styles/TodayOverview.module.css'
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

const Overview = ({ forecast, weather, darkMode }) => {
  return (
    <div>
      <h1 className={darkMode ? `${styles.heading} ${styles.darkHeading}` : styles.heading}>Today Overview</h1>
      <div className={styles.mediaDiv}>
        <div className={styles.contentDivisions}>
          <div className={darkMode ? `${styles.currentWeather} ${styles.darkBG}` : styles.currentWeather}>
            <div>
              <p className={styles.imgLoader}></p>
              <h1 className={styles.headingLoader}></h1>
              <p className={styles.loader}></p>
              <div className={styles.details}>
                <p><LocationOnOutlinedIcon sx={{ marginRight: '10px' }} /><span className={styles.loader}></span></p>
                <p><CalendarMonthIcon sx={{ marginRight: '10px' }} /><span className={styles.loader}></span></p>
              </div>
            </div>
          </div>
          <div className={darkMode ? `${styles.weatherConditions} ${styles.darkBGDivs}` : styles.weatherConditions}>
            <div>
              <AirIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Wind Speed</p>
                <h2 className={styles.headingLoader}></h2>
              </div>
            </div>
            <div>
              <WaterDropOutlinedIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Humidity</p>
                <h2 className={styles.headingLoader}></h2>
              </div>
            </div>
            <div>
              <SpeedIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Pressure</p>
                <h2 className={styles.headingLoader}></h2>
              </div>
            </div>
            <div>
              <VisibilityIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Visibility</p>
                <h2 className={styles.headingLoader}></h2>
              </div>
            </div>
            <div>
              <LightModeIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Sunrise</p>
                <h2 className={styles.headingLoader}></h2>
              </div>
            </div>
            <div>
              <WbTwilightIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
              <div>
                <p>Sunset</p>
                <h2 className={styles.headingLoader}></h2>
              </div>
            </div>
          </div>
          <table className={darkMode ? `${styles.tableForTemps} ${styles.darkBG}` : styles.tableForTemps}>
            <tbody>
              <tr >
                <td>
                  <p className={styles.loader}></p>
                  <p className={styles.loader}></p>
                </td>
                <td className={styles.alignText}>
                  <p className={styles.tempLoader}></p>
                </td>
              </tr>
              <tr >
                <td>
                  <p className={styles.loader}></p>
                  <p className={styles.loader}></p>
                </td>
                <td className={styles.alignText}>
                  <p className={styles.tempLoader}></p>
                </td>
              </tr>
              <tr >
                <td>
                  <p className={styles.loader}></p>
                  <p className={styles.loader}></p>
                </td>
                <td className={styles.alignText}>
                  <p className={styles.tempLoader}></p>
                </td>
              </tr>
              <tr >
                <td>
                  <p className={styles.loader}></p>
                  <p className={styles.loader}></p>
                </td>
                <td className={styles.alignText}>
                  <p className={styles.tempLoader}></p>
                </td>
              </tr>
              <tr >
                <td>
                  <p className={styles.loader}></p>
                  <p className={styles.loader}></p>
                </td>
                <td className={styles.alignText}>
                  <p className={styles.tempLoader}></p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={darkMode ? `${styles.weatherConditionsMedia} ${styles.darkBGDivs}` : styles.weatherConditionsMedia}>
          <div>
            <AirIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Wind Speed</p>
              <h2 className={styles.headingLoader}></h2>
            </div>
          </div>
          <div>
            <WaterDropOutlinedIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Humidity</p>
              <h2 className={styles.headingLoader}></h2>
            </div>
          </div>
          <div>
            <SpeedIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Pressure</p>
              <h2 className={styles.headingLoader}></h2>
            </div>
          </div>
          <div>
            <VisibilityIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Visibility</p>
              <h2 className={styles.headingLoader}></h2>
            </div>
          </div>
          <div>
            <LightModeIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Sunrise</p>
              <h2 className={styles.headingLoader}></h2>
            </div>
          </div>
          <div>
            <WbTwilightIcon sx={{ fontSize: 'xx-large', marginLeft: '10px' }} />
            <div>
              <p>Sunset</p>
              <h2 className={styles.headingLoader}></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;