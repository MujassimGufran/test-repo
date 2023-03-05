
import React, { Component } from 'react'

export default class InputExample extends Component {
    constructor(){
        super()
        this.state = {
            name : "",
            email: "",
            phone:"",
            dsg:"",
            salary:"",
            city:"",
            state:""  
        }
    }
    getData(e){
    //    console.log(e.target.name,e.target.value);
   var name = e.target.name
   var value = e.target.value
   this.setState(()=>{
    return{
        ...this.state,
        [name]:value
    }
   })
 
    }
  
    postData(e){
        alert(`
            Name         : ${this.state.name}
            Email        : ${this.state.email}
            Phone        : ${this.state.phone}
            Designation  : ${this.state.dsg}
            Salary       : ${this.state.salary}
            City         : ${this.state.city}
            State        : ${this.state.state}
        `)
    }
 render() {
    return (
        <> 
        <div className='main'>
            <div className='center'>
                <h3>Input Example in class based Component</h3>
                <h5>Name : {this.state.name}</h5>
                <h5>Email : {this.state.email}</h5>
                <h5>Phone : {this.state.phone}</h5>
                <h5>Designation : {this.state.dsg}</h5>
                <h5>Salary : {this.state.salary}</h5>
                <h5>City : {this.state.city}</h5>
                <h5>State : {this.state.state}</h5>
                <form onSubmit={(e)=>{this.postData(e)}}>
                <input type='text' required name='name' placeholder='Enter the Full name : ' onChange={(e)=>{this.getData(e)}} value={this.state.name}/>
                <input type='email' required name='email' placeholder='Enter  email address : ' onChange={(e)=>{this.getData(e)}} value={this.state.email}/>
                <input type='text' required name='phone' placeholder='Enter  Phone  number : ' onChange={(e)=>{this.getData(e)}} value={this.state.phone}/>
                <input type='text' required name='dsg' placeholder='Enter the Designation : ' onChange={(e)=>{this.getData(e)}} value={this.state.dsg}/>
                <input type='text' required name='salary' placeholder='Enter the salary : ' onChange={(e)=>{this.getData(e)}} value={this.state.salary}/>           
                <input type='text' required name='city' placeholder='Enter the city name : ' onChange={(e)=>{this.getData(e)}} value={this.state.city}/>
                <input type='text' required name='state' placeholder='Enter the state name : ' onChange={(e)=>{this.getData(e)}} value={this.state.state}/>
                <button type='submit' >Submit</button>
                </form>
            </div>
        </div>
        </>
        )
  }
}



// import React, { Component } from 'react'

// export default class InputExample extends Component {
//     constructor(){
//         super()
//         this.state = {
//             name : "",
//             email: "",
//             phone:"",
//             dsg:"",
//             salary:"",
//             city:"",
//             state:""  
//         }
//     }
//     getData(e){
//     //    console.log(e.target.name,e.target.value);
//    var name = e.target.name
//    var value = e.target.value
//    if (name==="name")
//    this.setState({name:value})
//    else if (name==="email")
//    this.setState({email:value})
//    else if (name==="phone")
//    this.setState({phone:value})
//    else if (name==="dsg")
//    this.setState({dsg:value})
//    else if (name==="salary")
//    this.setState({salary:value})
//    else if (name==="city")
//    this.setState({city:value})
//    else
//    this.setState({state:value})
//     } 

  
//     postData(e){
//         alert(`
//             Name         : ${this.state.name}
//             Email        : ${this.state.email}
//             Phone        : ${this.state.phone}
//             Designation  : ${this.state.dsg}
//             Salary       : ${this.state.salary}
//             City         : ${this.state.city}
//             State        : ${this.state.state}
//         `)
//     }
     

//   render() {
//     return (
//         <> 
//         <div className='main'>
//             <div className='center'>
//                 <h3>Input Example in class based Component</h3>
//                 <h5>Name : {this.state.name}</h5>
//                 <h5>Email : {this.state.email}</h5>
//                 <h5>Phone : {this.state.phone}</h5>
//                 <h5>Designation : {this.state.dsg}</h5>
//                 <h5>Salary : {this.state.salary}</h5>
//                 <h5>City : {this.state.city}</h5>
//                 <h5>State : {this.state.state}</h5>

//                 <input type='text' name='name' placeholder='Enter the Full name : ' onChange={(e)=>{this.getData(e)}} value={this.state.name}/>
//                 <input type='email' name='email' placeholder='Enter  email address : ' onChange={(e)=>{this.getData(e)}} value={this.state.email}/>
//                 <input type='text' name='phone' placeholder='Enter  Phone  number : ' onChange={(e)=>{this.getData(e)}} value={this.state.phone}/>
//                 <input type='text' name='dsg' placeholder='Enter the Designation : ' onChange={(e)=>{this.getData(e)}} value={this.state.dsg}/>
//                 <input type='text' name='salary' placeholder='Enter the salary : ' onChange={(e)=>{this.getData(e)}} value={this.state.salary}/>           
//                 <input type='text' name='city' placeholder='Enter the city name : ' onChange={(e)=>{this.getData(e)}} value={this.state.city}/>
//                 <input type='text' name='state' placeholder='Enter the state name : ' onChange={(e)=>{this.getData(e)}} value={this.state.state}/>
//                 <button type='submit' onClick={(e)=>{this.postData(e)}}>Submit</button>
//             </div>
//         </div>
//         </>
//         )
//   }
// }
