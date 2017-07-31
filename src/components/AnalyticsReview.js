import React from 'react'
import { Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const AnalyticsReview = ({review}) => {
  
  return(
    <Feed>
      <Feed.Event>
        <Feed.Label>
          <Link to={`/winelist/${review.wine.id}`}><img src={review.wine.image} /></Link>
        </Feed.Label>
        <Feed.Content>
          {review.user.username} reviewed: {review.wine.name}
          <br></br>
					{review.user.username} rated this wine : {review.user_rating} out of 10
          <br></br>
					{review.content}
        </Feed.Content>
      </Feed.Event>
    </Feed>
  )
}

 export default AnalyticsReview
