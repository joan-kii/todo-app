// Imports 

import { createSideBar } from './sideBar';
import { newTaskModalRender, projectSelected } from './newTaskModal';
import { newProjectModalRender } from './newProjectModal';
import { createProject } from './createProject';
import { saveNewProject } from './localStorage';
import { renderSideBarProject } from './renderProjectList';
import { editProjectModalRender } from './editProjectModal';
import { taskListProject, renderTaskList } from './renderTaskList';
import { editTaskModalRender } from './editTaskModal';

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
const listEditTaskButtons = document.getElementsByClassName('editTask');
const projectList = document.getElementById('projectList');

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

let projectCount = 1;
let currentProject;
let userProjects = JSON.parse(window.localStorage.getItem("userProjects") || "[]");
if (userProjects.length === 0) {
    userProjects.push(createProject(projectCount, 'Proyecto Prueba'));
    projectCount += 1;
    currentProject = userProjects[0];
    saveNewProject();
} else {
    currentProject = userProjects[(userProjects.length - 1)];
    projectCount = userProjects.length + 1;
};

renderSideBarProject(userProjects);

Array.prototype.forEach.call(listProjectNames, function(proj) {
    proj.addEventListener('click', function() {
        for (let actualProject of userProjects) {
            if (actualProject.name == proj.innerText) {
                currentProjectName.textContent = actualProject.name;
                projectSelected.textContent = currentProjectName.textContent;
                break;
            };
        }
        burgerButton.classList.toggle('change');
        createSideBar();
        renderTaskList(userProjects);
    });
});

Array.prototype.forEach.call(listEditProjectButtons, function(editProj) {
    editProj.addEventListener('click', function() {
        editProjectModal.style.display = 'block';

        const deleteProjectButton = document.getElementById('deleteProjectButton');

        deleteProjectButton.addEventListener('click', function() {
            let projectToDelete = editProj.closest('.renderProjectItem').id;
            for (let prj of userProjects) {
                if (prj.name == projectToDelete) {
                    userProjects.splice(userProjects.indexOf(prj), 1);
                };
            }
            editProjectModal.style.display = 'none';
            currentProject = userProjects[(userProjects.length - 1)];
            currentProjectName.textContent = currentProject.name;
            projectList.textContent = '';
            saveNewProject();
            renderSideBarProject(userProjects);
            location.reload();
            createSideBar();
        });
    });
});

Array.prototype.forEach.call(listEditTaskButtons, function(edit) {
    edit.addEventListener('click', function() {
        editTaskModal.style.display = 'block';

        const deleteTaskButton = document.getElementById('deleteTaskButton');

        deleteTaskButton.addEventListener('click', function() {
            let taskToDelete = edit.title;
            console.log(taskToDelete);
        });
    });
});

// Outputs
currentProjectName.textContent = currentProject.name;
content.appendChild(newProjectModalRender());
content.appendChild(editProjectModalRender());
content.appendChild(newTaskModalRender());
renderTaskList(userProjects);

// Exports

export { plusTaskButton, plusProjectButton, userProjects, 
    projectCount, currentProject, currentProjectName, content };