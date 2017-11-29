import React from 'react';

const Action = (props) => {
    const onPickOptionButtonClick = () => {
      props.getOption("data from Action class");
    }
    
    return (
      <div>
        <button className="big-button"
        onClick={ onPickOptionButtonClick }
        disabled={!props.hasOptions}>
        What should I do ?
        </button>
      </div>
    );
  };

  export { Action };
