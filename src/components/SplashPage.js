import React from 'react'
import {Button, Panel, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SplashPage = () => {
		return(
					<div className="splash-page">
						<h1 className="splash-page-header">WineOverflow</h1>
						<Link to="/winelist"><Button bsStyle="Success" bsSize="large">Winelist</Button></Link>
					</div>
		)
}

export default SplashPage