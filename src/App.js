import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    counter: 0
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  handleReset = () => {
    this.setState({ counter: (this.state.counter = 0) });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Registration.</p>
          <div>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <button className="btn btn-secondary" onClick={this.handleClick}>
              Submit
            </button>
            <p>Submit count: {this.state.counter}</p>
            <button className="btn btn-secondary" onClick={this.handleReset}>
              Reset
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
