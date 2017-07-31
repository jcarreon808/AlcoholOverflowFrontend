import React from 'react'
import Review from './Review'
import { List, Grid } from 'semantic-ui-react'

const ReviewList = ({ currentWine }) => {
  return(
    <div style={{ margin: '0 4em 0 1em' }}>
      <h2>Reviews</h2>
      <List divided relaxed style={{ height: '275px', overflowY: 'scroll' }}>
        {currentWine.reviews ? currentWine.reviews.map(review => <Review review={review} />) : null }
      </List>
    </div>
  )
}

export default ReviewList
