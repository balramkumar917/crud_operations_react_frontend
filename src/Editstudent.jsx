import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Header } from './Header'

export const Editstudent = () => {

    const [student, setStudent]= useState({
        name:"",
        username:"",
        email:""
    })

    const {id}= useParams()

    let navigate= useNavigate()

    const{name, username, email}=student

    const onInputChange =(e)=>{
        
        setStudent({ ...student,[e.target.name]:e.target.value})

    }

    useEffect(()=>{
        fetchStudent();
    },[]);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:8080/students/${id}`,student);
        navigate("/");
    }

    const fetchStudent=async()=>{
        const result = await axios.get(`http://localhost:8080/students/${id}`)
        setStudent(result.data)
    }

  return (
    <>
        <Header header="Edit Student"/>
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
