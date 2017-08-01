import React from 'react'
import { Image, Grid, Card, Feed } from 'semantic-ui-react'

const WineCardReviewPage = ({ currentWine }) => {
  return(
    <Card>
      <Card.Content>
        <Card.Header>
          <center>{currentWine.name}</center>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Image src={`${currentWine.image}`} size='small' />
            <Feed.Content>
              <Card.Description>
                <p>
                  <b><i>Varietal:</i></b> {currentWine.varietal}<br/>
                  <b><i>Region:</i></b> {currentWine.region}<br/>
                  <b><i>Winery:</i></b> {currentWine.winery}<br/>
                  <b><i>Type:</i></b> {currentWine.wine_type}<br/>
                </p>
                <h5>${currentWine.price}</h5>
              </Card.Description>
            </Feed.Content>
          </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
  )
}

export default WineCardReviewPage
