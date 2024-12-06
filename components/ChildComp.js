import React from 'react'

const ChildComp = ({pname,page,manageState}) => {
//   const {name,sal,manageState} = props;
    return (
      <div>
        <h1>This is ChildComp</h1>
        <p>pname is: {pname} and page is: {page}</p>
        <button type='button' onClick={manageState}>ChangeData</button>
      </div>
    )
}


export default ChildComp;
