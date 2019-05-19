import React from 'react';
import { Link } from 'react-router-dom';

const NavBarItem = (props:any) => {
  const { label, route } = props;
  return (
    <li>
      <Link to={route}>{label.toUpperCase()}</Link>
    </li>
  );
}

export default NavBarItem;