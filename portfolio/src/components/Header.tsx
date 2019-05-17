import React, { PureComponent } from 'react';
import Assets from '../utils/Assets';
import getImage from '../assets/images/index';
import { Link } from 'react-router-dom';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-container">
        <img className="avatar" alt="Me :)" src={getImage('avatar.jpg')}></img>
        
        <div className="header-info-container">
          <div className="medium-font-size">Hi :) My name is:</div>
          <h2>Sergey Mikayelyan</h2>&nbsp;
          <div className="small-font-size">
            I'm a passionate Software Developer who've been intensively developing and delivering software products<br/>
            and services more than 9 years. During this beautiful journey I've always put my first priority on giving <b>quality</b><br/>
            and client satisfaction in work / end result.<br/>
            Throughout my career path I've always sharpened my professional skills as I've been in Game, Desktop and Web development.<br/>
            You can find more about my recent experience in my <Link className="link-on-header" to="/resume">resume.</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;