import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class Analytics extends Component {

  render() {
    console.log(this.props.getAverageRating())
    const orderedRating = this.props.getAverageRating().sort((a,b) =>{
      return b.average - a.average
    }).slice(0, 5)

    console.log(this.props.getAverageRating())
    return(
      <Grid columns={3} divided>
          <Grid.Row>
              <Grid.Column>
                  <h3>Top Five Wines</h3>
                  <ol>
                    {orderedRating.map(e => <li> {e.name} </li>)}
                  </ol>
              </Grid.Column>
              <Grid.Column>
                  <h3>Most Reviewed Wine</h3>

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
