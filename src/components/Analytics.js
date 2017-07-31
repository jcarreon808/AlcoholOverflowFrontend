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

    console.log(this.props.wines)
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

                      {mostReviewed.map(e =>
                        <Link to={`/winelist/${e.id}`}>
                        <Card>
                          <Card.Content>
                          <Card.Header>
                            <center>{e.name}</center>
                          </Card.Header>
                          <Feed>
                            <Feed.Event>
                            <Image src={`${e.image}`} size='medium'/>
                              <Feed.Content>
                                <Card.Description>
                                  <p>
                                  <b><i>Varietal:</i></b> {e.varietal}<br/>
                                  <b><i>Region:</i></b> {e.region}<br/>
                                  <b><i>Winery:</i></b> {e.winery}<br/>
                                  <b><i>Type:</i></b> {e.wine_type}<br/>
                                  </p>
                                </Card.Description>
                              </Feed.Content>
                            </Feed.Event>
                          </Feed>
                          </Card.Content>
                        </Card>
                      </Link>
                    )}

              </Grid.Column>
              <Grid.Column>
                  <h3>Wine of the day</h3>

                  {this.props.wines.length > 0 ?
                  <Link to={`/winelist/${wineOfTheWeek.id}`}>
                  <Card>
                    <Card.Content>
                    <Card.Header>
                      <center>{wineOfTheWeek.name}</center>
                    </Card.Header>
                    <Feed>
                      <Feed.Event>
                      <Image src={`${wineOfTheWeek.image}`} size='medium'/>
                        <Feed.Content>
                          <Card.Description>
                            <p>
                            <b><i>Varietal:</i></b> {wineOfTheWeek.varietal}<br/>
                            <b><i>Region:</i></b> {wineOfTheWeek.region}<br/>
                            <b><i>Winery:</i></b> {wineOfTheWeek.winery}<br/>
                            <b><i>Type:</i></b> {wineOfTheWeek.wine_type}<br/>
                            </p>
                          </Card.Description>
                        </Feed.Content>
                      </Feed.Event>
                    </Feed>
                    </Card.Content>
                  </Card>
                  </Link>
                   : null}

              </Grid.Column>
          </Grid.Row>
      </Grid>
    )
  }
}

export default Analytics
