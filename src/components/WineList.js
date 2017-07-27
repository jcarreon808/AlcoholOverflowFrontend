import React, { Component } from 'react'
import Wine from './Wine'
import SearchBar from './SearchBar'
import {} from 'react-router-dom'

export default class WineList extends Component {
   render(){
   	const allWines = this.props.wines.map( wine => {
   		return( <Wine wineDetail={wine}/> )
		})
      return(
        <div>
					<SearchBar/>
					{allWines}
        </div>
      )
   }
}