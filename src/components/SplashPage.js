import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

const SplashPage = () => {
		return(
			<div className="splash-page">
				<h1 className="splash-page-header">WineOverflow</h1>
				<Link to="/winelist"><Button secondary>Winelist</Button></Link>
			</div>
		)
}

export default SplashPage
