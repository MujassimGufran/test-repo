import React,{useState} from "react";

export default function StateManagementExampleF() {
  var [num,setnum] = useState(1)
  function decrement(){
    setnum(--num)
  }
  function increment(){
    setnum(++num)
  }
  return (
    <>
      <h1>Functional Components</h1>
      <h2>State Management Example</h2>
      <h3>num = {num}</h3>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </>
  )
}


// import React,{useState} from "react";

// export default function StateManagementExampleF() {
//   var [num,setnum] = useState(1)
//   function decrement(){
//     setnum(--num)
//   }
//   function increment(){
//     setnum(++num)
//   }
//   return (
//     <>
//       <h1>Functional Components</h1>
//       <h2>State Management Example</h2>
//       <h3>num = {num}</h3>
//       <button onClick={()=>decrement()}>Decrement</button>
//       <button onClick={()=>increment()}>Increment</button>
//     </>
//   )
// }




