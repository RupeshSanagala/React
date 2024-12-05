import React, { Component } from 'react'
import MyHocComp from './MyHocComp';
class ClickCounterComp extends Component {

  constructor(){
    super();
    this.state = {
        count: 0
      };
    }

    increment = () => {
        this.setState(prevState => ({
          count: prevState.count + 3
        }));
      };


  render() {
    return (
      <div>
        <h1>Counter Click: {this.state.count}</h1>
        
        <button onClick={this.increment}>Increment</button>
        {/* <p>Counter:{this.props.count}</p>
        <button onClick={this.props.incrementCounter}>Increment</button> */}
      </div>
    )
  }
}

export default MyHocComp(ClickCounterComp);
