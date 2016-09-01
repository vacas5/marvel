import React from 'react';
import { Link } from 'react-router';
import './AlphaLinks.css';
import classNames from 'classnames';

export default function AlphaLinks({ letter, route, selected }) {
    var listClass = classNames({
      'active': selected
    });
    return(
      <li className={listClass}><Link to={route}>{letter}</Link></li>
    )
}
