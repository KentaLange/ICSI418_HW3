import React from 'react';

const ViewProject = ({ projects }) => {
    return (
        <div>
            <h1>Projects</h1>
            <table border="1" style={{ width: '100%', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Project Name</th>
                        <th>Project Description</th>
                        <th>Product Owner Name</th>
                        <th>Project Manager Name</th>
                        <th>Team Name</th>
                    </tr>
                </thead>
                <tbody>
                    {projects && projects.length > 0 ? (
                        projects.map((project, index) => (
                            <tr key={index}>
                                <td>{project.projectName}</td>
                                <td>{project.projectDescription}</td>
                                <td>{project.productOwnerName}</td>
                                <td>{project.projectManagerName}</td>
                                <td>{project.teamName}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" style={{ textAlign: 'center' }}>
                                No projects available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ViewProject;