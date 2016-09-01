import React from 'react';
import './Card.css';

function Card({ model }) {
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

Card.propTypes = {
  model: React.PropTypes.object,
}

export default Card;
