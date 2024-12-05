import React, { useState } from 'react'

const FormValidationComp = () => {
    const[user,setUser]= useState({
        fname:"",
        ismale:true,
        term:false


    });

    const changeInput = (event) =>{
        // console.log(event.target.type);
        // console.log(event.target.name);
        // console.log(event.target.value);
        //Destructuring
        const {type,name,value,checked} = event.target;
        setUser({...user,[name]:type==="checkbox"? checked:value});
    }

    const checkData = (event)=>{
        event.preventDefault();
        if(user.fname.trim()===""){
            window.alert("fname is required");
            return false;
        }
        if(!user.fname.trim().match("^[a-zA-Z ]{3,20}$")){
            window.alert("fname must contain min 3 and max 20 characters");
            return false;
        }
        if(user.term === false){
            window.alert("Please accept terms and condition");
            return false;
        }
        if(!user.ismale === false){
            window.alert("Female are not allowed");
            return false;
        }
        window.alert(JSON.stringify(user))
    }
  return (
    <div>
        <h2>This is FormValidationComp</h2>
        <form onSubmit={checkData}>
           <div>
           <labe>Enter your FirstName:</labe>
           <input type='text' name='fname' onChange={changeInput} value={user.fname} />
           </div>
           <div>
           <input type='checkbox' name='ismale' onChange={changeInput} value={user.ismale} />Select Gender
           </div>
           <div>
           <input type='checkbox' name='term' onChange={changeInput} value={user.term} />Accept term and Condition
           </div>
           <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidationComp