import React, { Component } from 'react'
import { Input, Button } from 'semantic-ui-react'


export default class SearchBar extends Component {
   render(){
      return(
        <div className="search-bar">
          <Input icon='search' placeholder='Search...' onChange={this.props.handleChange} />
          <Button.Group size='medium'>
            <Button onClick={this.props.handleFilter} >White</Button>
            <Button.Or />
            <Button>Red</Button>
            <Button.Or />
            <Button>All</Button>
          </Button.Group>
        </div>
      )
   }
}
