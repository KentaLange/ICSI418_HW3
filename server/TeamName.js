const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
    team_name: String
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
app.get('/getProjects', async (req, res) => {
    try {
        const projects = await Project.find()
        let responseDetails = []
        for (const project of projects) {
           const manager = await Users.findById(project.manager_id)
           const owner = await Users.findById(project.owner_id)
           const team = await Team.findById(project.team_id)
           responseDetails.push({
             project_name: project.project_name,
             description: project.description,
             manager_details: manager,
             owner_details: owner,
             teams_details: team
           })
        }
        res.send(responseDetails)
    }
    catch (error) {
        res.status(500).send(error)
    }
})