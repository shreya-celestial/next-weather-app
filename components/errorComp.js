import styles from '../styles/err.module.css'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material'

const MESSAGE = "Something went wrong. Please try again!"

const ErrorComp = ({ msg, darkMode, onClose }) => {

  if (!msg) {
    msg = MESSAGE
  }

  return (
    <div className={darkMode ? `${styles.errMsg} ${styles.dark}` : styles.errMsg}>
      <div>
        <ReportGmailerrorredIcon />
        <p>{msg}</p>
      </div>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </div>
  );
}

export default ErrorComp;