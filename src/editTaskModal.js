// Function 

const editTaskModalRender = () => {
    // Modal
    const editTaskModal = document.createElement('div');
    editTaskModal.id = 'editTaskModal';
    editTaskModal.className = 'editTaskModal';

    const popEditTask = document.createElement('div');
    popEditTask.id = 'popEditTask';
    popEditTask.className = 'popEditTask';
    editTaskModal.appendChild(popEditTask);

    const taskTitleToDelete = document.createElement('h3');
    taskTitleToDelete.id = 'taskTitleToDelete';
    taskTitleToDelete.className = 'taskTitleToDelete';
    popEditTask.appendChild(taskTitleToDelete);

    const alertEditTask = document.createElement('p');
    alertEditTask.id = 'alertEditTask';
    alertEditTask.className = 'alertEditTask';
    alertEditTask.textContent = `¿Quieres eliminar esta tarea?`
    popEditTask.appendChild(alertEditTask);

    const cancelEditTaskButton = document.createElement('button');
    cancelEditTaskButton.id = 'cancelEditTaskButton';
    cancelEditTaskButton.className = 'cancelEditTaskButton';
    cancelEditTaskButton.type = 'button';
    cancelEditTaskButton.textContent = 'Cancelar';
    popEditTask.appendChild(cancelEditTaskButton);

    const deleteTaskButton = document.createElement('button');
    deleteTaskButton.id = 'deleteTaskButton';
    deleteTaskButton.className = 'deleteTaskButton';
    deleteTaskButton.type = 'button';
    deleteTaskButton.textContent = 'Eliminar Tarea';
    popEditTask.appendChild(deleteTaskButton);
    
    // Secondary Functions
    
    cancelEditTaskButton.addEventListener('click', function() {
        editTaskModal.style.display = 'none';
    });

    return editTaskModal;
};

// Exports 

export { editTaskModalRender };