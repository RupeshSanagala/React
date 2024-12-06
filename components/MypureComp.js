import React, { PureComponent } from 'react'

export default class MypureComp extends PureComponent {
  render(empName,empSal) {
    console.log("pure-comp render")
    return (
      <div>
        <h1>This is MypureComp</h1>
        <p>pname is: {empName} and page is: {empSal}</p>
      </div>
    )
  }
}
