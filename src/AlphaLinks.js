import React from 'react';
import { Link } from 'react-router';
import './AlphaLinks.css';
import classNames from 'classnames';

function AlphaLinks({ letter, route, selected }) {
    var listClass = classNames({
      'active': selected
    });
    return(
      <li className={listClass}><Link to={route}>{letter}</Link></li>
    )
}

AlphaLinks.propTypes = {
  letter: React.PropTypes.string,
  route: React.PropTypes.string,
  selected: React.PropTypes.bool,
}

export default AlphaLinks;
