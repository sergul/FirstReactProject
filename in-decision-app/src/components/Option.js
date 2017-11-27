import React from 'react';

const Option = (props) => {
    const onRemove = (event) => {
      event.preventDefault();
      props.removeOption(props.data);
    }
  
    return (
      <div>
        <p key={props.data}>{ props.data }</p>
        <button onClick={onRemove}>Remove</button>
      </div>
    );
  }

  export default Option;