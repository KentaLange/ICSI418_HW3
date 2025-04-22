import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ViewProject from './ViewProject.js';

const CreateProject = () => {
    const [proj_name, setProjectName] = useState('');
    const [proj_desc, setProjectDescription] = useState('');
    const [prod_owner_id, setProductOwner] = useState('');
    const [mgr_id, setManager] = useState('');
    const [team_id, setTeam] = useState('');

    const handleCreateProject = (event) => {
        event.preventDefault();
        axios.post('http://localhost:9000/createProject', { proj_name, proj_desc, prod_owner_id, mgr_id, team_id })
            .catch((err) => alert('Error in Creating project'));
    };

    function MyButton() {
        return (
          <Link to="/ViewProject">
            <button class="buttonStyle">Go to View Project Page</button>
          </Link>
          
        );
      }
    return (
        <div>

       
        
        <h1>Project Name</h1>
        <input
          type="Project_Name"
          value={proj_name}
          onChange={(e) => setProjectName(e.target.value)}
        />
        
        <h1>project description</h1>
        <input
          type="proj_desc"
          value={proj_desc}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        
        <h1>Product_Owner</h1>
        <input
          type="Product_Owner"
          value={prod_owner_id}
          onChange={(e) => setProductOwner(e.target.value)}
        />
        
        <h1>Manager</h1>
        <input
          type="Manager"
          value={mgr_id}
          onChange={(e) => setManager(e.target.value)}
        />

        <h1>Team</h1>
        <input
          type="Team"
          value={team_id}
          onChange={(e) =>  setTeam(e.target.value)}
        />

        <button type="button" onClick={handleCreateProject}>Create Project</button>
        <MyButton/>
      </div>
    );
};

export default CreateProject;