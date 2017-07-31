import React, { Component } from 'react'

import {Grid} from 'semantic-ui-react'
class Analytics extends Component {
	constructor(props){
		super(props)
	}


  render() {
    const orderedRating = this.props.getAverageRating().sort((a,b) =>{
      return b.average - a.average
    }).slice(0, 5)

    return(
      <Grid columns={3} divided>
          <Grid.Row>
              <Grid.Column>
                  <h3>Top Five</h3>
                  <ul>
                    {orderedRating.map(e => <li> {e.name} </li>)}
                  </ul>
              </Grid.Column>
              <Grid.Column>
                  <h3>Most Reviewed</h3>

              </Grid.Column>
              <Grid.Column>
                  <h3>Wine of the week</h3>

              </Grid.Column>
          </Grid.Row>
      </Grid>
    )
  }
}

export default Analytics
