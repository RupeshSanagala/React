import React, { Component } from "react";

class MyStateComp extends Component{

    constructor(){
        super();
        this.state={
            empName:"Rupesh",
            empSal:20000
        }
    }

    changeData= () =>{
        // this.setState({empName:"Rupesh Sanagala",empSal:this.state.empSal+5000});
        this.setState((prevState)=>({
                 empName:"Rupesh Reddy",empSal:prevState.empSal+10000
        }));
    }

    render(){
        return (
            <div>
                <h2>This is MyStateComp</h2>
                <p>My name is <strong>{this.state.empName}</strong> and my sal is {this.state.empSal}</p>
                <button type="button" onClick={()=> this.changeData()}>ChangeData</button>
            </div>
        )
    }
}

export default MyStateComp;