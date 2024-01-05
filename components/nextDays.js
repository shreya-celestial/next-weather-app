import styles from '../styles/NextDays.module.css'
import moment from 'moment'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react';

function addDays(days) {
  const date = new Date();
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}
const DAYS = [addDays(0), addDays(1), addDays(2), addDays(3), addDays(4), addDays(5)]

const NextDaysData = ({ darkMode, forecast }) => {
  const daysRef = useRef();
  const pRef = useRef()
  const [data, setData] = useState(forecast)
  const [currentActive, setCurrentActive] = useState();

  useEffect(() => {
    if (currentActive) {
      const daysDiv = [...daysRef.current.children];
      daysDiv.map((dayP) => {
        dayP.className = ''
      })
      currentActive.className += darkMode ? ` ${styles.darkAllDaysActive}` : ` ${styles.active}`
    }
  }, [darkMode])

  const handleClick = (day, e) => {
    const daysDiv = [...daysRef.current.children];
    daysDiv.map((dayP) => {
      dayP.className = ''
    })
    setCurrentActive(e.target)
    e.target.className += darkMode ? ` ${styles.darkAllDaysActive}` : ` ${styles.active}`
    const dataList = forecast.list.filter((dataItem) => {
      return moment.unix(dataItem.dt).format('D MMM ddd') === moment(day).format('D MMM ddd')
    })
    const data = {
      list: dataList
    }
    setData(data)
  }

  return (
    <div>
      <h1 className={styles.heading}>Next 5 Days</h1>
      <div ref={daysRef} className={darkMode ? `${styles.allDays} ${styles.darkAllDays}` : styles.allDays}>
        <p ref={pRef} className={darkMode ? ` ${styles.darkAllDaysActive}` : ` ${styles.active}`} onClick={(e) => {
          const daysDiv = [...daysRef.current.children];
          daysDiv.map((dayP) => {
            dayP.className = ''
          })
          setCurrentActive(pRef.current)
          setData(forecast)
          e.target.className += darkMode ? ` ${styles.darkAllDaysActive}` : ` ${styles.active}`
        }}>All Days</p>
        {DAYS.map((day) => (
          <p key={day.toDateString()} onClick={(e) => { handleClick(day, e) }}>{moment(day).format('D MMM ddd')}</p>
        ))}
      </div>
      <div className={darkMode ? `${styles.dayData} ${styles.darkDayData}` : styles.dayData}>
        {data?.list?.map((item) => (
          <div key={item.dt}>
            <div>
              <p className={styles.colorText}>{moment.unix(item.dt).format('D MMM ddd')}</p>
              <p>{moment.unix(item.dt).format('HH:mm')}</p>
            </div>
            <div className={styles.dayWeather}>
              <Image src={`https://weather-pekkiriscim.vercel.app/src/img/animated/${item.weather[0].icon}.svg`} alt='' width={40} height={40} />
              <div>
                <p><b>{(item.main.temp.toString()).substring(0, 4)}°C</b></p>
                <p className={styles.colorText}>{item.weather[0].main}</p>
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

export default NextDaysData;