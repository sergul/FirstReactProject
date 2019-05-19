import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends PureComponent {
  render() {
    return (
      <div className="nav-bar__container">
        <ul className="nav-bar__list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
