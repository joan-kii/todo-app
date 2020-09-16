// Imports 

import { plusTaskButton, userProjects, currentProjectName } from './index';
import { createTodo } from './createTodo';
import { saveNewProject } from './localStorage';
import format from 'date-fns/format';
import { es } from 'date-fns/locale';

// Main Function

let projectSelected;

const newTaskModalRender = () => {
    // Modal
    let newTaskModal = document.createElement('div');
    newTaskModal.id = 'newTaskModal';
    newTaskModal.className = 'newTaskModal';

    // Pop Task Modal
    let popTaskModal = document.createElement('div');
    popTaskModal.id = 'popTaskModal';
    popTaskModal.className = 'popTaskModal';
    newTaskModal.appendChild(popTaskModal);

    // Project Title
    projectSelected = document.createElement('h2');
    projectSelected.id = 'projectSelected';
    projectSelected.className = 'projectSelected';
    projectSelected.textContent = currentProjectName.textContent;
    popTaskModal.appendChild(projectSelected);

    // New Task
    let modalTitle = document.createElement('h3');
    modalTitle.className = 'modalTitle';
    modalTitle.textContent = 'Nueva Tarea';
    popTaskModal.appendChild(modalTitle);

    // Form
    let modalForm = document.createElement('form');
    modalForm.id = 'modalForm';
    modalForm.className = 'modalForm';
    popTaskModal.appendChild(modalForm);
    
    // Task Title Input
    let taskTitle = document.createElement('input');
    taskTitle.id = 'taskTitle';
    taskTitle.className = 'taskTitle';
    taskTitle.required = true;
    taskTitle.maxLength = 20;
    taskTitle.placeholder = 'Título';
    modalForm.appendChild(taskTitle);

    // Notes Input
    let notes = document.createElement('textarea');
    notes.id = 'notes';
    notes.className = 'notes';
    notes.placeholder = 'Descripción';
    modalForm.appendChild(notes);

    // Due Date Input
    let dueDate = document.createElement('input');
    dueDate.id = 'dueDate';
    dueDate.className = 'dueDate';
    dueDate.type = 'date';
    dueDate.placeholder = 'Fecha';
    modalForm.appendChild(dueDate);

    // Priority Input
    let priority = document.createElement('div');
    priority.id = 'priority';
    priority.className = 'priority';

    let labelPriorityButtons = document.createElement('label');
    labelPriorityButtons.className = 'labelPriorityButtons';
    labelPriorityButtons.setAttribute('for', 'priority');
    labelPriorityButtons.textContent = 'Prioridad';
    priority.appendChild(labelPriorityButtons);

    let lowPriority = document.createElement('span');
    lowPriority.id = 'lowPriority';
    lowPriority.className = 'lowPrioritySelected';
    lowPriority.textContent = 'Baja';
    priority.appendChild(lowPriority);

    let mediumPriority = document.createElement('span');
    mediumPriority.id = 'mediumPriority';
    mediumPriority.className = 'mediumPriority';
    mediumPriority.textContent = 'Media';
    priority.appendChild(mediumPriority);

    let highPriority = document.createElement('span');
    highPriority.id = 'highPriority';
    highPriority.className = 'highPriority';
    highPriority.textContent = 'Alta';
    priority.appendChild(highPriority);

    modalForm.appendChild(priority);

    // Cancel Button
    let cancelNewTaskButton = document.createElement('button');
    cancelNewTaskButton.id = 'cancelNewTaskButton';
    cancelNewTaskButton.className = 'cancelNewTaskButton';
    cancelNewTaskButton.type = 'button';
    cancelNewTaskButton.textContent = 'Cancelar';
    modalForm.appendChild(cancelNewTaskButton);

    // Submit Button
    let submitTask = document.createElement('input');
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

    submitTask.addEventListener('click', function() {
        let todoTitle = taskTitle.value;
        if (todoTitle != '') {
            let todoNotes = notes.value;
            let todoDueDate = format(new Date(dueDate.value), "dd MMMM yyyy", {locale: es});
            let todoPriority;
            if (lowPriority.className =='lowPrioritySelected') {
                todoPriority = 1;
            } else if (mediumPriority.className == 'mediumPrioritySelected') {
                todoPriority = 2;
            } else if (highPriority.className == 'highPrioritySelected') {
                todoPriority = 3;
            };
            let newTaskToProject = createTodo(todoTitle, todoNotes, todoDueDate, todoPriority);
            for (let prjt of userProjects) {
                if (prjt.name == currentProjectName.textContent) {
                    prjt.addTask(newTaskToProject);
                    /* prjt.tasks.push(newTaskToProject); */
                    saveNewProject();
                };
            }
        };
    });

    return newTaskModal;
};

export { newTaskModalRender, projectSelected };