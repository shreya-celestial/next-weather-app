import Image from 'next/image'
import logo from '/public/favicon.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { IconButton } from '@mui/material'
import GpsFixedSharpIcon from '@mui/icons-material/GpsFixedSharp';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '/styles/SearchHeader.module.css'
import { useRouter } from 'next/router'

export const ICON_BUTTON_STYLES = {
  backgroundColor: '#f8fafc',
  padding: '30px 20px',
  height: '30px',
  borderRadius: '10px',
  marginBottom: '10px'
}

export const DARK_BUTTON = {
  backgroundColor: '#1e293b',
  padding: '30px 20px',
  height: '30px',
  borderRadius: '10px',
  marginBottom: '10px'
}

const SearchHeader = ({ darkMode, onDark, onOrigin, onSearch }) => {
  const router = useRouter()

  const handleGit = () => {
    router.push('https://github.com/shreya-celestial/next-weather-app')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(e.target.elements.search.value);
  }

  return (
    <div className={styles.header}>
      <div className={darkMode ? `${styles.logo} ${styles.darkBG}` : styles.logo}>
        <Image src={logo} alt='' width={25} height={25} className={darkMode ? styles.darkImg : ''} />
        <p>weather</p>
      </div>
      <form className={darkMode ? `${styles.input} ${styles.darkBG}` : styles.input} onSubmit={handleSearch}>
        <SearchOutlinedIcon
          sx={!darkMode ? { color: 'black', height: '30px', fontSize: 'xxx-large' } : { color: 'white', height: '30px', fontSize: 'xxx-large' }}
        />
        <input type="text" placeholder='Ankara' name='search' />
      </form>
      <div className={styles.locButton}>
        <IconButton sx={darkMode ? DARK_BUTTON : ICON_BUTTON_STYLES} onClick={onOrigin}>
          <GpsFixedSharpIcon
            sx={!darkMode ? { color: 'black', height: '30px' } : { color: 'white', height: '30px' }}
          />
        </IconButton>
      </div>
      <IconButton sx={darkMode ? DARK_BUTTON : ICON_BUTTON_STYLES} onClick={() => {
        onDark(!darkMode)
      }}>
        {!darkMode && <DarkModeOutlinedIcon sx={{ color: 'black', height: '30px' }} />}
        {darkMode && <LightModeIcon sx={{ color: 'white', height: '30px' }} />}
      </IconButton>
      <div className={darkMode ? `${styles.git} ${styles.whiteGit}` : styles.git} onClick={handleGit}>
        <GitHubIcon sx={darkMode ? { color: 'black !important', height: '25px' } : { color: 'white', height: '25px' }} />
        <p>Support Project</p>
      </div>
      <form className={darkMode ? `${styles.inputMedia} ${styles.darkBG}` : styles.inputMedia} onSubmit={handleSearch}>
        <SearchOutlinedIcon
          sx={!darkMode ? { color: 'black', height: '30px', fontSize: 'xxx-large' } : { color: 'white', height: '30px', fontSize: 'xxx-large' }}
        />
        <input type="text" placeholder='Ankara' name='search' />
      </form>
      <div className={styles.locButtonMedia}>
        <IconButton sx={darkMode ? DARK_BUTTON : ICON_BUTTON_STYLES} onClick={onOrigin}>
          <GpsFixedSharpIcon sx={!darkMode ? { color: 'black', height: '30px' } : { color: 'white', height: '30px' }} />
        </IconButton>
      </div>
    </div>
  );
}

export default SearchHeader;