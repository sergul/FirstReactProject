import React from 'react';

const Option = (props) => {
    const onRemove = (event) => {
      event.preventDefault();
      props.removeOption(props.data);
    }
  
    return (
      <div className="option">
        <div className="option__row">
          <p className="option__text">{ props.index }.{ props.data }</p>
          <button
            className="button--link"
            onClick={onRemove}>Remove
          </button>
        </div>
        <div className="option__row">
          { 
            <button
              className="button--link button-link--hidden"
              onClick={onRemove}>Read More
            </button>
          }
        </div>
      </div>
    );
  }

  export default Option;