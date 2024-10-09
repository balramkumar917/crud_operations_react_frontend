import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Editstudent } from './Editstudent';

export const Homepage = () => {

    const {id}= useParams()

    const [student, setStudent]= useState([]);

    useEffect(()=>{
        getData();
    },[]);

    const getData= async()=>{
        const  result = await axios.get("http://localhost:8080/students");
        setStudent(result.data);
    };
    
    const deleteStudent=async(id)=>{
        await axios.delete(`http://localhost:8080/students/${id}`);
        getData();
    }

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>E-mail</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {student.map((student,index)=>(
             <tr >
             <td key={index}>{index+1}</td>
             <td>{student.name}</td>
             <td>{student.username}</td>
             <td>{student.email}</td>
             <td>
                <Link className='btn1' 
                to={`/viewstudent/${student.id}`}
                >View</Link>
                <Link className='btn2'
                to={`/editstudent/${student.id}`}
                >Edit</Link>
                <button className='btn3'
                onClick={()=>deleteStudent(student.id)}
                >Delete</button>
             </td>
   
           </tr>

        ))}
       
        
      </tbody>
    </table>
  )
}


