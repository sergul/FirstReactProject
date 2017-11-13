'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.deleteOptionsCallback = _this.deleteOptionsCallback.bind(_this);
    _this.getOption = _this.getOption.bind(_this);
    _this.state = {
      options: ['option1', 'option2', 'options3']
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'deleteOptionsCallback',
    value: function deleteOptionsCallback() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'getOption',
    value: function getOption() {
      var _this2 = this;

      this.setState(function (prevState) {
        var index = Math.floor(Math.random() * _this2.state.options.length);
        var option = prevState.options[index];
        return {
          option: option
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision';
      var subtitle = 'Lets put our lifes into the hands of computer';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, getOption: this.getOption }),
        React.createElement(Options, { options: this.state.options, removeOptionsCallback: this.deleteOptionsCallback }),
        React.createElement(AddOption, null)
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _title$subtitle = {
        title: this.props.title,
        subtitle: this.props.subtitle
      },
          title = _title$subtitle.title,
          subtitle = _title$subtitle.subtitle;


      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          title
        ),
        React.createElement(
          'h2',
          null,
          subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action(props) {
    _classCallCheck(this, Action);

    var _this4 = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

    _this4.onPickOptionButtonClick = _this4.onPickOptionButtonClick.bind(_this4);
    return _this4;
  }

  _createClass(Action, [{
    key: 'onPickOptionButtonClick',
    value: function onPickOptionButtonClick() {
      var option = this.props.getOption();
      //alert(`Here is the picked option -> ${ option }`);
      console.log('Here is the picked option -> ' + option);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          {
            onClick: this.onPickOptionButtonClick,
            disabled: !this.props.hasOptions },
          'What should I do ?'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'p',
        { key: this.props.data },
        this.props.data
      );
    }
  }]);

  return Option;
}(React.Component);

var Options = function (_React$Component5) {
  _inherits(Options, _React$Component5);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {
      var optionList = this.props.options;

      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.removeOptionsCallback },
          'Remove All'
        ),
        optionList.map(function (value) {
          return React.createElement(Option, { data: value, key: value });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption() {
    _classCallCheck(this, AddOption);

    return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
  }

  _createClass(AddOption, [{
    key: 'onFormSubmit',
    value: function onFormSubmit(event) {
      // const option = new Option();
      // option.data = 'sdfsdfsdf';
      event.preventDefault();
      var value = event.target.elements.optionField.value.trim();
      if (value) {
        alert(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'form',
          { onSubmit: this.onFormSubmit },
          React.createElement('input', { type: 'text', name: 'optionField' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var header = new Header();

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
