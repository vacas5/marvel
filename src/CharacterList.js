import React, { Component } from 'react';
import AlphaLinks from './AlphaLinks';
import Loader from './Loader';
import Card from './Card';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      letter: this.props.params.letter || "a"
    };
    this.fetchCharacters = this.fetchCharacters.bind(this);
  }

  componentDidMount() {
    this.fetchCharacters(this.state.letter);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.letter !== nextProps.params.letter) {
      this.setState({
        characters: [],
        letter: nextProps.params.letter
      });
      // putting fetch here because we only want to fire on new prop
      this.fetchCharacters(nextProps.params.letter);
    }
  }

  componentWillUpdate() {
    // will run after fetchCharacters on initial load and redirect
  }

  fetchCharacters(letter) {
    var request = new XMLHttpRequest(),
    reqListener = function () {
      var reqJson = JSON.parse(request.response);
      if (request.status === 200) {
        this.setState({
          characters: reqJson.data.results
        });
      }
    }.bind(this);

    request.addEventListener('load', reqListener);
    request.open('GET', `http://gateway.marvel.com/v1/public/characters?apikey=e1ddc225cd15cf68b85164297175334a&orderBy=name&limit=100&nameStartsWith=${letter}`);
    request.send();
  }

  render() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return (
      <div>
        <h2 className="main_title">Characters</h2>
        <ul className="nav_items">
          {alphabet.map((letter, index) => <AlphaLinks letter={letter} key={index} />)}
        </ul>
        {!this.state.characters.length && <Loader />}
        <div className="cards">
          {this.state.characters.map( (character) => {
            return (
              <Card key={character.id} model={character} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CharacterList;
