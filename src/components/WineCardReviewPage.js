import React from 'react'
import { Image, Grid, Card, Feed } from 'semantic-ui-react'

const WineCardReviewPage = ({ currentWine }) => {
  return(
    <div>
    <Card>
      <Card.Content>
        <Card.Header>
          <center>{currentWine.name}</center>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Image src={`${currentWine.image}`} />
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
    </div>
  )
}

export default WineCardReviewPage
//
// <Grid celled verticalAlign='middle' columns={2} centered>
//   <Grid.Column style={{ padding: '4em' }}>
//     <Image src={`${currentWine.image}`} size='small' />
//   </Grid.Column>
//   <Grid.Column>
//     <Grid textAlign='center' style={{ padding: '1em 0' }} >
//       <h4>{currentWine.name}</h4>
//       <p>
//         <b><i>Varietal:</i></b> {currentWine.varietal}<br/>
//         <b><i>Region:</i></b> {currentWine.region}<br/>
//         <b><i>Winery:</i></b> {currentWine.winery}<br/>
//         <b><i>Type:</i></b> {currentWine.wine_type}<br/>
//       </p>
//       <h5>${currentWine.price}</h5>
//     </Grid>
// </Grid.Column>
// </Grid>
