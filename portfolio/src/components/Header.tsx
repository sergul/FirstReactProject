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
            <p className="medium-font-size">Hi :) My name is:</p>
            <h2 className="large-font-size">Sergey Mikayelyan</h2>
            <p className="small-font-size padding-top-normal">
              I'm a passionate Software Developer who've been intensively developing and delivering<br />
              software products and services more than 9 years. During this beautiful journey I've<br />
              always put my first priority on giving <b>quality</b> and client satisfaction in work / end result.<br />
              Throughout my career path I've always sharpened my professional skills as I've been<br />
              in Game, Desktop and Web development. You can find more about experience in my <Link className="link-on-header" to="/resume">resume</Link> :)
                </p>
          </div>

        </div>
      </div>

    );
  }
}

export default Header;