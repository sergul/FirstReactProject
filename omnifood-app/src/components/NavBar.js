import React from 'react';
import PropTypes from 'prop-types';

const NavBar = props => {
    return (
        <nav className={props.navBarClass}>
            {props.children}
        </nav>
        
    );
};

NavBar.propTypes = {
    
};

export { NavBar};