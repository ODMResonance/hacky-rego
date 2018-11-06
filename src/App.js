import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Registration.
          </p>
          <div>
            <label>Name:
            <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
