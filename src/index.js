// Imports 

import { createSideBar } from './sideBar';
import { newTaskModalRender } from './newTaskModal';

// Inputs

const burgerButton = document.getElementById('burgerIcon');
const plusTaskButton = document.getElementById('newTaskPlus');
const newTaskButton = document.getElementById('newTaskIcon');
const plusProjectButton = document.getElementById('newProjectPlus');
const newProjectButton = document.getElementById('newProjectIcon');
const currentProject = document.getElementById('currentProject');
const content = document.getElementById('content');
const lowPriority = document.getElementById('lowPrioritySelected');
const mediumPriority = document.getElementById('mediumPriority');
const highPriority = document.getElementById('highPriority');

// Functions

burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('change');
    createSideBar();
});

newTaskButton.addEventListener('click', function() {
    plusTaskButton.classList.toggle('changeToCross');
    content.appendChild(newTaskModalRender(currentProject.innerText));
});

newProjectButton.addEventListener('click', function() {
    plusProjectButton.classList.toggle('changeToCross');
});

// Exports

export { plusTaskButton };