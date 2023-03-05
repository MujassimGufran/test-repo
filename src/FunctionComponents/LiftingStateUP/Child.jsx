import React from 'react'

export default function Child(props) {
  return (
    <>
    <h2>Child Components</h2>
    <button onClick={()=>{
      props.getData({
        id:1001,
        name:"Mujassim",
        dsg:"Student",
        salary:2334,
        city:"Delhi"
      })
    }}>Click to send data child to parent Components</button>
    </>
  )
}
 