import React,{useState} from "react";
import Child from "./Child";

export default function Parent() {
  var [user,setuser] = useState({
    id:"",
    name:"",
    dsg:"",
    salary:"",
    city:""
  })
  function getData(data){
    setuser({
      id:data.id,
      name:data.name,
      dsg:data.dsg,
      salary:data.salary,
      city:data.city
    })
  
  }
  return (
    <>
      <h1>Functio Components Example</h1>
      <h2>Parent Components</h2>
      <h3>Id : {user.id}</h3>
      <h3>Name : {user.name}</h3>
      <h3>Designation : {user.dsg}</h3>
      <h3>Salary : {user.salary}</h3>
      <h3>City : {user.city}</h3>
      <br/>
      <Child getData={getData}/>
    </>
  );
}


// import React,{useState} from "react";
// import Child from "./Child";

// export default function Parent() {
//   var [id,setid] = useState("")
//   var [name,setname] = useState("")
//   var [dsg,setdsg] = useState("")
//   var [salary,setsalary] = useState("")
//   var [city,setcity] = useState("")

//   function getData(data){
//     setid(data.id)
//     setname(data.name)
//     setdsg(data.dsg)
//     setsalary(data.salary)
//     setcity(data.city)
//   }
//   return (
//     <>
//       <h1>Functio Components Example</h1>
//       <h2>Parent Components</h2>
//       <h3>Id : {id}</h3>
//       <h3>Name : {name}</h3>
//       <h3>Designation : {dsg}</h3>
//       <h3>Salary : {salary}</h3>
//       <h3>City : {city}</h3>
//       <br/>
//       <Child getData={getData}/>
//     </>
//   );
// }



// import React from "react";
// import Child from "./Child";

// export default function Parent() {
//   function getData(data){
//     console.log(data);
//   }
//   return (
//     <>
//       <h1>Functio Components Example</h1>
//       <h2>Parent Components</h2>
//       <br/>
//       <Child getData={getData}/>
//     </>
//   );
// }



// import React from "react";
// import Child from "./Child";

// export default function Parent() {
//   return (
//     <>
//       <h1>Functio Components Example</h1>
//       <h2>Parent Components</h2>
//       <br/>
//       <Child name="Mujassim" dsg="Student" salary={847289527}/>
//     </>
//   );
// }
