// Imports 

import { createSideBar } from './sideBar';
import { newTaskModalRender } from './newTaskModal';
import { newProjectModalRender } from './newProjectModal';

// Inputs

const burgerButton = document.getElementById('burgerIcon');
const plusTaskButton = document.getElementById('newTaskPlus');
const newTaskButton = document.getElementById('newTaskIcon');
const plusProjectButton = document.getElementById('newProjectPlus');
const newProjectButton = document.getElementById('newProjectIcon');
const currentProject = document.getElementById('currentProject');
const content = document.getElementById('content');
const newTaskModal = document.getElementById('newTaskModal');
const newProjectModal = document.getElementById('newProjectModal');

// Functions
content.appendChild(newTaskModalRender(currentProject.innerText));
content.appendChild(newProjectModalRender());

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


// Exports

export { plusTaskButton, plusProjectButton };