import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'

const Wine = ({ wineDetail, handleCurrentWine }) => {
	return(
		<Grid.Column>
			<Card key={wineDetail.id}>
		    <Image src={`${wineDetail.image}`} />
		    <Card.Content>
		      <Card.Header>
		        {wineDetail.name}
		      </Card.Header>
		      <Card.Meta>
		        <span className='date'>
		          Price: ${wineDetail.price}
		        </span>
		      </Card.Meta>
		      <Card.Description>
		        Varietal: {wineDetail.varietal}<br/>
						Region: {wineDetail.region}<br/>
						Winery: {wineDetail.winery}<br/>
						Type: {wineDetail.wine_type}<br/>
		      </Card.Description>
		    </Card.Content>
		    <Card.Content extra>
					<Link to={`/winelist/${wineDetail.id}`} onClick={() => handleCurrentWine(wineDetail.id)}>See Reviews</Link><br/>
					<a href={wineDetail.link} target="_blank">More Info</a>
		    </Card.Content>
		  </Card>
		</Grid.Column>
	)
}

export default Wine
