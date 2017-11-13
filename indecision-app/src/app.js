class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.deleteOptionsCallback = this.deleteOptionsCallback.bind(this);
    this.getOption = this.getOption.bind(this);
    this.state = {
      options: ['option1', 'option2', 'options3']
    };
  }

  deleteOptionsCallback() {
    this.setState(() => {
      return {options: []};
    });
  }

  getOption() {
    this.setState((prevState) => {
      const index = Math.floor(Math.random() * this.state.options.length);
      const option = prevState.options[index];
      return {
        option: option
      };
    });
  }

  render() {
    const title = 'Indecision';
    const subtitle = 'Lets put our lifes into the hands of computer';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0} getOption={this.getOption}/>
        <Options options={ this.state.options } removeOptionsCallback={this.deleteOptionsCallback}/>
        <AddOption/>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const {title, subtitle } = {
      title : this.props.title,
      subtitle: this.props.subtitle
    };

    return (
      <div>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  constructor(props) {
    super(props);
    this.onPickOptionButtonClick = this.onPickOptionButtonClick.bind(this);
  }

  onPickOptionButtonClick() {
    const option = this.props.getOption();
    //alert(`Here is the picked option -> ${ option }`);
    console.log(`Here is the picked option -> ${ option }`);
  }

  render() {
    return (
      <div>
        <button
        onClick={ this.onPickOptionButtonClick }
        disabled={!this.props.hasOptions}>
        What should I do ?
        </button>
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <p key={this.props.data}>{ this.props.data }</p>
    );
  }
}

class Options extends React.Component {

  render() {
    const optionList = this.props.options;

    return (
      <div>
      <button onClick={this.props.removeOptionsCallback}>Remove All</button>
        {
          optionList.map(
            (value) => {
              return <Option data={ value } key={ value }/>
            }
          )
        }
      </div>
    );
  }
}

class AddOption extends React.Component {
  onFormSubmit(event) {
    // const option = new Option();
    // option.data = 'sdfsdfsdf';
    event.preventDefault();
    const value = event.target.elements.optionField.value.trim();
    if (value) {
      alert(value);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="optionField"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const header = new Header();

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));