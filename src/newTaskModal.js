// Imports 

import { plusTaskButton } from './index';

// Function

function newTaskModalRender(project) {
    // Modal
    const newTaskModal = document.createElement('div');
    newTaskModal.id = 'newTaskModal';
    newTaskModal.className = 'newTaskModal';

    // Pop Modal
    const popModal = document.createElement('popModal');
    popModal.id = 'popModal';
    popModal.className = 'popModal';
    newTaskModal.appendChild(popModal);

    // Project Title
    const projectSelected = document.createElement('h2');
    projectSelected.id = 'projectSelected';
    projectSelected.className = 'projectSelected';
    projectSelected.textContent = project;
    popModal.appendChild(projectSelected);

    // New Task
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'modalTitle';
    modalTitle.textContent = 'Nueva Tarea';
    popModal.appendChild(modalTitle);

    // Form
    const modalForm = document.createElement('form');
    modalForm.id = 'modalForm';
    modalForm.className = 'modalForm';
    popModal.appendChild(modalForm);
    
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
    const dueDateLabel = document.createElement('label');
    dueDateLabel.htmlFor = 'dueDate';
    const dueDate = document.createElement('input');
    dueDate.id = 'dueDate';
    dueDate.className = 'dueDate';
    dueDate.type = 'date';
    modalForm.appendChild(dueDate);

    // Priority Input
    const priority = document.createElement('select');
    priority.id = 'priority';
    priority.className = 'priority';

    for (let i=0; i < 3; i++) {
        let option = document.createElement('option');
        option.value = i;
        priority.options.add(option);
    };

    const labelPrioritybuttons = document.createElement('label');
    labelPrioritybuttons.htmlFor = 'priority';

    const lowPriority = document.createElement('span');
    lowPriority.id = 'lowPriority';
    lowPriority.className = 'lowPriority';
    lowPriority.value = '1';
    priority.appendChild(lowPriority);

    const mediumPriority = document.createElement('span');
    mediumPriority.id = 'mediumPriority';
    mediumPriority.className = 'mediumPriority';
    lowPriority.value = '2';
    priority.appendChild(mediumPriority);

    const highPriority = document.createElement('span');
    highPriority.id = 'highPriority';
    highPriority.className = 'highPriority';
    lowPriority.value = '3';
    priority.appendChild(highPriority);

    modalForm.appendChild(priority);

    // Cancel Button
    const cancelNewTaskButton = document.createElement('button');
    cancelNewTaskButton.id = 'cancelNewTaskButton';
    cancelNewTaskButton.className = 'cancelNewTaskButton';
    cancelNewTaskButton.textContent = 'Cancelar';
    cancelNewTaskButton.type = 'button';
    modalForm.appendChild(cancelNewTaskButton);

    // Submit Button
    const submitTask = document.createElement('input');
    submitTask.id = 'submitTask';
    submitTask.className = 'submitTask';
    submitTask.type = 'submit';
    submitTask.value = 'Crear Tarea';
    modalForm.appendChild(submitTask);

    newTaskModal.style.display = 'block';

    cancelNewTaskButton.addEventListener('click', function() {
        plusTaskButton.classList.toggle('changeToCross');
        newTaskModal.style.display = 'none';
    });

    return newTaskModal;
};

export { newTaskModalRender };