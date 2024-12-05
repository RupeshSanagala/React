import React, { Component } from 'react'

export class EmpDetails extends Component {
    constructor(){
        super();
        this.state={
            empdetails:[
                {id:4568,name:'druva',post:"java dev",salary:34560,city:"chennai",state:"tamil Nadu",age:72,gender:"male"},
                {id:4569,name:'ramu',post:"Python dev",salary:44560,city:"mumbai",state:"tamil Nadu",age:16,gender:"male"},
                {id:5468,name:'ravi',post:".net dev",salary:24560,city:"bangalore",state:"tamil Nadu",age:36,gender:"male"},
                {id:2368,name:'ramya',post:"C++ dev",salary:14560,city:"coimbatore",state:"tamil Nadu",age:66,gender:"Female"},
                {id:4768,name:'navya',post:"Manager",salary:74560,city:"pune",state:"Maharastra",age:61,gender:"Female"},
                {id:4168,name:'sanvi',post:"javaScript dev",salary:94560,city:"ongole",state:"Andhra",age:56,gender:"Female"},
                {id:4968,name:'jay',post:"React dev",salary:84560,city:"vizag",state:"Andhra",age:46,gender:"male"},
                {id:4168,name:'amit',post:"Angular dev",salary:25560,city:"chennai",state:"tamil Nadu",age:26,gender:"male"},
                {id:4268,name:'ajay',post:"Golang dev",salary:72560,city:"chennai",state:"tamil Nadu",age:35,gender:"male"},
                {id:3568,name:'vinod',post:"Manager",salary:30560,city:"chennai",state:"tamil Nadu",age:24,gender:"male"}
            ]
        }
    }
  render() {
    return (
      <div>
        <h1>Emp Details</h1>
        <table border="2px" >
            
            <thead>
                <tr>
                <th>empId</th>
                <th>Ename</th>
                <th>E_post</th>
                <th>E_salary</th>
                <th>E_city</th>
                <th>E_state</th>
                <th>E_age</th>
                <th>E_gender</th>
                </tr>
                
            </thead>
            <tbody>
            {this.state.empdetails.map((empdetails) => (
                            <tr key={empdetails.id}>
                                <td>{empdetails.id}</td>
                                <td>{empdetails.name}</td>
                                <td>{empdetails.post}</td>
                                <td>{empdetails.salary}</td>
                                <td>{empdetails.city}</td>
                                <td>{empdetails.state}</td>
                                <td>{empdetails.age}</td>
                                <td>{empdetails.gender}</td>
                            </tr>
                        ))}
            </tbody>
        </table>
      </div>
    )
  }
}

export default EmpDetails