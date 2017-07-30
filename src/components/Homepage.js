import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Feed } from 'semantic-ui-react'
import Analytics from './Analytics'
import AnalyticsReview from './AnalyticsReview'
class Homepage extends Component {

  state = {
    currentReviews:[]
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/reviews')
    .then(response => response.json())
    .then(data => this.setState({currentReviews:data}))
  }

   render(){
     const review = this.state.currentReviews.map(review => {
       return (
         <AnalyticsReview
            review={review}
         />
       )
     })

      return(
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              Data
            </Grid.Column>
            <Grid.Column width={13}>
              <Analytics />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              {review}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
   }
}

export default Homepage
