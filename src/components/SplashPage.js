import React from 'react'
import { Link } from 'react-router-dom'


const SplashPage = () => {
		return(
			<div className="splash">
				<Link to="/homepage">
					<div className="splash-page">
						<h2 className="splash-page-header">Wine Overflow</h2>
					</div>
				</Link>
			</div>
		)
}

export default SplashPage
