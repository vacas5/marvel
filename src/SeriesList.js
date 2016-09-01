import React, { Component } from 'react';
import AlphaLinks from './AlphaLinks';
import Loader from './Loader';
import Card from './Card';

class SeriesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [],
      letter: this.props.params.letter || "a",
      total: 0,
      page: 0,
      paging: this.props.paging || 50,
      count: 0,
      offset: 0
    };
    this.fetchSeries = this.fetchSeries.bind(this);
    this.resetPage = this.resetPage.bind(this);
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
  }

  componentDidMount() {
    this.fetchSeries(this.state.letter, 0);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.letter !== nextProps.params.letter) {
      this.setState({
        series: [],
        letter: nextProps.params.letter,
        total: 0,
        page: 0,
        offset: 0
      });
      // putting fetch here because we only want to fire on new prop
      this.fetchSeries(nextProps.params.letter, 0);
    }
  }

  componentWillUpdate() {
    // will run after fetchSeries on initial load and redirect
  }

  fetchSeries(letter, offset) {
    var request = new XMLHttpRequest(),
    reqListener = function () {
      var reqJson = JSON.parse(request.response);
      if (request.status === 200) {
        this.setState({
          series: reqJson.data.results,
          total: reqJson.data.total,
          count: reqJson.data.count
        });
      }
    }.bind(this);

    request.addEventListener('load', reqListener);
    request.open('GET', `http://gateway.marvel.com/v1/public/series?apikey=e1ddc225cd15cf68b85164297175334a&orderBy=title&limit=${this.state.paging}&offset=${offset}&titleStartsWith=${letter}`);
    request.send();
  }

  resetPage(page) {
    const offset = (page * this.state.paging) || 0;

    this.setState({
      series: [],
      total: 0,
      page: page,
      offset: offset
    });
    this.fetchSeries(this.state.letter, offset);
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
        <h2 className="main_title">Series</h2>
        <ul className="nav_items">
          {alphabet.map((letter, index) => <AlphaLinks letter={letter} route={`/series/${letter}`} key={index} selected={this.state.letter === letter} />)}
        </ul>
        {!this.state.series.length && <Loader />}
        <div className="cards">
          {this.state.series.map( (ser) => {
            return (
              <Card key={ser.id} model={ser} type="series" />
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

export default SeriesList;
