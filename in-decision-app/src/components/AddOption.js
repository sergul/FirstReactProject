import React, { Component } from 'react';

class AddOption extends Component {
  state = {
    error: undefined
  };
  
  onFormSubmit = (event) => {
    event.preventDefault();

    const value = event.target.elements.optionField.value.trim();
    const error = this.props.onAddOptionClick(value);
    this.setState({
      error: error
    });

    if (!error) {
      event.target.elements.optionField.value = '';
    }
  }
  
    render() {
      return (
        <div>
          <p className="add-option-error">{this.state.error}</p>
          <form
            className="add-option"
            onSubmit={this.onFormSubmit}>
            <input className="add-option__input" type="text" name="optionField"/>
            <button className="button">Add Option</button>
          </form>
        </div>
      );
    }
  }

  export { AddOption };