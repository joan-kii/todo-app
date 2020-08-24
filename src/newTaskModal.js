// Function

function newTaskModal(project) {
    const modal = document.createElement('div');
    modal.id = 'modal';
    modal.className = 'modal';

    const projectSelected = document.createElement('h2');
    projectSelected.id = 'projectSelected';
    projectSelected.className = 'projectSelected';
    projectSelected.textContent = project;
    modal.appendChild(projectSelected);

    const modalTitle = document.createElement('h3');
    modalTitle.className = 'modalTitle';
    modalTitle.textContent = 'Nueva Tarea';
    modal.appendChild(modalTitle);

    const modalForm = document.createElement('form');
    modalForm.id = 'modalForm';
    modalForm.className = 'modalForm';
    modal.appendChild(modalForm); 
    // Posible bug. Añade modalForm a modal antes añadir
    // elementos a modalForm
    
    const taskTitle = document.createElement('input');
    taskTitle.id = 'taskTitle';
    taskTitle.className = 'taskTitle';
    taskTitle.required = true;
    taskTitle.maxLength = 20;
    taskTitle.placeholder = 'Título';
    modalForm.appendChild(taskTitle);

    // create textarea

    // create dueDate

    // create priority

    // create button submit
}