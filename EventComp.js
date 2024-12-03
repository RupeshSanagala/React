import React, { Component } from "react";

class EventComp extends Component{

    action(){
        window.alert("I am coding")
    }

    company = (comapnyname)=>{
        window.alert(`My company is ${comapnyname}`)
    }

    render(){
        return (
            <div>
                <h3>this is event component</h3>
                <button type="button" onClick={() => this.action()}>Call Action</button>
                <button type="button" onClick={() => this.company('changepond')}>Call company</button>
                <h2 onMouseOver={()=> this.action()}>hover me</h2>
            </div>
        )
    }
}

export default EventComp;