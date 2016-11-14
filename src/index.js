import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import ContentList from './ContentList';
import { Router, Route, Redirect, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Redirect from="/" to="characters/a" />
    <Route path="/" component={App}>
      <Route path=":listType/:letter" component={ContentList} />
    </Route>
  </Router>,
  document.getElementById('root')
);
