import React, { Component } from 'react';
import AlphaLinks from './AlphaLinks';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      letter: this.props.params.letter || "a",
    };
    this.fetchCharacters = this.fetchCharacters.bind(this);
  }

  componentDidMount() {
    this.fetchCharacters(this.state.letter);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.letter !== nextProps.params.letter) {
      this.setState({letter: nextProps.params.letter});
    }
  }

  componentWillUpdate() {
    this.fetchCharacters(this.state.letter);
  }

  fetchCharacters(letter) {
    var request = new XMLHttpRequest(),
    reqListener = function () {
      var reqJson = JSON.parse(request.response);
      this.setState({
        characters: reqJson.data.results
      });
    }.bind(this);

    request.addEventListener('load', reqListener);
    request.open('GET', 'http://gateway.marvel.com/v1/public/characters?apikey=e1ddc225cd15cf68b85164297175334a&orderBy=name&limit=100&nameStartsWith=' + letter);
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
        <div className="cards">
          {this.state.characters.map( (character, index) => {
            return (
              <div className="card" key={character.id}>
                <div className="card-image">
                  <img src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name + ' thumbnail'} />
                </div>
                <div className="card-header">
                  {character.name}
                </div>
                <div className="card-copy">
                  <ul>
                    {character.urls.map( (url, index) => {
                      var names = {
                        'detail': 'Detail',
                        'wiki': 'Wiki',
                        'comiclink': 'Comic Link'
                      };
                      return (
                        <li key={character.id + '_' + index}>
                          <a href={url.url}>{names[url.type]}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CharacterList;
