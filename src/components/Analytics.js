import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Grid, Image, Card, Feed } from 'semantic-ui-react'

class Analytics extends Component {
	constructor(props){
		super(props)
	}


  render() {
    const orderedRating = this.props.getAverageRating().sort((a,b) =>{
      return b.average - a.average
    }).slice(0, 5)

    const mostReviewed = this.props.getMostReviewed().slice(0,1)

    const wineOfTheWeek = this.props.wines[Math.floor(Math.random()*this.props.wines.length)]

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
                  {mostReviewed[0] ?
                  <Grid>
                  <Grid.Row>
                    <Grid.Column>
                      <center><h4><u>{mostReviewed[0].name}</u></h4></center>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row columns={2}>
                    <Grid.Column>
                      <Link to={`/winelist/${mostReviewed[0].id}`}><Image src={`${mostReviewed[0].image}`} size='medium'/></Link>
                    </Grid.Column>
                    <Grid.Column>
                      <p>
                      <b><i>Varietal:</i></b> {mostReviewed[0].varietal}<br/>
                      <b><i>Region:</i></b> {mostReviewed[0].region}<br/>
                      <b><i>Winery:</i></b> {mostReviewed[0].winery}<br/>
                      <b><i>Type:</i></b> {mostReviewed[0].wine_type}<br/>
                      </p>
                    </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  : null }
              </Grid.Column>

              <Grid.Column>
                  <h3>Wine of the day</h3>
                  {this.props.wines.length > 0 ?
                    <Grid>
                    <Grid.Row>
                      <Grid.Column>
                        <center><h4><u>{wineOfTheWeek.name}</u></h4></center>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                      <Grid.Column>
                        <Link to={`/winelist/${wineOfTheWeek.id}`}><Image src={`${wineOfTheWeek.image}`} size='medium'/></Link>
                      </Grid.Column>
                      <Grid.Column>
                        <p>
                        <b><i>Varietal:</i></b> {wineOfTheWeek.varietal}<br/>
                        <b><i>Region:</i></b> {wineOfTheWeek.region}<br/>
                        <b><i>Winery:</i></b> {wineOfTheWeek.winery}<br/>
                        <b><i>Type:</i></b> {wineOfTheWeek.wine_type}<br/>
                        </p>
                      </Grid.Column>
                      </Grid.Row>
                    </Grid>
                   : null}
              </Grid.Column>
              
          </Grid.Row>
      </Grid>
    )
  }
}

export default Analytics
