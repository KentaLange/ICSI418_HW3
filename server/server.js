/*import mongoose from "mongoose";
// Removed React imports and unused state declaration
const TeamSchema = new mongoose.Schema({
    team_name: String
});

const Team = mongoose.model("Team", TeamSchema);

//export default Team;

import express from 'express';
import Project from '/Users/kl/dev/ICSI418_HW3/server/Project.js';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.json());

app.post('/createProject', async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        console.log(`Project created! ${project}`);
        res.send(project);
    } catch (error) {
        res.status(500).send(error);
    }
});

const ProjectSchema = new mongoose.Schema({
    project_name: String
});

const Projec1 = mongoose.model("Project", ProjectSchema);

export default Project;
//export default app;*/
const mongoose = require("mongoose");
//import mongoose from 'mongoose'

import {React,  useState, useEffect } from 'react';
const express = require('express');
const cors = require('cors');
const app = express();
const ProjectSchema = new mongoose.Schema({
    proj_name: String,
    proj_desc: String,
    prod_owner_id: String,
    mgr_id: mongoose.Schema.Types.ObjectId,
    team_id: String
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
app.get('/getUsers', async (req, res) => {
    try {
        const userList = await User.find({}, {firstName:1, lastName:1});
        res.send(userList)
    }
    catch (error) {
        res.status(500).send(error)
    }
})
useEffect(() => {
    axios.get('http://localhost:9000/getUsers')
    .then(function (response) {
      setUsers(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
    }, []);
    useEffect(() => {
    axios.get('http://localhost:9000/getUsers')
    .then(function (response) {
      setUsers(response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
}, []);







