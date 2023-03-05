import React from 'react'
import p2 from "../assets/Images/p1.jpg"

export default function Images() {
  return (
    <>
        <div className='main'>
            <div className='center'>
                <h3>Images Example</h3>
            <div className='items'>
                <img src={require("../assets/Images/p1.jpg")}></img>
                <img src={p2}></img>
                <img src='assets/images/p3.jpg'></img>

            </div>
            </div>
        </div>
    </>
  )
}
