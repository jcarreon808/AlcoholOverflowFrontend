import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SplashPage from './SplashPage'
import WineList from './WineList'
import Homepage from './Homepage'
import SearchBar from './SearchBar'

import './App.css';

class App extends Component {
	constructor() {
		super()

		this.state = {
			wines: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:3000/api/v1/wines')
			.then(resp => resp.json())
			.then(wines => this.setState({ wines }))
	}

  render() {
    return (
			<Router>
				<div className="App">
					<SearchBar/>
					<Route exact path="/" component={SplashPage} />
					<Route path="/home" component={Homepage} />
					<Route path="/winelist" render={ () => <WineList wines={this.state.wines} />
					}/>
				</div>
			</Router>
    );
  }
}

export default App;
