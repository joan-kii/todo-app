// Imports 

import { userProjects } from './index';

// Inputs 

const projectList = document.getElementById('projectList');

// Outputs

for (let sideBarProject of userProjects) {
    let renderSideBarProject = document.createElement('div');
    renderSideBarProject.className = 'renderSideProject';
    
    let editProject = document.createElement('button');
    editProject.className = 'editProject';
    renderSideBarProject.appendChild(editProject);

    let projectName = document.createElement('h4');
    projectName.className = ' projectName';
    projectName.textContent = sideBarProject.name;
    renderSideBarProject.appendChild(projectName);

    projectList.appendChild(renderSideBarProject);
}
