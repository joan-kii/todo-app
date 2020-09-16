// Imports 

import { userProjects } from './index';

// Function 

const saveNewProject = () => {
    let userProjectList = [];
    for (let prj of userProjects) {
        userProjectList.push(prj);
    };
    window.localStorage.setItem('userProjects', JSON.stringify(userProjectList));
};

// Exports 

export { saveNewProject };