import React, { Component } from "react";
import PropTypes from "prop-types";
import chunk from "lodash/chunk";
import keyBy from "lodash/keyBy";
import AlphaLinks from "./AlphaLinks";
import Loader from "./Loader";
import Card from "./Card";
import Pagination from "./Pagination";

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

export default class ContentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsById: {},
      list: [],
      total: 0,
      page: 0,
      count: 0,
      offset: 0,
      highlighted: null,
    };
  }

  static propTypes = {
    params: PropTypes.object,
    paging: PropTypes.number,
  };

  static defaultProps = {
    params: {},
    paging: 50,
  };

  componentDidMount() {
    const { params } = this.props;
    this.fetchHandler(params.listType, params.letter, 0);
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.params.listType !== nextProps.params.listType ||
      this.props.params.letter !== nextProps.params.letter
    ) {
      // visually it looks better to reset this stuff before the fetch
      this.setState({
        list: [],
        total: 0,
        page: 0,
        offset: 0,
        highlighted: null,
      });
      // putting fetch here because we only want to fire on new prop
      this.fetchHandler(nextProps.params.listType, nextProps.params.letter, 0);
    }
  }

  errorHandler = (response) => {
    // this should eventually be rolled into a utility function
    // pattern to create success / error callbacks (then/catch)
    if (response.ok) {
      return response.json();
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };

  fetchHandler = (listType, letter, offset) => {
    const { paging } = this.props;
    const key = process.env.REACT_APP_MARVEL_KEY;
    const urls = {
      characters: `http://gateway.marvel.com/v1/public/characters?apikey=${key}&orderBy=name&limit=${paging}&offset=${offset}&nameStartsWith=${letter}`,
      series: `http://gateway.marvel.com/v1/public/series?apikey=${key}&orderBy=title&limit=${paging}&offset=${offset}&titleStartsWith=${letter}`,
    };

    return fetch(urls[listType])
      .then(this.errorHandler)
      .then((json) => {
        const resultsById = keyBy(json.data.results, "id");
        console.log(json);
        this.setState({
          list: json.data.results,
          total: json.data.total,
          count: json.data.count,
          resultsById,
        });
      });
  };

  resetPage = (page) => {
    const { params, paging } = this.props;
    const offset = page * paging || 0;
    // visually it looks better to reset this stuff before the fetch
    this.setState({
      list: [],
      total: 0,
      page: page,
      offset: offset,
    });
    this.fetchHandler(params.listType, params.letter, offset);
  };

  handleDecrement = () => {
    this.resetPage(this.state.page - 1);
  };

  handleIncrement = () => {
    this.resetPage(this.state.page + 1);
  };

  handleHighlight = (highlighted) => {
    this.setState({
      highlighted,
    });
  };

  render() {
    const { params } = this.props;
    const { list, resultsById, highlighted } = this.state;

    // const chunks = chunk(list, 8);
    // const highlightedHero = resultsById[highlighted];

    return (
      <div>
        <h2 className="main_title">{params.listType}</h2>
        <ul className="nav_items">
          {alphabet.map((letter, index) => (
            <AlphaLinks
              letter={letter}
              route={`/${params.listType}/${letter}`}
              key={index}
              selected={params.letter === letter}
            />
          ))}
        </ul>
        {/* uncomment for keyBy example */}
        {/* {highlightedHero && (
          <h3 style={{ textAlign: "center" }}>
            You love {highlightedHero.name}
          </h3>
        )} */}
        {/* <div className="cards">
          {list.map((ser) => {
            const handleClick = () => {
              this.handleHighlight(ser.id);
            };
            return (
              <Card
                key={ser.id}
                {...ser}
                type={params.listType}
                onClick={handleClick}
              />
            );
          })}
        </div> */}
        {/* uncomment for chunk example */}
        {/* {chunks.map((sublist, i) => {
          return (
            <div key={`chunk${i}`}>
              <div className="cards">
                {sublist.map((ser) => {
                  return <Card key={ser.id} {...ser} type={params.listType} />;
                })}
              </div>
              <img
                alt=""
                src="https://placekitten.com/g/800/200"
                style={{ display: "block", margin: "20px auto" }}
              />
            </div>
          );
        })} */}
        <div className="cards">
          {list.map((ser) => {
            return <Card key={ser.id} {...ser} type={params.listType} />;
          })}
        </div>
        {list.length ? (
          <Pagination
            page={this.state.page}
            count={this.state.count}
            offset={this.state.offset}
            total={this.state.total}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
          />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
