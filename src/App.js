import React, { Component } from 'react';
import './App.scss';
import HeaderContainer from './HeaderContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
          <HeaderContainer />
          <div className="App-intro">
            {this.props.children}
          </div>
        </div>
        <div className="App-footer">
          <p>Data provided by Marvel. &copy; 2016 Marvel</p>
        </div>
      </div>
    );
  }
}

export default App;
