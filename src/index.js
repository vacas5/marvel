import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.scss';
import App from './App';
import ContentListContainer from './ContentListContainer';
import { Router, Route, Redirect, browserHistory } from 'react-router';
import reducer from './reducers';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
          <Redirect from="/" to="characters/a" />
          <Route path="/" component={App}>
            <Route path=":listType/:letter" component={ContentListContainer} />
          </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
