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
          <form onSubmit={this.onFormSubmit}>
            <input type="text" name="optionField"/>
            <button className="button">Add Option</button>
            <p>{this.state.error}</p>
          </form>
        </div>
      );
    }
  }

  export { AddOption };