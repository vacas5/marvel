import React, { Component } from 'react';

class CharacterList extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      letter: 'a'
    };
  }

  componentDidMount() {
    var request = new XMLHttpRequest(),
    reqListener = function () {
      var reqJson = JSON.parse(request.response);
      this.setState({
        characters: reqJson.data.results
      });
    }.bind(this);

    request.addEventListener('load', reqListener);
    request.open('GET', 'http://gateway.marvel.com/v1/public/characters?apikey=e1ddc225cd15cf68b85164297175334a&orderBy=name&nameStartsWith=' + this.state.letter);
    request.send();
  }

  render() {
    return (
      <ul className="character_list">
        {this.state.characters.map( (character, index) => {
          return <li key={index}>{character.name}, {character.description}</li>;
        })}
      </ul>
    );
  }
}

export default CharacterList;
