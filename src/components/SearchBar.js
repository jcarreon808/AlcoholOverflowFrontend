import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'


export default class SearchBar extends Component {
   render(){
      return(
        <div className="search-bar">
          <Input icon='search' placeholder='Search...' onChange={this.props.handleChange} />
        </div>
      )
   }
}
