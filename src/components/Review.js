import React from 'react'
import { List } from 'semantic-ui-react'

const Review = ({ review }) => {
  return(
      <List.Item>
        <List.Icon name='comment' verticalAlign='middle' />
        <List.Content>
          <List.Header>"{review.content}"</List.Header>
          <List.Description style={{ fontSize: '0.75em' }}>Rating: {review.user_rating} out of 10</List.Description>
        </List.Content>
      </List.Item>
  )
}

export default Review
