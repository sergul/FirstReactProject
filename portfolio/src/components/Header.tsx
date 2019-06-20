import React, { PureComponent } from 'react';
import Assets from '../utils/Assets';
import getImage from '../assets/images/index';
import { Link } from 'react-router-dom';
import NavBar from './reusable/nav-bar/NavBar';
import NavBarItem from './reusable/nav-bar/NavBarItem';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-container">
        <NavBar>
          <NavBarItem key="0" label="home" route="/" />
          <NavBarItem key="1" label="resume" route="/resume" />
        </NavBar>
        <div className="header-center-container">
          <div className="header-avatar-container inline-block">
            <img className="header-avatar" alt="Me :)" src={getImage('avatar.jpg')}></img>
          </div>
          <div className="header-bio-container inline-block">
            <div className="padding-bottom-small">
              <p className="medium-font-size">Hi :) My name is:</p>
            </div>
            <h2 className="large-font-size">Sergey Mikayelyan</h2>
            <p className="small-font-size padding-top-normal">
              I'm a passionate software developer specialized in frontend and backend web/app development.<br />
              Throughout my long career journey I've always put the <label className="bold-text">work quality</label> on first place.<br />
              Because quality brings trust. To gain the best quality I used to always sharpen my professional skills.<br />
              Check out my portfolio and <Link className="link-on-header" to="/resume">resume</Link> if you want to know how I might help to push your business forward.
              
            </p>
          </div>

        </div>
      </div>

    );
  }
}

export default Header;