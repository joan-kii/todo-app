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
const content = document.getElementById('content');                     // Seguir: guardar nuevo proyecto 
                                                                        // con saveLocalStorage()

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

let projectCount = 0;
let currentProject;
let userProjects = JSON.parse(localStorage.getItem('projects') || '[]');
if (userProjects.length === 0) {
    userProjects.push(createProject(projectCount++, 'Proyecto Prueba'));
    currentProject = userProjects[0];
} else {
    userProjects = userProjects.map(project => {
        let newProject = createProject(projectCount++, project.name, project.tasks);
        return newProject;
    })
    currentProject = userProjects[JSON.parse(localStorage.getItem('idProject') || '0')];

}; 

function saveLocalStorage() {
    let projectList = [];
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

// Outputs

content.appendChild(newProjectModalRender());
content.appendChild(newTaskModalRender(currentProjectName.innerText));
currentProjectName.textContent = userProjects[0].name;

// Exports

export { plusTaskButton, plusProjectButton };