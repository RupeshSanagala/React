import React, { Component } from 'react'

export default class HoverCounterComp extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
          };
        }
    
        increment = () => {
            this.setState({
              count: this.state.count + 5
            });
          };

  render() {
    return (
      <div>
        <h1>Count Hover: {this.state.count}</h1>
        <button type='button' onMouseOver={this.increment}>hover on me to increment</button>
      </div>
    )
  }
}
