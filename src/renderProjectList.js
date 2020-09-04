// Imports 

import { userProjects } from './index';

// Inputs 

const projectList = document.getElementById('projectList');

// Function 

const renderSideBarProject = () => {
    for (let sideBarProject of userProjects) {

        let renderProjectItem = document.createElement('div');
        renderProjectItem.className = 'renderProjectItem';

        let editProject = document.createElement('div');
        editProject.className = 'editProject';
        renderProjectItem.appendChild(editProject);

        let projectName = document.createElement('p');
        projectName.className = ' projectName';
        projectName.textContent = sideBarProject.name;
        renderProjectItem.appendChild(projectName);

        projectList.appendChild(renderProjectItem);
    };
};

// Exports 

export { renderSideBarProject };