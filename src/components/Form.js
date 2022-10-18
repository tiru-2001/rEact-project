import React, { useState } from 'react'
import './form.css'

function Form() {

  const[changevalue,setvalue]=useState({
    fname:"",
    numbers:"",
    password:"",
    email:""

  })

  const change=(event)=>{
    let name=event.target.name;
    let val=event.target.value;
 
   setvalue((prev)=>{
    if(name=="fname"){
      return{
        fname:val,
        numbers:prev.numbers,
        password:prev.password,
        email:prev.email
      }
      

    }

    else if(name=="numbers"){
      return{
        fname:prev.fname,
        numbers:val,
        password:prev.password,
        email:prev.email
      }
  }
  else if(name=="password"){
    return{
        fname:prev.fname,
        numbers:prev.numbers,
        password:val,
        email:prev.email
    }
  }
  else{
    return{
      fname:prev.fname,
        numbers:prev.numbers,
        password:prev.password,
        email:val
    }
  }
   })
  
}
const submit=()=>{
  alert("form submitted")
}
return (
<>
   <div className='formContainer'>
   <h2>Contact form</h2>
    <form onSubmit={submit}>
        <label className='nam' htmlFor="name">Name:</label><br />
        <input name='fname' onChange={change} id='name' type="text" value={changevalue.fname} placeholder='enter your name' />
        <br />

        <label htmlFor="number">Number:</label><br />
        <input name='numbers' onChange={change} id='number' value={changevalue.numbers} type="number" placeholder='enter your number' />
        <br />

        <label htmlFor="password">Password:</label><br />
        <input name='password' onChange={change} id='password' value={changevalue.password} type="password" placeholder='enter password' />
        <br />
        
        <label htmlFor="email">Email:</label><br />
        <input name='email' onChange={change} id='email' type="email" value={changevalue.email} placeholder='enter your email' /><br />
        <button type='submit'>submit</button>
    </form>
   </div> 
</>
  )
}
export default Form;