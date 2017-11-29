import React, { Component } from 'react';
import { AddOption, Action, Options, Header, OptionModal } from './components';

class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidMount = () => {
    console.log('indecision app did mount ...');
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      //do nothing
      console.log('data parse is failed');
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length) {
      var json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  componentWillUnmount = () => {
    console.log('component will unmount');
  }

  deleteOptionsCallback = () => {
    this.setState(() => ({options: [], selectedOption: undefined}));
  }

  deleteOptionCallback = (option) => {
    this.setState((prevState) => {
      const options = prevState.options.filter(
        (optionT) => {
          return optionT !== option;
        }
      );
      return {options: options, selectedOption: undefined};
    });
  }

  getOption = (data) => {
    const index = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[index];
    this.setState((prevState) => ({
      selectedOption: option
    }));
  }

  onAddOptionClick = (newOption) => {
    if (!newOption.trim()) {
      return 'Please enter a valid option';
    } else if (this.state.options.indexOf(newOption) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      const options = prevState.options.concat(newOption);
      return ({
        options: options
      });
    });
  }

  render() {
    const subtitle = 'Lets put our lifes into the hands of computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} getOption={this.getOption}/>
          <Options options={ this.state.options }
          removeOptionsCallback={this.deleteOptionsCallback}
          removeOption={this.deleteOptionCallback}/>
          <AddOption onAddOptionClick={this.onAddOptionClick}/>
        </div>
        <OptionModal selectedOption={this.state.selectedOption}/>
      </div>
    );
  }
}

export default IndecisionApp;