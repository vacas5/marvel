import React, { Component } from 'react';
import logo from './mlogo.png';
import './Header.css';
import { Link } from 'react-router';
import classNames from 'classnames';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false
    };
    this.menuClick = this.menuClick.bind(this);
  }

  menuClick() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render () {
    var navClass = classNames({
      'navigation-menu': true,
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
          <div className="navigation-menu-button" onClick={this.menuClick}>MENU</div>
          <nav role="navigation">
            <ul className={navClass}>
              <li className="nav-link">
                <Link to="/characters/a">Characters</Link>
                <Link to="/series/a">Series</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
