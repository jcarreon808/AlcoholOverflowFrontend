import React from 'react'
import Review from './Review'
import { List, Grid } from 'semantic-ui-react'

const ReviewList = ({ currentWine }) => {
  return(
    <div>
      <h2>Reviews</h2>
      <List divided relaxed style={{ height: '275px', overflow: 'scroll'}}>
        {currentWine.reviews ? currentWine.reviews.map(review => <Review review={review} />) : null }
      </List>
    </div>
  )
}

export default ReviewList
