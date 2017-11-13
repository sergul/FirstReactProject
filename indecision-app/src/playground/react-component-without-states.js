class IndecisionApp extends React.Component {
    render() {
      const title = 'Indecision';
      const subtitle = 'Lets put our lifes into the hands of computer';
      const options = ['option1', 'option2'];
  
      return (
        <div>
          <Header title={title} subtitle={subtitle}/>
          <Action/>
          <Options options={ options }/>
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
    onActionButtonClick() {
      alert('dfgdfg');
    }
  
    render() {
      return (
        <div>
          <button onClick={ this.onActionButtonClick }>What should I do ?</button>
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
    constructor(props) {
      super(props);
      this.onRemoveAllButtonClick = this.onRemoveAllButtonClick.bind(this);
    }
  
    onRemoveAllButtonClick() {
      alert('remove all button is clicked');
      console.log(this.props.options);
    }
  
    render() {
      const optionList = this.props.options;
  
      return (
        <div>
        <button onClick={this.onRemoveAllButtonClick}>Remove All</button>
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