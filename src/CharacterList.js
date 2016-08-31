import React, { Component } from 'react';
import AlphaLinks from './AlphaLinks';
import Loader from './Loader';
import Card from './Card';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      total: 0,
      letter: this.props.params.letter || "a",
      page: 0,
      paging: this.props.paging || 20,
      count: 0,
      offset: 0
    };
    this.fetchCharacters = this.fetchCharacters.bind(this);
    this.resetPage = this.resetPage.bind(this);
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
  }

  componentDidMount() {
    this.fetchCharacters(this.state.letter, 0);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.letter !== nextProps.params.letter) {
      this.setState({
        characters: [],
        total: 0,
        letter: nextProps.params.letter,
        page: 0,
        offset: 0
      });
      // putting fetch here because we only want to fire on new prop
      this.fetchCharacters(nextProps.params.letter, 0);
    }
  }

  componentWillUpdate() {
    // will run after fetchCharacters on initial load and redirect
  }

  fetchCharacters(letter, offset) {
    var request = new XMLHttpRequest(),
    reqListener = function () {
      var reqJson = JSON.parse(request.response);
      if (request.status === 200) {
        this.setState({
          characters: reqJson.data.results,
          total: reqJson.data.total,
          count: reqJson.data.count
        });
      }
    }.bind(this);

    request.addEventListener('load', reqListener);
    request.open('GET', `http://gateway.marvel.com/v1/public/characters?apikey=e1ddc225cd15cf68b85164297175334a&orderBy=name&limit=${this.state.paging}&offset=${offset}&nameStartsWith=${letter}`);
    request.send();
  }

  resetPage(page) {
    const offset = (page * this.state.paging) || 0;

    this.setState({
      characters: [],
      total: 0,
      page: page,
      offset: offset
    });
    this.fetchCharacters(this.state.letter, offset);
  }

  incrementPage() {
    this.resetPage(this.state.page + 1);
  }

  decrementPage() {
    this.resetPage(this.state.page - 1);
  }

  render() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return (
      <div>
        <h2 className="main_title">Characters</h2>
        <ul className="nav_items">
          {alphabet.map((letter, index) => <AlphaLinks letter={letter} key={index} selected={this.state.letter === letter} />)}
        </ul>
        {!this.state.total && <Loader />}
        <div className="cards">
          {this.state.characters.map( (character) => {
            return (
              <Card key={character.id} model={character} />
            );
          })}
        </div>
        {this.state.total > 0 && <p className="text_center">{this.state.offset + 1} &ndash; {this.state.count + this.state.offset} of {this.state.total}</p>}
        <div className="clearfix">
          {this.state.total > 0 && this.state.page > 0 && <button className="pull_left" type="button" onClick={this.decrementPage}>&#60; Previous Page</button>}
          {this.state.total > 0 && (this.state.count + this.state.offset) < this.state.total && <button className="pull_right" type="button" onClick={this.incrementPage}>Next Page &#62;</button>}
        </div>
      </div>
    );
  }
}

export default CharacterList;
