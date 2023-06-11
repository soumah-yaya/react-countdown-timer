import React from 'react'
import './card.css'

type CardType = {
    timeData: { value: string, isAnime: boolean };
}

// Card component
const Card = ({ timeData }: CardType) => {
    let { isAnime } = timeData
    let className_fold = isAnime ? 'flip-card fold ' : 'flip-card unfold'
    let className_unfold = !isAnime ? 'flip-card fold ' : 'flip-card unfold'

    return (
        <div className='card'>
            <div className=' upper-card'>
                <span >{timeData.value}</span>
            </div>
            <div className='lower-card'>
                <span >{timeData.value}</span>
            </div>
            <div className={className_fold}>
                <span>{timeData.value}</span>
            </div>
            <div className={className_unfold}>
                <span>{timeData.value}</span>
            </div>

        </div>
    )
}

export default Card

