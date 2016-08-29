import React, { Component } from 'react';
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
              <img src="https://s3-us-west-2.amazonaws.com/russelljanderson-dev/marvelator/mlogo.png" alt="Marvel logo" />
              ATOR
            </Link>
          </h1>
          <div className="navigation-menu-button" onClick={this.menuClick}>MENU</div>
          <nav role="navigation">
            <ul className={navClass}>
              <li className="nav-link">
                <Link to="/">Characters</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
