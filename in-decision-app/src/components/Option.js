import React, { Component } from 'react';
import classNames from 'classnames';

class Option extends Component {

  state = {
    isOptionTextOverflown: false,
    isOptionTextExpanded: false
  };

  onRemove = (event) => {
    event.preventDefault();
    this.props.removeOption(this.props.data);
  }

  onReadMoreclick = (event) => {
    event.preventDefault();
    this.setState({isOptionTextExpanded: true, isOptionTextExpanded: !this.state.isOptionTextExpanded});
  }

  componentDidMount() {
    if (this._p) {
      const isTextOverflown = this._p.scrollWidth > this._p.clientWidth;
      if (isTextOverflown) {
        this.setState({isOptionTextOverflown: isTextOverflown});
      }
    }
  }

  render() {
    const styles = classNames('option__text',
            {'option__text--hide-overflow': this.state.isOptionTextOverflown,
             'option__text--show-overflow': this.state.isOptionTextExpanded})
    return (
      <div className="option">
        <div className="option__row">
          <p
            ref={ (p) => {this._p = p} }
            className={styles}>
            { this.props.index }.{ this.props.data }
          </p>
          <div>
            <button
              className="button--link nowrap-white-space"
              onClick={this.onRemove}>Remove
            </button>
            <button
              className={classNames('button--link', 'nowrap-white-space', 'small-font-size',
              {'button-link--hidden': !this.state.isOptionTextOverflown,
               'button-link--show': this.state.isShowLessButtonPressed})}
              onClick={this.onReadMoreclick}>{!this.state.isOptionTextExpanded ? 'Read More' : 'Show Less'}
            </button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default Option;