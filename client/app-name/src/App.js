import './App.css';
//import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Signup from './Signup.js';
import CreateProject from './createProject.js';
import ViewProject from './ViewProject.js';
//Routing to login and sign up pages
function App() {
  
  return (
    <Router>
    <Routes>
        <Route path="/" element={<CreateProject/>}></Route>
          <Route path="/Signup" element= {<Signup/>}></Route>
          <Route path="/CreateProject" element={<CreateProject/>}></Route>
          <Route path="/ViewProject" element={<ViewProject/>}></Route>
    </Routes>
    </Router>
    
  );
}

export default App;
