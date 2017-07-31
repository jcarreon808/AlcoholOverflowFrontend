import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Icon, Image, Grid, Button } from 'semantic-ui-react'

const Wine = ({ wineDetail, handleCurrentWine, handleUpVotes, handleDownVotes }) => {

	return(
		<Grid.Column>
			<Card key={wineDetail.id}>
		    <Image src={`${wineDetail.image}`} size='small' centered />
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
				User Votes: {wineDetail.user_vote === null ? 0 : wineDetail.user_vote}
				<br></br>
				<Button onClick={() => handleUpVotes(wineDetail.id)} icon>
				 <Icon name='thumbs outline up' />
				</Button>
				<Button onClick={() => handleDownVotes(wineDetail.id)} icon>
				 <Icon name='thumbs outline down' />
				</Button>
					<br></br>
					<Link to={`/winelist/${wineDetail.id}`}>See Reviews</Link><br/>
					<a href={wineDetail.link} target="_blank">More Info</a>
		    </Card.Content>
		  </Card>
		</Grid.Column>
	)
}

export default Wine
