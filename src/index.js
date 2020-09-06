// Imports 

import { createSideBar } from './sideBar';
import { newTaskModalRender } from './newTaskModal';
import { newProjectModalRender } from './newProjectModal';
import { createProject } from './createProject';
import { saveNewProject } from './localStorage';
import { renderSideBarProject } from './renderProjectList';
import { editProjectModalRender } from './editProjectModal';

// Inputs

const burgerButton = document.getElementById('burgerIcon');
const plusTaskButton = document.getElementById('newTaskPlus');
const newTaskButton = document.getElementById('newTaskIcon');
const plusProjectButton = document.getElementById('newProjectPlus');
const newProjectButton = document.getElementById('newProjectIcon');
const currentProjectName = document.getElementById('currentProject');
const content = document.getElementById('content');
const listProjectNames = document.getElementsByClassName('projectName');
const listEditProjectButtons = document.getElementsByClassName('editProject');

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
let userProjects = JSON.parse(window.localStorage.getItem("userProjects") || "[]");
if (userProjects.length === 0) {
    projectCount = 0;
    userProjects.push(createProject(projectCount + 1, 'Proyecto Prueba'));
    projectCount++;
    currentProject = userProjects[0];
    saveNewProject();
} else {
    currentProject = userProjects[(userProjects.length - 1)];
    projectCount = userProjects.length + 1;
};

renderSideBarProject();

Array.prototype.forEach.call(listProjectNames, function(proj) {
    proj.addEventListener('click', () => {
        currentProjectName.textContent = proj.innerText;
    });
});

Array.prototype.forEach.call(listEditProjectButtons, function(edit) {
    edit.addEventListener('click', function() {
        let projectId = edit.closest('.renderProjectItem');
        editProjectModalRender(projectId);
        editProjectModal.style.display = 'block';
        console.log(edit.closest('.renderProjectItem'));
    });
});

// Outputs

currentProjectName.textContent = currentProject.name;
content.appendChild(newProjectModalRender());
content.appendChild(newTaskModalRender(currentProjectName.innerText));

// Exports

export { plusTaskButton, plusProjectButton, userProjects, projectCount, currentProject };