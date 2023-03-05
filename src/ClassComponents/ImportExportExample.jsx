import React, { Component } from 'react'


var name1 = "Mujassim"
var arr1 = [10,20,30,40,50,60,70,80]
var emp1 = {
    id:988676,
    name:"Gufran",
    dsg:"Student",
    city:"Delhi",
    state:"UP"
}
function display1(){
    return(<h3>This is display1 function</h3>)
}

export default class ImportExportExample extends Component {
  render() {
    return (
      <>
        <h1>Class Component Example</h1>
      </>
    )
  }    
}
export{name1,arr1,emp1,display1}

