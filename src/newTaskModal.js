// Function

function newTaskModal(project) {
    // Modal
    const newTaskModal = document.createElement('div');
    newTaskModal.id = 'NewTaskModal';
    newTaskModal.className = 'newTaskModal';

    // Project Title
    const projectSelected = document.createElement('h2');
    projectSelected.id = 'projectSelected';
    projectSelected.className = 'projectSelected';
    projectSelected.textContent = project;
    newTaskModal.appendChild(projectSelected);

    // New Task
    const modalTitle = document.createElement('h3');
    modalTitle.className = 'modalTitle';
    modalTitle.textContent = 'Nueva Tarea';
    newTaskModal.appendChild(modalTitle);

    // Form
    const modalForm = document.createElement('form');
    modalForm.id = 'modalForm';
    modalForm.className = 'modalForm';
    newTaskModal.appendChild(modalForm); 
    // Posible bug. Añade modalForm a modal antes añadir
    // elementos a modalForm
    
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
    /* const priority = document.createElement('select');
    priority.id = 'priority';
    priority.className = 'priority';

    for (let i=0; i < 3; i++) {
        let option = document.createElement('option');
        option.value = i;
        priority.options.add(option);
    }; */

    const priorityButtons = document.createElement('div');
    priorityButtons.id = 'priorityButtons';
    priorityButtons.className = ' priorityButtons';

    const labelPrioritybuttons = document.createElement('label');
    labelPrioritybuttons.htmlFor = 'priorityButtons';

    const lowPriority = document.createElement('span');
    lowPriority.id = 'lowPriority';
    lowPriority.className = 'lowPriority';
    lowPriority.value = '1';
    priorityButtons.appendChild(lowPriority);

    const mediumPriority = document.createElement('span');
    mediumPriority.id = 'mediumPriority';
    mediumPriority.className = 'mediumPriority';
    lowPriority.value = '2';
    priorityButtons.appendChild(mediumPriority);

    const highPriority = document.createElement('span');
    highPriority.id = 'highPriority';
    highPriority.className = 'highPriority';
    lowPriority.value = '3';
    priorityButtons.appendChild(highPriority);

    modalForm.appendChild(priorityButtons);

    // Submit Button
    const submitTask = document.createElement('input');
    submitTask.id = 'submitTask';
    submitTask.className = 'submitTask';
    submitTask.type = 'submit';
    submitTask.value = 'Crear Tarea';
    modalForm.appendChild(submitTask);
};

export { newTaskModal };