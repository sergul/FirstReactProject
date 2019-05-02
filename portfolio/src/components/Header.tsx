import React, { PureComponent } from 'react';
import Assets from '../utils/Assets';
import getImage from '../assets/images/index';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-container">
        <img className="avatar" alt="Me :)" src={getImage('avatar.jpg')}></img>
        
        <div className="my-info-container">
          <p>Hi There :) My name is:</p>
          <h1>Sergey Mikayelyan</h1>
        </div>
      </div>
    );
  }
}

export default Header;