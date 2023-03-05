
import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return (
      <>
        <h2>Child Component</h2>
       <button onClick={()=>this.props.getData({
        id:76837,
        name:"Mujassim",
        dsg:"student",
        salary:"8738381",
        city:"Noida"
       })}>Click to send Data from parent</button>
      </>
    );
  }
}



// ********* Parent to child

// import React, { Component } from "react";

// export default class Child extends Component {
//   render() {
//     return (
//       <>
//         <h2>Child Component</h2>
//         <h3>Name : {this.props.name}</h3>
//         <h3>Designation : {this.props.dsg}</h3>
//         <h3>Salary : {this.props.salary}</h3>
//       </>
//     );
//   }
// }
