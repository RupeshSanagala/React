import React, { Component } from 'react'
import ChildComp from './ChildComp'
import MypureComp from './MypureComp'
import MyMemoComp from './MyMemoComp'
export default class ParentComp extends Component {
    constructor(props){
        super(props)
        this.state = {
            empName:"Rupesh",
            empSal:30000,

        }
    }
    changeStateData = ()=>{
        this.setState((prevState) => ({
            empName:"Rupesh Sanagala" ,empSal:prevState.empSal+5000
        }))
    }

  render() {
        const {empName,empSal} = this.state; // destructuring of state
        const {gender,contact} = this.props; //destructuring of props



    return (
      <div>
       <h2>This is ParentComp</h2>
       <p>My name is <strong>{this.state.empName}</strong> and my sal is {this.state.empSal}</p>
       <p>Gender : EmpName is :<strong>{empName}</strong> , Sal is : <strong>{empSal}</strong></p>
       <p>Gender : <strong>{gender}</strong> , Contact: <strong>{contact}</strong></p>
       <button type='button' onClick={() => this.changeStateData()}>Change State Data</button>
       <hr />
       <ChildComp pname="pushpa" page={40} manageState={this.changeStateData}></ChildComp>
       <MypureComp empName={empName} empSal={empSal}></MypureComp>
       <MyMemoComp empName={empName} empSal={empSal}></MyMemoComp>
       </div>
       
    )
  }
}
