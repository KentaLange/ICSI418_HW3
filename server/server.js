import mongoose from "mongoose";
import React, { useState, useEffect } from 'react';
const [users, setUsers] = useState([])
const TeamSchema = new mongoose.Schema({
    team_name: String
});

const Team = mongoose.model("Team", TeamSchema);

export default Team;

import Project from './Projects.js';
app.post('/createProject', async (req, res) => {
    try {
            const project = new Project(req.body);
            project.save()
            console.log(`Project created! ${project}`)
            res.send(project)
    }
    catch (error){
        res.status(500).send(error)
    }
})









