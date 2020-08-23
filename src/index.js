// Imports 

import { createSideBar } from './sideBar';

// Inputs

const burgerButton = document.getElementById('burgerIcon');
burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('change');
    createSideBar();
});
const plusTaskButton = document.getElementById('newTaskPlus');
const newTaskButton = document.getElementById('newTaskIcon');
newTaskButton.addEventListener('click', function() {
    plusTaskButton.classList.toggle('changeToCross');
});

const plusProjectButton = document.getElementById('newProjectPlus');
const newProjectButton = document.getElementById('newProjectIcon');
newProjectButton.addEventListener('click', function() {
    plusProjectButton.classList.toggle('changeToCross');
});