import React, { Component } from 'react'
import Wine from './Wine'
import { Grid, Input, Button, Card , Divider, Select } from 'semantic-ui-react'

export default class WineList extends Component {

  state = {
    toggle: false
  }

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle})
  }

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

     let sortOptions = [
       {
         text: 'Price (low to high)',
         value: 'Price (low to high)'
       },
       {
         text: 'Price (high to low)',
         value: 'Price (high to low)'
       },
       {
         text: 'Vintage (newest first)',
         value: 'Vintage (newest first)'
       },
       {
         text: 'Vintage (oldest first)',
         value: 'Vintage (oldest first)'
       }
     ]

      return(
        <div className="winelist">
          <center>
          <Input icon='search' placeholder='Search...' onChange={this.props.handleChange} />
          <Button.Group size='medium'>
            <Button inverted color='standard' onClick={this.props.handleFilter} name='white' >White</Button>
            <Button.Or />
            <Button inverted color='red' onClick={this.props.handleFilter} name='red' >Red</Button>
            <Button.Or />
            <Button inverted color='instagram' onClick={this.props.handleFilter} name='all' >All</Button>
          </Button.Group>
          <Select placeholder='Sort By' options={sortOptions} onChange={(e, {value}) => this.props.handleSort(value)} />
          </center>
          <Divider horizontal></Divider>
          <Grid container columns={3} divided='vertically'>
            <Grid.Row centered columns={3}>
					    {filteredWines.map( wine => <Wine key={wine.id} toggle={this.state.toggle} handleToggle={this.handleToggle} wineDetail={wine} handleUpVotes={this.props.handleUpVotes} handleDownVotes={this.props.handleDownVotes}/> )}
            </Grid.Row>
          </Grid>
        </div>
      )
   }
}
