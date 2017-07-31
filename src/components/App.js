import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SplashPage from './SplashPage'
import WineList from './WineList'
import Homepage from './Homepage'
import SearchBar from './SearchBar'
import WineReviewPage from './WineReviewPage'
import NavBar from './NavBar'

import './App.css';

class App extends Component {
	constructor() {
		super()

		this.state = {
			wines: [],
			searchTerm: ''
		}
	}

	componentDidMount() {
		//  fetch('http://api.snooth.com/wines/?akey=y7kdc8dmttig2p1owcnjzj14a0vtt921cuwj1hwmpze9hx39&n=100')
		//   .then(res => res.json())
		//   .then(data =>
		//     fetch('http://localhost:3000/api/v1/wines', {
		//       method: 'POST',
		//       headers: {'Content-Type': 'application/json'},
		//       body: JSON.stringify(data),
		//     })
		//   )
	}

	// fetch('http://localhost:3000/api/v1/wines')
	// 	.then(resp => resp.json())
	// 	.then(wines => this.setState({ wines }))

	handleSearchInput = (event) => {
		this.setState({ searchTerm: event.target.value })
	}

	handleFilter = (event) => {
		const name = event.target.name
		if (name === 'white') {
			fetch('http://localhost:3000/api/v1/wines')
				.then(resp => resp.json())
				.then((wines) => {
					const white = wines.filter(wine => wine.wine_type === 'White Wine')
					this.setState({ wines: white })
				})
		} else if (name === 'red') {
			fetch('http://localhost:3000/api/v1/wines')
				.then(resp => resp.json())
				.then((wines) => {
					const red = wines.filter(wine => wine.wine_type === 'Red Wine')
				this.setState({ wines: red })
				})
		} else if (name === 'all') {
			fetch('http://localhost:3000/api/v1/wines')
				.then(resp => resp.json())
				.then(wines => this.setState({ wines }))
			}
	}

  render() {
    return (
			<Router>
				<div className="App">
			 		{/*<NavBar />*/}
					<div>
						<Route exact path="/" component={SplashPage} />
					</div>
					<div className="main">
						<Route path="/home" component={Homepage} />
						<Route exact path="/winelist" render={ () =>
							<WineList wines={this.state.wines}
												searchTerm={this.state.searchTerm}
												handleChange={this.handleSearchInput}
												handleFilter={this.handleFilter} /> } />
						<Route path="/winelist/:id" component={WineReviewPage}/>
					</div>
				</div>
			</Router>
    );
  }
}

export default App
