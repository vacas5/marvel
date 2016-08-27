import React, { Component } from 'react';
import './App.css';
import CharacterList from './CharacterList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-wrapper">
          <div className="App-header">
            <h1 className="App-logo">
              <img src="http://vignette2.wikia.nocookie.net/spiderman/images/5/53/Marvel-logo-copy1.png" alt="logo" />
              ATOR
            </h1>
          </div>
          <div className="App-intro">
            <CharacterList></CharacterList>
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
