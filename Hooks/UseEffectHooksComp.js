import React, { useEffect, useState } from 'react'

const UseEffectHooksComp = () => {
  const [age,setAge]= useState(50);
  const [address,setAddr]= useState("Chennai");

  //case1: no denpendency value
  // useEffect(()=>{
  //   setAge(age+50);
  // })
  //case2: when we dependencies value as a blank array
  // useEffect(()=>{
  //   setAge(age+20)
  // },[])
  //case3: When we have to execute useEffect hook as per our requirment.
  useEffect(()=>{
    setAge(age+20);
  },[address]);
  return (
    <div>
        <h2>This is UseEffectHooksComp</h2>
        <p>Age is:{age}</p>
        <p>address is: {address}</p>
        <button type='button' onClick={()=>setAddr("Ongole")} className='btn btn-danger'>changeAddr</button>
    </div>
  )
}

export default UseEffectHooksComp