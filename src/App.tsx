import React, { useEffect, useState, useRef } from 'react';
import Timer from './components/timer/Timer';
import { FaFacebookSquare, FaInstagram, FaPinterest } from 'react-icons/fa'
import { timeRemaining, msEndDate } from './utils/index'
import './App.css';

//app component props type
export type AppTypes = {
  day: { value: string, isAnime: boolean },
  hour: { value: string, isAnime: boolean },
  minute: { value: string, isAnime: boolean },
  second: { value: string, isAnime: boolean },
}

// define the end time: 14 for 14 days from now
let endTime = msEndDate(14)

// App component
function App() {

  const [time, setTime] = useState<AppTypes>({
    day: { value: "00", isAnime: false },
    hour: { value: "00", isAnime: false },
    minute: { value: "00", isAnime: false },
    second: { value: "00", isAnime: false },
  })

  // get current times
  let { days, hours, minutes, seconds, deltaTime } = timeRemaining(endTime)

  // setInterval timer holder
  let timerRef = useRef(null) as any
  // set the size of social media icons
  let iconsSize = 35

  useEffect(() => {
    setTime(v => ({
      ...v,
      second: { ...v.second, value: seconds },
      minute: { ...v.minute, value: minutes },
      hour: { ...v.hour, value: hours },
      day: { ...v.day, value: days }
    }))
  }, [days, hours, minutes, seconds])

  //reset the states handler
  function resetState() {
    setTime({
      day: { value: '00', isAnime: false },
      hour: { value: '00', isAnime: false },
      minute: { value: '00', isAnime: false },
      second: { value: '00', isAnime: false },
    })
  }


  useEffect(() => {

    clearInterval(timerRef.current)

    //update only if their is time remaining
    if (deltaTime >= 0) {
      timerRef.current = setInterval(() => {
        updateCardFlip()

      }, 1000)

    }

    return () => {
      clearInterval(timerRef.current)
    }
  })

  // flip card handler
  function updateCardFlip() {
    let { day, hour, minute, second } = time

    //do not update when time is up
    if (deltaTime === 0) {
      resetState()
      return
    }

    if (second.value !== '00') {
      setTime(v => ({
        ...v,
        second: { ...v.second, isAnime: !v.second.isAnime }
      }))
    } else if (minute.value !== '00') {
      setTime(v => ({
        ...v,
        second: { ...v.second, isAnime: !v.second.isAnime },
        minute: { ...v.minute, isAnime: !v.minute.isAnime }
      }))
    } else if (hour.value !== '00') {
      setTime(v => ({
        ...v,
        second: { ...v.second, isAnime: !v.second.isAnime },
        minute: { ...v.minute, isAnime: !v.minute.isAnime },
        hour: { ...v.hour, isAnime: !v.hour.isAnime }
      }))
    } else if (day.value !== '00') {
      setTime(v => ({
        ...v,
        second: { ...v.second, isAnime: !v.second.isAnime },
        minute: { ...v.minute, isAnime: !v.minute.isAnime },
        hour: { ...v.hour, isAnime: !v.hour.isAnime },
        day: { ...v.day, isAnime: !v.day.isAnime }
      }))

    }

  }


  return (
    <div className="App">
      <div className='wrapper'>
        <header >
          <h1>WE'RE LAUNCHING SOON</h1>
        </header>
        <main>
          <Timer {...time} />
        </main>
        <footer>
          <a className='media-icon' href="https:www.facebook.com">
            <FaFacebookSquare size={iconsSize} />
          </a>
          <a className='media-icon' href="https:www.pinterest.com">
            <FaPinterest className='media-icon' size={iconsSize} />
          </a>
          <a className='media-icon' href="https:www.instagram.com">
            <FaInstagram className='media-icon' size={iconsSize} />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
