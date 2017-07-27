import React from 'react'
import {Grid, Well, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Wine = ({ wineDetail }) => {
	return(
			<Grid>
				<Well>
				<Row>
					<Col md={6}>
						<h2>{wineDetail.name}</h2>
						<img src={`${wineDetail.image}`}/>
					</Col>
					<Col md={6} className="wine-col-detail">
						<h6>Varietal: {wineDetail.varietal}</h6>
						<h6>Rank: {wineDetail.rank}</h6>
						<h6>Region: {wineDetail.region}</h6>
						<h6>Winery: {wineDetail.winery}</h6>
						<h6>Vintage: {wineDetail.vintage}</h6>
						<h6>Type: {wineDetail.wine_type}</h6>
						<h6>Price: {wineDetail.price}</h6>
						<a href={wineDetail.link} target="_blank">More Info</a>
					</Col>
				</Row>
				</Well>
			</Grid>
	)
}

export default Wine