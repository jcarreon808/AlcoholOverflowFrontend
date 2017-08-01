import React from 'react'
import {Link} from 'react-router-dom'
import { Card, Icon, Image, Grid, Button, Label } from 'semantic-ui-react'

const Wine = ({ wineDetail, handleCurrentWine, handleUpVotes, handleDownVotes, toggle, handleToggle }) => {

	return(
		<Grid.Column textAlign='center' width={5}>
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
					{toggle ?
		      <Card.Description>
						Varietal: {wineDetail.varietal}<br/>
						Vintage: {wineDetail.vintage}<br/>
						Region: {wineDetail.region}<br/>
						Winery: {wineDetail.winery}<br/>
						Type: {wineDetail.wine_type}<br/>
 					 <Button basic color='black' onClick={handleToggle}>Hide details</Button>
					 </Card.Description> :
					 <Button basic color='black' onClick={handleToggle}>Show more</Button>
				 }
		    </Card.Content>
		    <Card.Content extra>
				<Label as='a' basic color='blue'>User Votes: {wineDetail.user_vote === null ? 0 : wineDetail.user_vote}</Label>
				<br></br>
				<Button inverted color='green' onClick={() => handleUpVotes(wineDetail.id)} icon>
				 <Icon name='thumbs outline up' />
				</Button>
				<Button inverted color='red' onClick={() => handleDownVotes(wineDetail.id)} icon>
				 <Icon name='thumbs outline down' />
				</Button>
					<br></br>
					<br></br>
					<Link to={`/winelist/${wineDetail.id}`}>See Reviews</Link><br/>
					<a href={wineDetail.link} target="_blank">More Info</a>
		    </Card.Content>
		  </Card>
		</Grid.Column>
	)
}

export default Wine
