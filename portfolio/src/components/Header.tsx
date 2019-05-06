import React, { PureComponent } from 'react';
import Assets from '../utils/Assets';
import getImage from '../assets/images/index';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-container">
        <img className="avatar" alt="Me :)" src={getImage('avatar.jpg')}></img>
        
        <div className="header-info-container">
          <div>Hi There :) My name is:</div>&nbsp;
          <h1>Sergey Mikayelyan</h1>&nbsp;
          <div>
            I'm a front-end developer mainly specialized in UI development technologies for complex scalable web app development.<br/>
            I also have experience in developing ASP.NET Core based middle-tier backend services. I worked as a front-end developer in<br/>
            <a className="link-on-header" target="_blank" href="https://www.hcltech.com/">HCL America</a> and currently working as a Senior web/app developer in <a className="link-on-header" target="_blank" href="https://en.pactera.com/">Pactera Technologies</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;