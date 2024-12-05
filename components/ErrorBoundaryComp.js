import React, { Component } from 'react'

class ErrorBoundaryComp extends Component {
    constructor(props){
        super();
        this.state={
            isCond:false
        }
    }
    static getDerivedStateFromError(){
        return{
            isCond:true
        }
    }

    // componentDidCatch(error){
    //     console.log(error);
    // }
  render() {
    if(this.state.isCond){
        return <div><h1>user not found</h1></div>
    }
    return this.props.children;
    
  }
}

export default ErrorBoundaryComp