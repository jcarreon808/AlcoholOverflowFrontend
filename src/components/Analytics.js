import React, { Component } from 'react'
import {Grid} from 'semantic-ui-react'
class Analytics extends Component {
	constructor(props){
		super(props)
	}

  render() {
		 const topFive = this.props.compareReviews().reverse()

		const topFiveMapped = topFive.map( (review)=> {
			return ( <Grid.Row key={review.id}> {review.wine.name} ({review.user_rating}) </Grid.Row>)
		})

		const topFiveWhite = topFive.map( review => {
			console.log(review)
			if(review.wine.wine_type === 'White Wine') {
				return (<Grid.Row key={review.id}> {review.wine.name} ({review.user_rating}) </Grid.Row>)
			}
		})

		const topFiveRed = topFive.map( review => {
			console.log(review)
			if(review.wine.wine_type === 'Red Wine') {
				return (<Grid.Row key={review.id}> {review.wine.name} ({review.user_rating}) </Grid.Row>)
			}
		})

    return(
      <div className="analytics-grid">
				<Grid columns='three' divided>
					<Grid.Row>
						<Grid.Column>
							<h1>Top Five</h1>
							{topFiveMapped}
						</Grid.Column>
						<Grid.Column>
							<h1>Top White</h1>
							{topFiveWhite}
						</Grid.Column>
						<Grid.Column>
							<h1>Top Red</h1>
							{topFiveRed}
						</Grid.Column>
					</Grid.Row>
				</Grid>

			</div>
    )
  }
}

export default Analytics
