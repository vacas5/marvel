import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CharacterList from './CharacterList';
import { Router, Route, hashHistory } from 'react-router';
import './index.css';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="characters/:letter" component={CharacterList}>
      </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
