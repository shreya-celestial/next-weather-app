import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { IconButton } from '@mui/material';
import Image from 'next/image';
import logo from '/public/favicon.png';
import styles from '/styles/footer.module.css'
import { DARK_BUTTON, ICON_BUTTON_STYLES } from './searchHeader'


const FooterComp = ({ darkMode }) => {
  return (
    <div className={styles.footer}>
      <div className={darkMode ? `${styles.logo} ${styles.darkBG}` : styles.logo}>
        <Image src={logo} alt='' width={25} height={25} className={darkMode ? styles.darkImg : ''} />
        <p>weather</p>
      </div>
      <div className={darkMode ? `${styles.text} ${styles.darkBG}` : styles.text}>
        <p>Weather data provided by OpenWeather</p>
      </div>
      <IconButton sx={darkMode ? DARK_BUTTON : ICON_BUTTON_STYLES} onClick={() => {
        window.scrollTo(0, 0);
      }}>
        <KeyboardArrowUpIcon
          sx={!darkMode ? { color: 'black', height: '30px' } : { color: 'white', height: '30px' }}
        />
      </IconButton>
      <div className={darkMode ? `${styles.textMedia} ${styles.darkBG}` : styles.textMedia}>
        <p>Weather data provided by OpenWeather</p>
      </div>
    </div>
  );
}

export default FooterComp;