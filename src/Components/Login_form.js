import React, { useState } from 'react';

const Login_form = () => {


    const [login,setlogin]=useState({email:"",password:""});

 const hndlChange=(e)=>{
    var name,value;
    e.preventDefault();
    name=e.target.name;
    value=e.target.value; 
    setlogin({...login,[name]:[value]});
    console.log(login.email)
 }
     
  return (
<>
<div className='main_form'>
 <input name="email" value={login.email} onChange={hndlChange}placeholder='email' type="email"/>
 <input name="password" value={login.password} onChange={hndlChange}placeholder='password' type="password"/>
 <button style={{width:"7rem",height:"5rem"}}>Login</button>

 
</div>
</>
)
};

export default Login_form;
