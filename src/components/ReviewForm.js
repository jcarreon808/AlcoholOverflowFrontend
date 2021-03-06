import React from 'react'
import { Button, Form, Input, TextArea, Rating, Container, Segment } from 'semantic-ui-react'

const ReviewForm = (props) => {
    return(
        <Form onSubmit={props.handleSubmit}>
          <h3>Add a New Review:</h3>
          <Form.Field id='username'
                      control={Input}
                      label='Username'
                      placeholder='Username' />

          <Form.Field id='content'
                      control={TextArea}
                      label='Review'
                      placeholder='Review'
                      onChange={props.handleChange} />

          <div>Rating: {props.user_rating}</div>
          <input type='range' min={0} max={10} id='user_rating' value={props.user_rating} onChange={props.handleChange} />
          <br/>
          <Rating rating={props.user_rating} maxRating={10} />
          <br/><br/>

          <Button>Submit</Button>
        </Form>
    )
}

export default ReviewForm
