// Imports 

import { userProjects } from './index';

// Function 

const saveLocalStorage = () => {
    let projectList = [];
    console.log(userProjects)
    for (const prj of userProjects) {
        let projectObject = {
            name: prj.name,
            tasks: prj.tasks,
        };
        projectList.push(projectObject);
    };
    localStorage.setItem('userProjects', JSON.stringify(projectlist));
    localStorage.setItem('idProject', userProjects.indexOf(currentProject));
};

// Exports 

export { saveLocalStorage };