import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SplashPage from './SplashPage'
import WineList from './WineList'
import Homepage from './Homepage'
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

// 	componentDidMount() {
// 		fetch('http://api.snooth.com/wines/?akey=y7kdc8dmttig2p1owcnjzj14a0vtt921cuwj1hwmpze9hx39&n=100')
// 			.then(res => res.json())
// 			.then(data =>
// 				fetch('http://localhost:3000/api/v1/wines', {
// 					method: 'POST',
// 					headers: {'Content-Type': 'application/json'},
// 					body: JSON.stringify(data),
// 				})
// 			)
// 	}

	componentDidMount() {
		this.fetchData()
	}

	fetchData = () => {
		fetch('http://localhost:3000/api/v1/wines')
			.then(resp => resp.json())
			.then(wines => {
				const sortedWines = [...wines]
				sortedWines.sort((a, b) => {
					return b.user_vote - a.user_vote
				})
				this.setState({wines: sortedWines})
			})
	}

	// fetch('http://localhost:3000/api/v1/wines')
	// 	.then(resp => resp.json())
	// 	.then(wines => this.setState({ wines }))

	handleSearchInput = (event) => {
		this.setState({searchTerm: event.target.value})
	}

	handleFilter = (event) => {
		const name = event.target.name
		if (name === 'white') {
			fetch('http://localhost:3000/api/v1/wines')
				.then(resp => resp.json())
				.then((wines) => {
					const white = wines.filter(wine => wine.wine_type === 'White Wine').sort((a, b) => {
						return b.user_vote - a.user_vote
					})
					this.setState({wines: white})
				})
		} else if (name === 'red') {
			fetch('http://localhost:3000/api/v1/wines')
				.then(resp => resp.json())
				.then((wines) => {
					const red = wines.filter(wine => wine.wine_type === 'Red Wine').sort((a, b) => {
						return b.user_vote - a.user_vote
					})
					this.setState({wines: red})
				})
		} else if (name === 'all') {
			this.fetchData()
		}
	}

	handleUpVotes = (id) => {
		fetch(`http://localhost:3000/api/v1/wines/${id}`)
			.then(res => res.json())
			.then(data => {
				fetch(`http://localhost:3000/api/v1/wines/${id}`, {
					method: 'PUT',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						user_vote: data.user_vote + 1
					})
				})
					.then(() => {
						this.fetchData()
					})
			})
	}

	handleDownVotes = (id) => {
		fetch(`http://localhost:3000/api/v1/wines/${id}`)
			.then(res => res.json())
			.then(data => {
				fetch(`http://localhost:3000/api/v1/wines/${id}`, {
					method: 'PUT',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						user_vote: data.user_vote - 1
					})
				})
					.then(() => {
						this.fetchData()
					})
			})
	}

	getAverageRating = () => {
		let data = this.state.wines
		let newAry = []
		for (let i=0; i < data.length; i++) {
			if (data[i].reviews.length > 0) {
				let newObj = {}
				newObj.name = data[i].name
				let total = data[i].reviews.reduce((value, review) => {
					return review.user_rating + value }, 0)
				newObj.average = total/data[i].reviews.length
				newAry.push(newObj)
			}
		}
		return newAry
	}

	getMostReviewed = () => {
		let data = [...this.state.wines]
		data.sort((a, b) => {
			return b.reviews.length - a.reviews.length
		})
		return data
	}

	clearSearchBar = () => {
		this.setState({searchTerm:''})
	}

	sortByPrice = () => {

	}

	handleSort = (value) => {
		console.log(value)
		let data = [...this.state.wines]
		data.sort((a, b) => {
			if (value === 'Price (high to low)') {
					return b.price - a.price
				} else if (value === 'Price (low to high)') {
					return a.price - b.price
				} else if (value === 'Vintage (oldest first)') {
					return a.vintage - b.vintage
				} else if (value === 'Vintage (newest first)') {
					return b.vintage - a.vintage
				} 
		})
		this.setState({ wines: data })
	}

	render() {
		return (
			<Router>
				<div className="App">
					<NavBar clearSearchBar={this.clearSearchBar} />
					<div>
						<Route exact path="/" component={SplashPage}/>
					</div>
					<div className="main">
						<Route path="/home" render={() =>
							<Homepage getAverageRating={this.getAverageRating}
												getMostReviewed={this.getMostReviewed}
												wines={this.state.wines} />}/>
						<Route exact path="/winelist" render={() =>
							<WineList wines={this.state.wines}
												searchTerm={this.state.searchTerm}
												handleChange={this.handleSearchInput}
												handleFilter={this.handleFilter}
												handleUpVotes={this.handleUpVotes}
												handleDownVotes={this.handleDownVotes}
												handleSort={this.handleSort} />}/>
						<Route path="/winelist/:id" component={WineReviewPage}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App
