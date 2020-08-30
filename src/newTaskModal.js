// Imports 

import { plusTaskButton } from './index';

// Main Function

function newTaskModalRender(project) {
    // Modal
    const newTaskModal = document.createElement('div');
    newTaskModal.id = 'newTaskModal';
    newTaskModal.className = 'newTaskModal';

    // Pop Task Modal
    const popTaskModal = document.createElement('div');
    popTaskModal.id = 'popTaskModal';
    popTaskModal.className = 'popTaskModal';
    newTaskModal.appendChild(popTaskModal);

    // Project Title
    const projectSelected = document.createElement('h2');
    projectSelected.id = 'projectSelected';
    projectSelected.className = 'projectSelected';
    projectSelected.textContent = project;
    popTaskModal.appendChild(projectSelected);

    // New Task
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'modalTitle';
    modalTitle.textContent = 'Nueva Tarea';
    popTaskModal.appendChild(modalTitle);

    // Form
    const modalForm = document.createElement('form');
    modalForm.id = 'modalForm';
    modalForm.className = 'modalForm';
    popTaskModal.appendChild(modalForm);
    
    // Task Title Input
    const taskTitle = document.createElement('input');
    taskTitle.id = 'taskTitle';
    taskTitle.className = 'taskTitle';
    taskTitle.required = true;
    taskTitle.maxLength = 20;
    taskTitle.placeholder = 'Título';
    modalForm.appendChild(taskTitle);

    // Notes Input
    const notes = document.createElement('textarea');
    notes.id = 'notes';
    notes.className = 'notes';
    notes.placeholder = 'Descripción';
    modalForm.appendChild(notes);

    // Due Date Input
    const dueDate = document.createElement('input');
    dueDate.id = 'dueDate';
    dueDate.className = 'dueDate';
    dueDate.type = 'date';
    dueDate.placeholder = 'Fecha';
    modalForm.appendChild(dueDate);

    // Priority Input
    const priority = document.createElement('div');
    priority.id = 'priority';
    priority.className = 'priority';

    const labelPriorityButtons = document.createElement('label');
    labelPriorityButtons.className = 'labelPriorityButtons';
    labelPriorityButtons.setAttribute('for', 'priority');
    labelPriorityButtons.textContent = 'Prioridad';
    priority.appendChild(labelPriorityButtons);

    const lowPriority = document.createElement('span');
    lowPriority.id = 'lowPriority';
    lowPriority.className = 'lowPrioritySelected';
    lowPriority.textContent = 'Baja';
    lowPriority.setAttribute('value', '1');
    priority.appendChild(lowPriority);

    const mediumPriority = document.createElement('span');
    mediumPriority.id = 'mediumPriority';
    mediumPriority.className = 'mediumPriority';
    mediumPriority.textContent = 'Media';
    mediumPriority.setAttribute('value', '2');
    priority.appendChild(mediumPriority);

    const highPriority = document.createElement('span');
    highPriority.id = 'highPriority';
    highPriority.className = 'highPriority';
    highPriority.textContent = 'Alta';
    highPriority.setAttribute('value', '3');
    priority.appendChild(highPriority);

    modalForm.appendChild(priority);

    // Cancel Button
    const cancelNewTaskButton = document.createElement('button');
    cancelNewTaskButton.id = 'cancelNewTaskButton';
    cancelNewTaskButton.className = 'cancelNewTaskButton';
    cancelNewTaskButton.type = 'button';
    cancelNewTaskButton.textContent = 'Cancelar';
    modalForm.appendChild(cancelNewTaskButton);

    // Submit Button
    const submitTask = document.createElement('input');
    submitTask.id = 'submitTask';
    submitTask.className = 'submitTask';
    submitTask.type = 'submit';
    submitTask.value = 'Crear Tarea';
    modalForm.appendChild(submitTask);

    // Secondary Functions
    cancelNewTaskButton.addEventListener('click', function() {
        plusTaskButton.classList.toggle('changeToCross');
        newTaskModal.style.display = 'none';
    });

    lowPriority.addEventListener('click', function() {
        if (lowPriority.className == 'lowPriority') {
            lowPriority.className = 'lowPrioritySelected';
            mediumPriority.className = 'mediumPriority';
            highPriority.className = 'highPriority';
        };
    });

    mediumPriority.addEventListener('click', function() {
        if (mediumPriority.className == 'mediumPriority') {
            mediumPriority.className = 'mediumPrioritySelected';
            lowPriority.className = 'lowPriority';
            highPriority.className = 'highPriority';
        };
    });

    highPriority.addEventListener('click', function() {
        if (highPriority.className == 'highPriority') {
            highPriority.className = 'highPrioritySelected';
            lowPriority.className = 'lowPriority';
            mediumPriority.className = 'mediumPriority';
        };
    });

    return newTaskModal;
};

export { newTaskModalRender };