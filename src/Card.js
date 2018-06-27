import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';
import classNames from 'classnames';

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  thumbnail: PropTypes.object,
  urls: PropTypes.array,
  type: PropTypes.string,
}

export default function Card({ id, name, title, thumbnail = {}, urls = [], type }) {
    const headers = {
      "characters": name,
      "series": title
    };
    const cardImageClass = classNames('card-image', {
      'bottom': thumbnail.path && thumbnail.path.includes('image_not_available')
    });
    const cardImageStyle = {
      backgroundImage: `url(${thumbnail.path}.${thumbnail.extension})`
    };

    return (
      <div className="card">
        <div className={cardImageClass} style={cardImageStyle}></div>
        <div className="card-header">
          {headers[type]}
        </div>
        <div className="card-copy">
          <ul>
            {urls.map( (url, index) => {
              var names = {
                'detail': 'Detail',
                'wiki': 'Wiki',
                'comiclink': 'Comic Link'
              };
              return (
                <li key={`${id}_${index}`}>
                  <a href={url.url}>{names[url.type]}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    )
}
