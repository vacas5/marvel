import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: this.props.model
    };
  }

  render() {
    const model = this.state.model;
    return (
      <div className="card">
        <div className="card-image">
          <img src={model.thumbnail.path + '.' + model.thumbnail.extension} alt={model.name + ' thumbnail'} />
        </div>
        <div className="card-header">
          {model.name}
        </div>
        <div className="card-copy">
          <ul>
            {model.urls.map( (url, index) => {
              var names = {
                'detail': 'Detail',
                'wiki': 'Wiki',
                'comiclink': 'Comic Link'
              };
              return (
                <li key={model.id + '_' + index}>
                  <a href={url.url}>{names[url.type]}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Card;
