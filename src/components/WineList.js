import React, { Component } from 'react'
import Wine from './Wine'
import SearchBar from './SearchBar'
import { Grid } from 'semantic-ui-react'

export default class WineList extends Component {

   render(){
     let filteredWines = this.props.wines.filter(wine => {
       const regex = new RegExp(this.props.searchTerm, 'gi')
       for (let key in wine) {
         if (wine[key] !== null && key !== 'reviews') {
           if (typeof wine[key] == 'string' ) {
             return !!wine[key].match(regex)
           }
         }
       }
     })

      return(
        <div>
					<SearchBar handleChange={this.props.handleChange} />
          <br/>
          <Grid columns={3} divided>
            <Grid.Row>
					    {filteredWines.map( wine => <Wine wineDetail={wine} /> )}
            </Grid.Row>
          </Grid>
        </div>
      )
   }
}
