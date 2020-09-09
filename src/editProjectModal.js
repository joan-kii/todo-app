// Function

const editProjectModalRender = () => {
    // Modal
    const editProjectModal = document.createElement('div');
    editProjectModal.id = 'editProjectModal';
    editProjectModal.className = 'editProjectModal';

    const popEditProject = document.createElement('div');
    popEditProject.id = 'popEditProject';
    popEditProject.className = 'popEditProject';
    editProjectModal.appendChild(popEditProject);

    const cancelEditButton = document.createElement('button');
    cancelEditButton.id = 'cancelEditButton';
    cancelEditButton.className = 'cancelEditButton';
    cancelEditButton.type = 'button';
    cancelEditButton.textContent = 'Cancelar';
    popEditProject.appendChild(cancelEditButton);

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.id = 'deleteProjectButton';
    deleteProjectButton.className = 'deleteProjectButton';
    deleteProjectButton.type = 'button';
    deleteProjectButton.textContent = 'Eliminar Proyecto';
    popEditProject.appendChild(deleteProjectButton);
    
    // Secondary Functions
    
    cancelEditButton.addEventListener('click', () => {
        editProjectModal.style.display = 'none';
    })

    return editProjectModal;
};

// Exports 

export { editProjectModalRender };