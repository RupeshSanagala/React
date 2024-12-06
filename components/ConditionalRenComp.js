import { Component } from "react";

class ConditionalRenComp extends Component{
    constructor(){
        super();
        this.state={
            isCond:true
        }
    }
    render(){
        
        //1.use of if-else
        // if(!this.state.isCond){
        //     return <h2>Admin Login Success</h2>
        // }else{
        //     return <h2>User Login Success</h2>
        // }

        //2.use of element as variable
        // let msg="";
        // if(this.state.isCond){
        //     msg="Rupesh is in chennai"
        // }else{
        //     msg="Rupesh is in andhra"
        // }
        // return <h2>{msg}</h2>

        //3.use of ternary operator
        // return (this.state.isCond)? <h2>i am good</h2>:<h2>I am bad</h2>

        //4. use of short-circuit
        return this.state.isCond && <h2>i am at sipcot</h2>
    }
}

export default ConditionalRenComp;