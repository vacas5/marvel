import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
          <div className="App-header">
            <h2 className="App-logo">
              <img src="http://vignette2.wikia.nocookie.net/spiderman/images/5/53/Marvel-logo-copy1.png" alt="logo" />
              ATOR
            </h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
            <CharacterList></CharacterList>
          </p>
        </div>
        <div className="App-footer">
          <p>Data provided by Marvel. &copy; 2016 Marvel</p>
        </div>
      </div>
    );
  }
}

export default App;
