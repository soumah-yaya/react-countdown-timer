import React from 'react'
import Card from '../card/Card'
import './digit-card.css'

type DigitCardType = {
  timeData: { value: string, isAnime: boolean },
  title: string,
}

// DigitCard component
const DigitCard = ({ timeData, title }: DigitCardType) => {

  return (
    <div className='digit-card'>
      <Card timeData={timeData}/>
      <p>{title}</p>
    </div>
  )
}

export default DigitCard