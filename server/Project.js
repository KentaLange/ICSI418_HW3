const Project = require('./Projects.js')
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