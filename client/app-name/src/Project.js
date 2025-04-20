import {React,  useState, useEffect } from 'react';
const [users, setUsers] = useState([])
const [proj_name, setProjectName] = useState('');
const [proj_desc, setProjectDescription] = useState('');
const [prod_owner_id, setProductOwner] = useState('');
const [mgr_id, setManager] = useState('');
const [team_id, setTeam] = useState('');
const handleCreateProject = (event, proj_name, proj_desc, prod_owner_id, mgr_id, team_id) => {
    event.preventDefault()
    axios.post('http://localhost:9000/createProject', { proj_name, proj_desc, prod_owner_id, mgr_id, team_id })
        .catch((err) => alert('Error in Creating project'))
}
<button type="button" onClick={(event) => handleCreateProject(event, proj_name, proj_desc, prod_owner_id, mgr_id, team_id)}>
          Create Project
</button>
const mongoose = require("mongoose");

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

<select onChange={(e) => setManager(e.target.value)} value={mgr_id}>
<option value="">Select Manager</option>
{users.map((user, index) => {
 return <option key={index} value={user._id}>   
    {user.firstName} {user.lastName}
</option>
})
}
</select>