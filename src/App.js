import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import CharacterList from './CharacterList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
          <Header />
          <div className="App-intro">
            <CharacterList params={this.props.params}/>
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
