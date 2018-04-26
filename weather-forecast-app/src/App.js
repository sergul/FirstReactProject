import React, { Component } from 'react';
import ForecastPanel from './components/ForecastPanel';

class App extends Component {
  state = {
    
  };

  render() {
    return (
      <div className="center-horizontally-parent">
        <ForecastPanel />
      </div>
    );
  }
}

export default App;