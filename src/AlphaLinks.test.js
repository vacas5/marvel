import React from 'react';
import ReactDOM from 'react-dom';
import AlphaLinks from './AlphaLinks';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AlphaLinks />, div);
});
