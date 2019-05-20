import React, { PureComponent } from 'react';

export interface InjectedCounterProps {
  value: number;
}

class NavBar extends PureComponent<any, any> {
  constructor(props: any) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <nav className="nav-bar__container">
        <ul className="nav-bar__list">
          {
            this.props.children
          }
        </ul>
      </nav>
    );
  }
}

export default NavBar;
