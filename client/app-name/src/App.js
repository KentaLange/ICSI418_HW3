import './App.css';
//import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login.js';
import Signup from './Signup.js';
import CreateProject from './createProject.js';
//Routing to login and sign up pages
function App() {
  
  return (
    <Router>
    <Routes>
        <Route path="/" element={<CreateProject/>}></Route>
          <Route path="/Signup" element= {<Signup/>}></Route>
          <Route path="/Login" element= {<Login/>}></Route>
    </Routes>
    </Router>
    
  );
}

export default App;
