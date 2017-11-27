import React from 'react';

const Header = (props) => {
    const {title, subtitle } = {
      title : props.title,
      subtitle: props.subtitle
    };
  
    return (
      <div>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
      </div>
    )
  };
  
  Header.defaultProps = {
    title: 'Indecision'
  };
  
  
  export { Header };