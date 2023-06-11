import React from 'react'
import DigitCard from '../digit-card/DigitCard'
import { AppTypes } from '../../App'
import './timer.css'

//Timer component
const Timer = ({ ...time }: AppTypes) => {
  let {day,hour,minute,second} = time

  return (
    <div className='timer'>
      <DigitCard title="DAYS" timeData={day} />
      <DigitCard title="HOURS" timeData={hour} />
      <DigitCard title="MINUTES" timeData={minute} />
      <DigitCard title="SECONDS" timeData={second} />
    </div>
  )
}

export default Timer