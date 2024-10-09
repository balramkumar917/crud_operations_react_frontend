import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from './Header'
import { Link } from 'react-router-dom'

export const ViewStudent = () => {

    const[student, setStudent]=useState({
        name:"",
        username:"",
        email:""
    })

    const {id}= useParams()

    useEffect(()=>{
        fetchStudent();
    },[])

    const fetchStudent=async()=>{
        const result = await axios.get(`http://localhost:8080/students/${id}`)
        setStudent(result.data)
        console.log(student);
    }

  return (
    <>
    <Header header="Student Details" ></Header>

    <div className='container'>
        <div className='card'>
            <div className='student-name'>
            <h2> Name : {student.name}</h2> 
                    <h3>Username : {student.username}</h3>
                    <h3>E-mail : {student.email}</h3>
                

            </div>  
            <Link className="btn-home" to="/">Go To Home</Link>  
        </div>
    </div>
    </>
  )
}
