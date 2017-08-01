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

	compareReviews = () => {
	 	const sortedRatings = [...this.state.currentReviews].sort((a,b) =>  a.user_rating - b.user_rating )
			return sortedRatings
	 }

   render(){
     const review = this.state.currentReviews.map(review => <AnalyticsReview review={review} /> )

      return(

      	<div className="homepage">
        <Grid celled>
          <Grid.Row columns='equal'>
            <Grid.Column columns={3}>
              <Analytics getMostReviewed={this.props.getMostReviewed}
                        getAverageRating={this.props.getAverageRating}
                        wines={this.props.wines} />
            </Grid.Column>
          </Grid.Row>
						<Grid.Row style={{ background: 'rgba(245, 243, 243, 0.5)', padding: '2em 7em', margin: '2em 10em' }}>
							<Grid.Column width={16}>
								<h1>Recent Reviews</h1>
                <br></br>
								{review}
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
      )
   }
}

export default Homepage
