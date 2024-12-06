import React, { Component } from 'react';

class MyFavColorComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      color:"Red"
       
    }
  }
  // static getDerivedStateFromProps(props){
  //   return{
  //     color:props.newColor
  //   }
  // }
    // componentDidMount(){
    //   setTimeout(()=>{
    //     this.setState({color:"black"});
    //   },5000)
    // }
    shouldComponentUpdate(){
      return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
      document.getElementById("beforeUpdate").innerHTML = `Before update My Fav Color is:${prevState.color}`
    }
    changeColor= ()=>{
      this.setState({color:"brown"});
    }
    componentDidUpdate(){
      document.getElementById("afterUpdate").innerHTML=`After update My Fav Color is:${this.state.color}`
    }
  render() {
    return (
      <div>
        <h2>This is MyFavColorComp</h2>
        <p>Color is: <strong>{this.state.color}</strong></p>
        <p id='beforeUpdate'></p>
        <p id='afterUpdate'></p>
        <button type='button' onClick={()=>this.changeColor()} className='btn btn-primary'>changeColor</button>
      </div>
    )
  }
}

export default MyFavColorComp
