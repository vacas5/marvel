import React, { Component } from 'react';
import './Card.css';
import classNames from 'classnames';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: this.props.model
    };
  }

  render() {
    const model = this.state.model,
    headers = {
      "character": model.name,
      "series": model.title
    },
    cardImageClass = classNames({
      'card-image': true,
      'bottom': model.thumbnail.path.indexOf('image_not_available') > -1
    }),
    cardImageStyle = {
      backgroundImage: `url(${model.thumbnail.path}.${model.thumbnail.extension})`
    };

    return (
      <div className="card">
        <div className={cardImageClass} style={cardImageStyle}></div>
        <div className="card-header">
          {headers[this.props.type]}
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
