import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Header } from './Header'

export const Addstudent = () => {

    const [student, setStudent]= useState({
        name:"",
        username:"",
        email:""
    })

    let navigate= useNavigate()

    const{name, username, email}=student

    const onInputChange =(e)=>{
        
        setStudent({ ...student,[e.target.name]:e.target.value})

    }

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/student",student);
        navigate("/");
    }

  return (
    <>
    <Header header="Add Student"/>
        <form onSubmit={(e)=> onSubmit(e)}>
            <label htmlFor="name">Name</label>
        <input className='input' 
       id="name"
       type="text"
       name="name"
       placeholder='Name'
       value={name}
        onChange={(e)=>onInputChange(e)}
        />

        <label htmlFor="username">Username</label>
        <input className='input' 
        id='username'
        name='username'
        type="text" 
        placeholder='Username' 
        value={username}
        onChange={(e)=>onInputChange(e)}
        />

        <label htmlFor="email">E-mail</label>
        <input className='input'
        id="email" 
        type="text" 
        name='email'
        placeholder='E-mail' 
        value={email}
        onChange={(e)=>onInputChange(e)}
        />
        <button className='btn1' type='submit'>Submit</button>
       <Link className='btn-cancel' to="/">Cancel</Link>   
    </form>
    
   
    </>
  )
}
