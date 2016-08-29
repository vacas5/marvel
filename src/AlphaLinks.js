import React from 'react';
import { Link } from 'react-router';

export default function AlphaLinks({ letter }) {
    return(
      <li><Link to={`/characters/${letter}`}>{letter}</Link></li>
    )
}
