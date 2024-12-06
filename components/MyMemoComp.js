
import React from 'react'

const MyMemoComp =({empName,empSal})=>{
    console.log('memo-comp render')
    return(
        <div>
        <h1>This is MemoComp</h1>
        <p>pname is: {empName} and page is: {empSal}</p>
    </div>
    )
       
    
}
export default React.memo(MyMemoComp);