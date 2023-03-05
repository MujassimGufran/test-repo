import React,{useState} from 'react'

export default function InputExampleF() {

var [user, setuser] = useState({
    name:"",
    email:"",
    phone:"",
    dsg:"",
    salary:"",
    city:"",
    state:""
})
function getData(e){
    var name = e.target.name
    var value = e.target.value
    setuser((old)=>{
        return{
            ...old,
            [name]:value
        }
    })
}
function postData(e){
    e.preventDefault()
    alert(
        `
    Name          : ${user.name}
    Email         : ${user.email}
    Phone         : ${user.phone}
    Designation   : ${user.dsg}
    Salary        : ${user.salary}
    City          : ${user.city}
    State         : ${user.state}
        `
    )
}


   return (
    <>
        <div className='main'>
            <div className='center'>
                <h3>Functional Components</h3>
                <h5>Name : {user.name}</h5>
                <h5>Email : {user.email}</h5>
                <h5>Phone : {user.phone}</h5>
                <h5>Designation : {user.dsg}</h5>
                <h5>Salary: {user.salary}</h5>
                <h5>City : {user.city}</h5>
                <h5>State : {user.state}</h5>
                <form onSubmit={postData}>
                <input type="text" required name='name' placeholder='Enter Full Name : ' onChange={getData}/>
                <input type="email" required name='email' placeholder='Enter Email address : ' onChange={getData}/>
                <input type="text" required name='phone' placeholder='Enter Phone Number : ' onChange={getData}/>
                <input type="text" required name='dsg' placeholder='Enter Designation : ' onChange={getData}/>
                <input type="text" required name='salary' placeholder='Enter Full Salary : ' onChange={getData}/>
                <input type="text" required name='city' placeholder='Enter the City Name : ' onChange={getData}/>
                <input type="text" required name='state' placeholder='Enter the State Name : ' onChange={getData}/>
                <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}



// import React,{useState} from 'react'

// export default function InputExampleF() {

// var [user, setuser] = useState({
//     name:"",
//     email:"",
//     phone:"",
//     dsg:"",
//     salary:"",
//     city:"",
//     state:""
// })
// function getData(e){
//     var name = e.target.name
//     var value = e.target.value
//     if (name==="name")
//     setuser({
//         name:value,
//         email:user.email,
//         phone:user.phone,
//         dsg:user.dsg,
//         salary:user.salary,
//         city:user.city,
//         state:user.state,
//     })
//     else if (name==="email")
//     setuser({
//         name:user.name,
//         email:value,
//         phone:user.phone,
//         dsg:user.dsg,
//         salary:user.salary,
//         city:user.city,
//         state:user.state,
//     })
//     else if (name==="phone")
//     setuser({
//         name:user.name,
//         email:user.email,
//         phone:value,
//         dsg:user.dsg,
//         salary:user.salary,
//         city:user.city,
//         state:user.state,
//     })
//     else if (name==="dsg")
//     setuser({
//         name:user.name,
//         email:user.email,
//         phone:user.phone,
//         dsg:value,
//         salary:user.salary,
//         city:user.city,
//         state:user.state,
//     })
//     else if (name==="salary")
//     setuser({
//         name:user.name,
//         email:user.email,
//         phone:user.phone,
//         dsg:user.dsg,
//         salary:value,
//         city:user.salary,
//         state:user.state,
//     })
//     else if (name==="city")
//     setuser({
//         name:user.name,
//         email:user.email,
//         phone:user.phone,
//         dsg:user.dsg,
//         salary:user.salary,
//         city:value,
//         state:user.state,
//     })
//     else 
//     setuser({
//         name:user.name,
//         email:user.email,
//         phone:user.phone,
//         dsg:user.dsg,
//         salary:user.salary,
//         city:user.city,
//         state:value,
//     })
// }
// function postData(e){
//     alert(
//         `
//     Name          : ${user.name}
//     Email         : ${user.email}
//     Phone         : ${user.phone}
//     Designation   : ${user.dsg}
//     Salary        : ${user.salary}
//     City          : ${user.city}
//     State         : ${user.state}
//         `
//     )
// }


//    return (
//     <>
//         <div className='main'>
//             <div className='center'>
//                 <h3>Functional Components</h3>
//                 <h5>Name : {user.name}</h5>
//                 <h5>Email : {user.email}</h5>
//                 <h5>Phone : {user.phone}</h5>
//                 <h5>Designation : {user.dsg}</h5>
//                 <h5>Salary: {user.salary}</h5>
//                 <h5>City : {user.city}</h5>
//                 <h5>State : {user.state}</h5>
//                 <input type="text" name='name' placeholder='Enter Full Name : ' onChange={getData}/>
//                 <input type="email" name='email' placeholder='Enter Email address : ' onChange={getData}/>
//                 <input type="text" name='phone' placeholder='Enter Phone Number : ' onChange={getData}/>
//                 <input type="text" name='dsg' placeholder='Enter Designation : ' onChange={getData}/>
//                 <input type="text" name='salary' placeholder='Enter Full Salary : ' onChange={getData}/>
//                 <input type="text" name='city' placeholder='Enter the City Name : ' onChange={getData}/>
//                 <input type="text" name='state' placeholder='Enter the State Name : ' onChange={getData}/>
//                 <button type='submit' onClick={postData}>Submit</button>
//             </div>
//         </div>
//     </>
//   )
// }



// import React, { useState } from 'react'

// export default function InputExample() {
//     var [name, setname] = useState("")
//     function getData(e){
//         setname(e.target.value)
//     }
//     function postData(e){
//         alert("Hello "+name)
//     }
//     return (
//         <div className='main'>
//             <div className="center">
//                 <h3>Functional Component</h3>
//                 <h5>Name : {name}</h5>
//                 <input type="text" name="name" placeholder='Enter Full Name : ' onChange={getData} />
//                 <button type='submit' onClick={postData}>Submit</button>
//             </div>
//         </div>
//     )
// }
