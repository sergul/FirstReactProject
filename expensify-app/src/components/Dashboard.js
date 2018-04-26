import React, { Component } from 'react';
import ExpenseList from './ExpsnseList';

class Dashboard extends Component {
  state = {
    
  };
  
  render() {
    return (
      <div>
        <ExpenseList />
      </div>
    );
  }
}

export { Dashboard };