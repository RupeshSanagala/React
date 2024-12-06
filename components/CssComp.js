import React from "react";

import '../external.css';

import mymodule from '../mycss.module.css'

const CssComp = () =>{
    let circle ={
        width:true?"100px":"200px",
        height:true?"100px":"200px",
        borderRadius:"50%",
        border:true?"1px solid black":"2px solid green",
        margin:"auto"
    }
    return (
        <div>
            {/* use of internal css */}
            <h1 style={{color:"blue",backgroundColor:"green"}}>this is Rupesh from changepond</h1>
            <p style={circle}>hii</p>
            {/* use of external css */}
            <div className="txt-primary"><h1>Hi rupesh</h1></div>
            <div className="txt-danger"><h1>Hi rupesh</h1></div>
            {/* use of module css */}
            <div className={mymodule.special}>hello</div>
        </div>
    )
}

export default CssComp;