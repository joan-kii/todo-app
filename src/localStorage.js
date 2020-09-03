// Imports 

import { userProjects } from './index';

// Function 

const saveNewProject = () => {
    let userProjectList = [];
    for (const prj of userProjects) {
        let projectObject = {
            id: prj.id,
            name: prj.name,
            tasks: prj.tasks,
        };
        userProjectList.push(projectObject);
    };
    window.localStorage.setItem('userProjects', JSON.stringify(userProjectList));
};

// Exports 

export { saveNewProject };