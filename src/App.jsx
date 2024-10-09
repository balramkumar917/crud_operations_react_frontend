import React from 'react';
import { Navbar } from './Navbar';
import { Homepage } from './Homepage';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Addstudent } from './Addstudent';
import { Editstudent } from './Editstudent';
import { ViewStudent } from './ViewStudent';

export const App = () => {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Homepage/>}/>
          <Route exact path='/adduser' element={<Addstudent/>}/>
          <Route exact path='/editstudent/:id' element={<Editstudent/>}/>
          <Route exact path='/viewstudent/:id' element={<ViewStudent/>}/>
        </Routes>
    </Router>
    
  )
}
export default App
