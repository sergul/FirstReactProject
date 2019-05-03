import React, { PureComponent } from 'react';
import Assets from '../utils/Assets';
import getImage from '../assets/images/index';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-container">
       <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
        <img className="avatar" alt="Me :)" src={getImage('avatar.jpg')}></img>
        
        <div className="header-info-container">
          <p>Hi There :) My name is:</p>
          <h1>Sergey Mikayelyan</h1>
        </div>
      </div>
    );
  }
}

export default Header;