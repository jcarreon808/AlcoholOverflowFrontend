import React, { Component} from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import WineCardReviewPage from './WineCardReviewPage'
import { Grid } from 'semantic-ui-react'

class WineReviewPage extends Component {

  state = {
    content: ''
  }

  handleContentChange = (event) => (
    this.setState({ content: event.target.value })
  )

  handleSubmitReview = () => (
  	fetch('http://localhost:3000/api/v1/reviews', {
  		method: 'POST',
  		headers: {'Content-Type': 'application/json'},
  		body: JSON.stringify({
  			user_id: 1,
  			wine_id: this.props.currentWine.id,
  			content: this.state.content
  		})
  	})
  )

	render(){
      return(
        <div>
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <WineCardReviewPage currentWine={this.props.currentWine} />
              </Grid.Column>
              <Grid.Column>
                <ReviewList currentWine={this.props.currentWine} wines={this.props.wines}/>
              </Grid.Column>  
            </Grid.Row>
          </Grid>
          <ReviewForm handleSubmit={this.handleSubmitReview} handleChange={this.handleContentChange}/>
        </div>
      )
   }
}

export default WineReviewPage
