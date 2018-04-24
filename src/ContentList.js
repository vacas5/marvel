import React, { Component } from 'react';
import AlphaLinks from './AlphaLinks';
import Loader from './Loader';
import Card from './Card';
import Pagination from './Pagination';

class ContentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      total: 0,
      page: 0,
      count: 0,
      offset: 0
    };
    this.fetchHandler = this.fetchHandler.bind(this);
    this.resetPage = this.resetPage.bind(this);
  }

  componentDidMount() {
    this.fetchHandler(this.props.params.listType, this.props.params.letter, 0);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.params.listType !== nextProps.params.listType || this.props.params.letter !== nextProps.params.letter) {
      // visually it looks better to reset this stuff before the fetch
      this.setState({
        list: [],
        total: 0,
        page: 0,
        offset: 0
      });
      // putting fetch here because we only want to fire on new prop
      this.fetchHandler(nextProps.params.listType, nextProps.params.letter, 0);
    }
  }

  errorHandler(response) {
    // this should eventually be rolled into a utility function
    // pattern to create success / error callbacks (then/catch)
    if (response.ok) {
        return response.json();
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
  }

  fetchHandler(listType, letter, offset) {
    const key = process.env.REACT_APP_MARVEL_KEY;
    const urls = {
      'characters': `http://gateway.marvel.com/v1/public/characters?apikey=${key}&orderBy=name&limit=${this.props.paging}&offset=${offset}&nameStartsWith=${letter}`,
      'series': `http://gateway.marvel.com/v1/public/series?apikey=${key}&orderBy=title&limit=${this.props.paging}&offset=${offset}&titleStartsWith=${letter}`
    };

    return fetch(urls[listType]).then(this.errorHandler).then(json => {
      this.setState({
        list: json.data.results,
        total: json.data.total,
        count: json.data.count
      });
    });
  }

  resetPage(page) {
    const offset = (page * this.props.paging) || 0;
    // visually it looks better to reset this stuff before the fetch
    this.setState({
      list: [],
      total: 0,
      page: page,
      offset: offset
    });
    this.fetchHandler(this.props.params.listType, this.props.params.letter, offset);
  }

  handleClick = (url) => {
    const key = process.env.REACT_APP_MARVEL_KEY;
    fetch(`${url}?apikey=${key}`).then(this.errorHandler).then(json => {
      console.log(json)
    })
  }

  render() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    return (
      <div>
        <h2 className="main_title">{this.props.params.listType}</h2>
        <ul className="nav_items">
          {alphabet.map((letter, index) => <AlphaLinks letter={letter} route={`/${this.props.params.listType}/${letter}`} key={index} selected={this.props.params.letter === letter} />)}
        </ul>
        <div className="cards">
          {this.state.list.map( (item) => {
            //console.log(item.resourceURI)
            const handleClick = (e) => {
              this.handleClick(item.resourceURI);
            }
            return (
              <Card key={item.id} model={item} type={this.props.params.listType} onClick={handleClick} />
            );
          })}
        </div>
        {this.state.list.length ? <Pagination page={this.state.page} count={this.state.count} offset={this.state.offset} total={this.state.total} handleDecrement={() => this.resetPage(this.state.page - 1)} handleIncrement={() => this.resetPage(this.state.page + 1)} /> : <Loader />}
      </div>
    );
  }
}

ContentList.defaultProps = {
  paging: 50
};

export default ContentList;
