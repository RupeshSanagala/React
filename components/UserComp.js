import React from 'react'


const UserComp=(props) =>{
    if(props.uname ==="reddy"){
        throw Error ("uname not found")
    }
  return (
    <div>
        <h1>user is:{props.uname}</h1>
    </div>
  )
 
}

export default UserComp