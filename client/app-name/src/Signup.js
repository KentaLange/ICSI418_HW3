import axios from 'axios'
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ViewProject from './ViewProject.js';

function MyButton() {
  return (
    <Link to="/ViewProject">
      <button class="buttonStyle">Go to Login Page</button>
    </Link>
    
  );
}
const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //Function to handle signup. Sends a POST request to the server with the user's information.
  const handleSignUp = (event, firstName, lastName, username, password) => {
    axios.post('http://localhost:9000/createUser', { firstName, lastName, username, password })
      .catch((err) => alert('Error in Signing Up'))
  }
  //Communicates with the server to check if the user exists in the database.
  //+Button that takes you to login page
  return (
    <div>
      <h1>First Name</h1>
      <input
        type="First_Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      
      <h1>Last Name</h1>
      <input
        type="Last_Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      
      <h1>User Name</h1>
      <input
        type="User_Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      
      <h1>Password</h1>
      <input
        type="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={(event) => handleSignUp(event, firstName, lastName, username, password)}>
      Sign up
      </button>
      <MyButton/>
    </div>
    
  );
}

export default SignUp;