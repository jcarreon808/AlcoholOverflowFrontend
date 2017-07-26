import React from 'react'
import {Well, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Wine = ({ wineDetail }) => {
	return(
		<Well>
			<Row>
				<Col xs={12}>
					<h2>{wineDetail.name}</h2>
					<img src={`${wineDetail.image}`}/>
					<p>{wineDetail.rank}</p>
					<p>{wineDetail.region}</p>
					<p>{wineDetail.winery}</p>
					<p>{wineDetail.varietal}</p>
					<p>{wineDetail.vintage}</p>
					<p>{wineDetail.wine_type}</p>
					<p>{wineDetail.price}</p>
					<a href={wineDetail.link} target="_blank">More Info</a>
				</Col>
			</Row>
		</Well>
	)
}

export default Wine