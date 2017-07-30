import React from 'react'
import Review from './Review'

const ReviewList = ({ currentWine }) => {
  return(
    <div>
      {currentWine.reviews ? currentWine.reviews.map(review => <Review review={review} />) : null }
    </div>
  )
}

export default ReviewList
