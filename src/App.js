import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // componentDidMount(){
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
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
