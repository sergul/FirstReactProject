import React from 'react';
import Option from './Option';

const Options = (props) => {
  const optionList = props.options;
  return (
    <div>
    <button
      className="button--link"
      onClick={props.removeOptionsCallback}
      disabled={!(props.options.length > 0)}>
        Remove All
      </button>
      {
        optionList.map((value) => (
          <Option
            data={ value }
            key={ value }
            removeOption={props.removeOption}
            />
        ))
        
      }
    </div>
  );
}

    export { Options };