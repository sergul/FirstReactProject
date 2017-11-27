import React from 'react';
import Option from './Option';

const Options = (props) => {
    
      const optionList = props.options;
      return (
        <div>
        <button onClick={props.removeOptionsCallback}>Remove All</button>
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