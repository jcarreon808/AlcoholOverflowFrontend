import React, { Component } from 'react'
import {Grid, Col, FormControl, Button} from 'react-bootstrap'


export default class SearchBar extends Component {
   render(){
      return(
        <div className="search-bar">
					<Grid>
					<Col xs={12} md={8}>
						<FormControl
							type="text"
							placeholder='Search...'
							onChange={this.handleInput}
						/>
					</Col>
					<Col xs={6} md={4}>
						<Button bsStyle="primary" className="search-button">Search</Button>
					</Col>
					</Grid>
        </div>
      )
   }
}