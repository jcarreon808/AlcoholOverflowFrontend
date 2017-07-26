import React, { Component } from 'react'
import {FormControl, Button} from 'react-bootstrap'

export default class SearchBar extends Component {
   render(){
      return(
        <div className="search-bar">
					<FormControl
						type="text"
						placeholder='Search...'
						onChange={this.handleInput}
					/>
					<Button bsStyle="primary">Search</Button>

        </div>
      )
   }
}