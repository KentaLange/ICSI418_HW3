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