
import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(){
    super()
    this.state= {
      id:"",
      name:"",
      dsg:"",
      salary:"",
      city:""
    }
  }
  getData = (data)=>{
    this.setState({
      id:data.id,
      name:data.name,
      dsg:data.dsg,
      salary:data.salary,
      city:data.city
    })
    }
  render() { 
    return (
      <>
        <h1>Class Component Props Example</h1>
        <h2>Parent Component</h2>
        <h4>Id :{this.state.id}</h4>
        <h4>Name :{this.state.name}</h4>
        <h4>Designation :{this.state.dsg}</h4>
        <h4>Salary :{this.state.salary}</h4>
        <h4>City :{this.state.city}</h4>
        <br/>
        <Child getData={this.getData}/>
      </>
    );
  }
}



// import React, { Component } from "react";
// import Child from "./Child";

// export default class Parent extends Component {

//   getData(data){
//     console.log(data);
//   }
//   render() { 
//     return (
//       <>
//         <h1>Class Component Props Example</h1>
//         <h2>Parent Component</h2>
//         <br/>
//         <Child getData={this.getData}/>
//       </>
//     );
//   }
// }


// ***** Parent to child
// import React, { Component } from "react";
// import Child from "./Child";

// export default class Parent extends Component {
//   render() { 
//     return (
//       <>
//         <h1>Class Component Props Example</h1>
//         <h2>Parent Component</h2>
//         <br/>
//         <Child name="Mujassim" dsg="Student" salary={12334} />
//       </>
//     );
//   }
// }
