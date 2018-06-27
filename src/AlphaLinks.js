import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import './AlphaLinks.scss';

AlphaLinks.propTypes = {
  letter: PropTypes.string,
  route: PropTypes.string,
  selected: PropTypes.bool,
}

export default function AlphaLinks({ letter, route, selected }) {
    return(
      <li className={selected && 'active'}>
          <Link to={route}>{letter}</Link>
      </li>
    )
}
