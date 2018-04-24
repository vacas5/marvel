import React from 'react';
import './Card.scss';
import classNames from 'classnames';

function Card({ model, type, onClick }) {
    const headers = {
      "characters": model.name,
      "series": model.title
    },
    cardImageClass = classNames({
      'card-image': true,
      'bottom': model.thumbnail.path.includes('image_not_available')
    }),
    cardImageStyle = {
      backgroundImage: `url(${model.thumbnail.path}.${model.thumbnail.extension})`
    };

    return (
      <div className="card" onClick={onClick}>
        <div className={cardImageClass} style={cardImageStyle}></div>
        <div className="card-header">
          {headers[type]}
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
                <li key={`${model.id}_${index}`}>
                  <a href={url.url}>{names[url.type]}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
}

Card.propTypes = {
  model: React.PropTypes.object,
  type: React.PropTypes.string,
}

export default Card;
