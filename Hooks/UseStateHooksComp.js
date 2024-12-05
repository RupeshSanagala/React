import React, { useState } from 'react'

const UseStateHooksComp = () => {
  const[count,setCount]=useState(0);
  const[name,setName]=useState("Rupesh");

  const incrementCount=()=>{
    setCount(count+1);
  }

  return (
    <div>
        <h2>This is UseStateHooksComp</h2>
        <p>Copunter Value: <strong>{count}</strong></p>
        <button type='button' onClick={()=> incrementCount()} className='btn btn-primary'>ChangeCount</button>{" "}
        <button type='button' onClick={() => setCount(count+2)} className='btn btn-primary'>ChangeCount</button>{" "}
        <hr />
        <p>My name: {name}</p>
        <button type='button' onClick={()=> setName("Rupesh Kumar Reddy Sanagala")} className='btn btn-primary'>ChangeName</button>
    </div>
  )
}

export default UseStateHooksComp