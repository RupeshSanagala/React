import React, { useState } from 'react'

const FormValidationComp = () => {
    let myCourses= ["React","Java","Angular","Python"];
    const[user,setUser]= useState({
        fname:"",
        course:"",
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
        if(user.course === false){
            window.alert("course is required");
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
        
        window.alert(JSON.stringify(user))
    }
  return (
    <div>
        <h2>This is FormValidationComp</h2>
        <form onSubmit={checkData}>
           <div>
           <label>Enter your FirstName:</label>
           <input type='text' name='fname' onChange={changeInput} value={user.fname} /> 
           </div><br></br>
           <div>
            <label>select your course:</label>
             <select onChange={changeInput} value={user.course}>
                <option value="">select your course</option>
                {
                    myCourses.map((val,index)=>{
                        return <option value={val} key={index}>{val}</option>
                    })
                }
             </select>
           </div><br></br>
           <div>
           <input type='checkbox' name='term' onChange={changeInput} value={user.term} />Accept term and Condition
           </div><br></br>
           <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormValidationComp