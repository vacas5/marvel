import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import CharacterList from './CharacterList';
import SeriesList from './SeriesList';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CharacterList} />
      <Route path="characters/:letter" component={CharacterList} />
      <Route path="series/:letter" component={SeriesList} />
    </Route>
  </Router>,
  document.getElementById('root')
);
