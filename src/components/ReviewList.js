import React from 'react'
import Review from './Review'

const ReviewList = ({ currentWine }) => {
  // console.log(currentWine.reviews[0].content)
  return(
    <div>
      {currentWine.reviews ? currentWine.reviews.map(review => <Review review={review} />) : null }
    </div>
  )
}

export default ReviewList

//
