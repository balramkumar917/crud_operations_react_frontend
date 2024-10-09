import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      <a href="/">Students</a>
    </div>
    <ul className="navbar-links">
    
      <Link className='btn1' to="/adduser">Add Student</Link>
    </ul>
  </nav>
  )
}


