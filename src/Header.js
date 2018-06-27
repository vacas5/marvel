import React, { Component } from 'react';
import logo from './mlogo.png';
import './Header.scss';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleMenuClick = () => {
    this.setState(prevState => ({menuOpen: !prevState.menuOpen}));
  }

  render () {
    var navClass = classNames('navigation-menu', {
      'show': this.state.menuOpen
    });
    return (
      <header className="navigation" role="banner">
        <div className="navigation-wrapper">
          <h1 className="logo">
            <Link to="/">
              <img src={logo} alt="Marvel logo" />
              ATOR
            </Link>
          </h1>
          <div className="navigation-menu-button" onClick={this.handleMenuClick}>MENU</div>
          <nav role="navigation">
            <ul className={navClass}>
              <li className="nav-link">
                <Link to="/characters/a">Characters</Link>
              </li>
              <li className="nav-link">
                <Link to="/series/a">Series</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
