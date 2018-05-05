import React from "react";
import background from '../img/hero.jpg';
import logo from '../img/logo-white.png';
import navButton from '../svg/navicon-round.svg';
import { NavBar } from './NavBar';

const Header = () => {
  return (
    <header style={{'backgroundImage': `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`}}>
      <p className="device-size">Device Size</p>
      <div>
        <img src={logo} alt="Omnifood logo" className="logo"/>
        <NavBar navBarClass="nav-bar">
          <a href="#">Food delivery</a>
          <a href="#">How it works</a>
          <a href="#">Our cities</a>
          <a href="#">Sign up</a>
        </NavBar>
      </div>
      <div className="hero-text-box">
        <h1>Goodbye junk food.<br/>Hello super healthy meals.</h1>
        <a className="btn btn-full" href="#">I’m hungry</a>
        <a className="btn btn-ghost" href="#">Show me more</a>
      </div>
    </header>
  );
};

export { Header };
