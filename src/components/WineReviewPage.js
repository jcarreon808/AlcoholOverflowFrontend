import React, { Component} from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

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
          <ReviewForm handleSubmit={this.handleSubmitReview} handleChange={this.handleContentChange}/>
          <ReviewList currentWine={this.props.currentWine} wines={this.props.wines}/>
        </div>
      )
   }
}

export default WineReviewPage
