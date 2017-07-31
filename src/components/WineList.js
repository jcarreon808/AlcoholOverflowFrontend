import React, { Component } from 'react'
import Wine from './Wine'
import { Grid, Input, Button, Card } from 'semantic-ui-react'

export default class WineList extends Component {

   render(){
     let filteredWines = this.props.wines.filter(wine => {
       const regex = new RegExp(this.props.searchTerm, 'gi')
       for (let key in wine) {
         if (wine[key] !== null && key !== 'reviews') {
           if (typeof wine[key] === 'string' ) {
             return !!wine[key].match(regex)
           }
         }
       }
     })

      return(
        <div>
          <Input icon='search' placeholder='Search...' onChange={this.props.handleChange} />
          <Button.Group size='medium'>
            <Button onClick={this.props.handleFilter} name='white' >White</Button>
            <Button.Or />
            <Button onClick={this.props.handleFilter} name='red' >Red</Button>
            <Button.Or />
            <Button onClick={this.props.handleFilter} name='all' >All</Button>
          </Button.Group>
          <br/>
          <Grid columns={3} divided>
					  {filteredWines.map( wine => <Wine key={wine.id} wineDetail={wine} handleUpVotes={this.props.handleUpVotes} handleDownVotes={this.props.handleDownVotes}/> )}
          </Grid>
        </div>
      )
   }
}
