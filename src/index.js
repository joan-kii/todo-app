// Imports 

import { createSideBar } from './sideBar';
import { newTaskModalRender } from './newTaskModal';
import { newProjectModalRender } from './newProjectModal';
import { createProject } from './createProject';

// Inputs

const burgerButton = document.getElementById('burgerIcon');
const plusTaskButton = document.getElementById('newTaskPlus');
const newTaskButton = document.getElementById('newTaskIcon');
const plusProjectButton = document.getElementById('newProjectPlus');
const newProjectButton = document.getElementById('newProjectIcon');
const currentProjectName = document.getElementById('currentProject');
const content = document.getElementById('content');

// Functions

burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('change');
    createSideBar();
});

newTaskButton.addEventListener('click', function() {
    plusTaskButton.classList.toggle('changeToCross');
    newTaskModal.style.display = 'block';
    
});

newProjectButton.addEventListener('click', function() {
    plusProjectButton.classList.toggle('changeToCross');
    newProjectModal.style.display = 'block';
});

let projectCount;
let currentProject;
let userProjects = JSON.parse(localStorage.getItem('projects') || '[]');
if (userProjects.length === 0) {
    projectCount = 0;
    userProjects.push(createProject(projectCount + 1, 'Proyecto Prueba'));
    currentProject = userProjects[0];
} /* else {
    userProjects = userProjects.map(project => {
        projectCount++;
        let newProject = createProject(projectCount + 1, project.name, project.tasks);
        return newProject;
    })
    currentProject = userProjects[JSON.parse(localStorage.getItem('idProject') || '0')];
}; */ 

// Outputs

content.appendChild(newProjectModalRender());
content.appendChild(newTaskModalRender(currentProjectName.innerText));
currentProjectName.textContent = currentProject.name;

// Exports

export { plusTaskButton, plusProjectButton, userProjects, projectCount };