import React, { Component } from 'react';

class MyCounterComp extends Component {
  constructor(props) {
    super(props);
    // Initialize state with count = 0
    this.state = {
      count: 0
    };
  }

  // Method to increment the count
  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  // Method to decrement the count
  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  // Method to reset the count to 0
  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default MyCounterComp;


