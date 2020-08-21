// Imports 

import { createSideBar } from './sideBar';

// Inputs

const burgerButton = document.getElementById('burgerIcon');
burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('change');
    createSideBar();
});
const plusButton = document.getElementById('newTaskPlus');
const newTaskButton = document.getElementById('newTaskIcon');
newTaskButton.addEventListener('click', function() {
    plusButton.classList.toggle('changeToCross');
});
const content = document.getElementById('content');
content.innerText = '';