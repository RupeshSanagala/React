import React, { Component } from 'react'

export class VirtualDOM extends Component {
    constructor(props){
        super(props)

        this.state={
            breakFast: [
                {id:100,itemName:"Biryani",price:'200rs'},
                {id:101,itemName:"Dosa",price:'30rs'},
                {id:102,itemName:"idli",price:'10rs'},
                {id:103,itemName:"vada",price:'5rs'}
            ],
            courses: ["java","python","C","C++"]
        }
    }
  render() {
    const {breakFast} = this.state; //Destructuring
    const{courses} = this.state;
    return (
      <div>
        <h1>VirtualDOM</h1>
        <ul>
            {
                breakFast.length>0 && breakFast.map((val,index) =>{
                   return <li key={val.id}>{val.itemName}~{val.price}</li>
                })
            }
        </ul>
        <hr/>
        <label>Select Course:</label>
        <select>
            {
                courses.map((val,index) =>{
                    return <option value={val} key={index}>{val}</option>
                 })
            }
             
            
        </select>
       

      </div>
    )
  }
}

export default VirtualDOM