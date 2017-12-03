import React from 'react';
import Option from './Option';

const Options = (props) => {
  const optionList = props.options;
  return (
    <div>
      <div className="widget-header">
        <h3 className="widget-header__title">Your Options</h3>
        <button
          className="button--link"
          onClick={props.removeOptionsCallback}
          disabled={!(props.options.length > 0)}>
            Remove All
        </button>
      </div>
      {
        (optionList && optionList.length === 0) ? <p className="widget__add-option-message">Please add an option to start</p> :
        optionList.map((value, index) => (
          <Option
            data={ value }
            key={ value }
            index={++index}
            removeOption={props.removeOption}
            />
        ))
      }
    </div>
  );
}

export { Options };