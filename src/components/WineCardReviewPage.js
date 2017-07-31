import React from 'react'
import { Image, Grid, Card } from 'semantic-ui-react'

const WineCardReviewPage = ({ currentWine }) => {
  return(
    <div>
    <Grid>
    <Grid.Row columns={2}>
      <Grid.Column style={{ padding: '4em' }}>
        <Image src={`${currentWine.image}`} size='small' />
      </Grid.Column>
      <Grid.Column>
        <Grid celled textAlign='center' style={{ padding: '1em 0' }} >
          <h4>{currentWine.name}</h4>
          <p>
            Varietal: {currentWine.varietal}<br/>
            Region: {currentWine.region}<br/>
            Winery: {currentWine.winery}<br/>
            Type: {currentWine.wine_type}<br/>
          </p>
          <h5>${currentWine.price}</h5>
        </Grid>
    </Grid.Column>
    </Grid.Row>
    </Grid>
    </div>
  )
}

export default WineCardReviewPage
