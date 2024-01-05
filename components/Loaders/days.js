import styles from '../../styles/NextDays.module.css'

const DaysData = ({ darkMode, forecast }) => {
  return (
    <div>
      <h1 className={styles.heading}>Next 5 Days</h1>
      <div className={darkMode ? `${styles.dayData} ${styles.darkDayData}` : styles.dayData}>
        {forecast?.list?.map((item) => (
          <div key={item.dt}>
            <div>
              <p className={styles.bigLoader}></p>
              <p className={styles.bigLoader}></p>
            </div>
            <div className={styles.dayWeather}>
              <p className={styles.imgLoader}></p>
              <div>
                <p className={styles.smallLoader}><b></b></p>
                <p className={`${styles.colorText} ${styles.smallLoader}`}></p>
              </div>
            </div>
          </div>
        ))}
        <div className={darkMode ? styles.darkExtraDiv : styles.extraDiv}></div>
        <div className={darkMode ? styles.darkExtraDiv : styles.extraDiv}></div>
      </div>
    </div>
  );
}

export default DaysData;