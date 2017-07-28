import React, { Component} from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'
import WineCardReviewPage from './WineCardReviewPage'
import { Grid } from 'semantic-ui-react'

class WineReviewPage extends Component {

  state = {
    content: '',
    user_rating: 0,
    currentWine: []
  }

  handleChange = (event) => (
    this.setState({ [event.target.id]: event.target.value })
  )

  handleSubmitReview = (event) => {
    event.preventDefault()
  	fetch('http://localhost:3000/api/v1/reviews', {
  		method: 'POST',
  		headers: {'Content-Type': 'application/json'},
  		body: JSON.stringify({
  			user_id: 1,
  			wine_id: this.props.match.params.id,
  			content: this.state.content,
        user_rating: this.state.user_rating
  		})
  	})
    .then(() => {
      document.getElementById('username').value = ""
      document.getElementById('content').value = ""
      this.fetchData()
    })
  }

  fetchData() {
    const id = this.props.match.params.id
    fetch(`http://localhost:3000/api/v1/wines/${id}`)
			.then(response => response.json())
			.then(data => this.setState({ currentWine: data }))
  }

  componentDidMount() {
    this.fetchData()
  }

	render(){
      return(
        <div>
          <Grid divided='vertically'>
            <Grid.Row columns={2}>
              <Grid.Column>
                <WineCardReviewPage currentWine={this.state.currentWine} />
              </Grid.Column>
              <Grid.Column>
                <ReviewList currentWine={this.state.currentWine} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <ReviewForm handleSubmit={this.handleSubmitReview} handleChange={this.handleChange} user_rating={this.state.user_rating} />
        </div>
      )
   }
}

export default WineReviewPage
