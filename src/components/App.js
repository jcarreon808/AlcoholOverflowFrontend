import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SplashPage from './SplashPage'
import WineList from './WineList'
import Homepage from './Homepage'
import SearchBar from './SearchBar'
import WineReviewPage from './WineReviewPage'

import './App.css';

class App extends Component {
	constructor() {
		super()

		this.state = {
			wines: [],
			searchTerm: '',
			currentWine: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/api/v1/wines')
			.then(resp => resp.json())
			.then(wines => this.setState({ wines }))
	}

	// fetch to seed database:
	//   fetch('http://api.snooth.com/wines/?akey=y7kdc8dmttig2p1owcnjzj14a0vtt921cuwj1hwmpze9hx39&n=100')
	//   .then(res => res.json())
	//   .then(data =>
	//     fetch('http://localhost:3000/api/v1/wines', {
	//       method: 'POST',
	//       headers: {'Content-Type': 'application/json'},
	//       body: JSON.stringify(data),
	//     })
	//   )
	// }

	handleSearchInput = (event) => {
		this.setState({ searchTerm: event.target.value })
	}

	handleCurrentWine = (id) => (
		fetch(`http://localhost:3000/api/v1/wines/${id}`)
			.then(response => response.json())
			.then(data => this.setState({ currentWine: data }))
	)

  render() {
		console.log(this.state.currentWine)
    return (
			<Router>
				<div className="App">
					<div>
						<Route exact path="/" component={SplashPage} />
					</div>
					<div className="main">
						<Route path="/home" component={Homepage} />
						<Route exact path="/winelist" render={ () =>
							<WineList wines={this.state.wines}
												searchTerm={this.state.searchTerm}
												handleChange={this.handleSearchInput}
												handleCurrentWine={this.handleCurrentWine}
												/> }/>
						<Route path="/winelist/:id" render={ () =>
							<WineReviewPage handleSubmit={this.handleSubmitReview}
															currentWine={this.state.currentWine}
															wines={this.state.wines} /> } />
					</div>
				</div>
			</Router>
    );
  }
}

export default App;
