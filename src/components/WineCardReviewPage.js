import React from 'react'
import { Image, Grid, Card } from 'semantic-ui-react'

const WineCardReviewPage = ({ currentWine }) => {
  return(
    <div>
    <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Image src={`${currentWine.image}`} size='small' />
      </Grid.Column>
      <Grid.Column>
        <Card>
          <Card.Content header={currentWine.name} />

          <Card.Description>
            Varietal: {currentWine.varietal}<br/>
            Region: {currentWine.region}<br/>
            Winery: {currentWine.winery}<br/>
            Type: {currentWine.wine_type}<br/>
          </Card.Description >
          <Card.Content extra>
            ${currentWine.price}
        </Card.Content>
      </Card>
    </Grid.Column>
    </Grid.Row>
    </Grid>
    </div>
  )
}

export default WineCardReviewPage
