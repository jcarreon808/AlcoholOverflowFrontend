import React, { Component } from 'react'
import { Input, Button, Grid, Segment } from 'semantic-ui-react'


export default class SearchBar extends Component {
   render(){
      return(
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Segment><Input icon='search' placeholder='Search...' onChange={this.props.handleChange} /></Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <Button.Group size='medium'>
                  <Button onClick={this.props.handleFilter} >White</Button>
                  <Button.Or />
                  <Button>Red</Button>
                  <Button.Or />
                  <Button>All</Button>
                </Button.Group>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
   }
}
