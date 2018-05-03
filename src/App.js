import React, { Component } from 'react';
import './App.scss';
import Header from './Header';

export function getYear() {
  return new Date(Date.now()).getFullYear();
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
          <Header />
          <div className="App-intro">
            {this.props.children}
          </div>
        </div>
        <div className="App-footer">
          <p>Data provided by Marvel. &copy; {getYear()} Marvel</p>
        </div>
      </div>
    );
  }
}

export default App;
