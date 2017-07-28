import React from 'react'
import { Button, Form, Input, TextArea, } from 'semantic-ui-react'

const ReviewForm = (props) => {
    return(
      <Form onSubmit={props.handleSubmit}>
        <Form.Field id='form-input-control-last-name'
                    control={Input}
                    label='Username'
                    placeholder='Username' />
        <Form.Field id='content'
                    control={TextArea}
                    label='Review'
                    placeholder='Review'
                    onChange={props.handleChange} />
        <Button>Submit</Button>
      </Form>
    )
}

export default ReviewForm
