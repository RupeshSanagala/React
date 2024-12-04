import React, { Component } from 'react'

export default class MyCounterComp extends Component {
    constructor(){
        super();
        this.state ={
            count:0
        }
    }

    increment ()=>{
        this.setState((prevState)=>({
            {count:prevState.count+1,}

        }));

    }

    decrement ()=>{
        this.setState((prevState)=>({
            {count:prevState.count-1,}

        }));

    }

    reset ()=>{
        this.setState(()=>({
            {count: 0,}

        }));

    }


  render() {
    return (
      <div>
        <h1>This is MyCounterComp</h1>
        <button type="buttom" onClick={this.increment()}>count++</button>
        <button type="buttom" onClick={this.decrement()}>count--</button>
        <button type="reset" onClick={this.reset()}>reset</button>
      </div>
    )
  }
}
