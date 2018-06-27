import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import Header from './Header';

export function getYear() {
    return new Date(Date.now()).getFullYear();
}

App.propTypes = {
    children: PropTypes.node
}

export default function App({ children }) {
    return (
      <div className="App">
        <div className="App-wrapper">
          <Header />
          <div className="App-intro">
            {children}
          </div>
        </div>
        <div className="App-footer">
          <p>Data provided by Marvel. &copy; {getYear()} Marvel</p>
        </div>
      </div>
    );
}
