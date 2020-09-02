// Imports 

import { userProjects } from './index';

// Function 

const saveNewProject = () => {
    let projectList = [];
    for (const prj of userProjects) {
        let projectObject = {
            id: prj.id,
            name: prj.name,
            tasks: prj.tasks,
        };
        projectList.push(projectObject);
    };
    window.localStorage.setItem('userProjects', JSON.stringify(projectList));
};

// Exports 

export { saveNewProject };