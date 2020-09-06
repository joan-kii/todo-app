// Function

const editProjectModalRender = (projectId) => {
    // Modal
    const editProjectModal = document.createElement('div');
    editProjectModal.id = 'editProjectModal';
    editProjectModal.className = 'editProjectModal';

    const cancelEditButton = document.createElement('button');
    cancelEditButton.id = 'cancelEditButton';
    cancelEditButton.className = 'cancelEditButton';
    cancelEditButton.type = 'button';
    cancelEditButton.textContent = 'Cancelar';
    editProjectModal.appendChild(cancelEditButton);

    const deleteProjectButton = document.createElement('button');
    deleteProjectButton.id = 'deleteProjectButton';
    deleteProjectButton.className = 'deleteprojectButton';
    deleteProjectButton.type = 'button';
    deleteProjectButton.textContent = 'Eliminar Proyecto';
    editProjectModal.appendChild(deleteProjectButton);
    
    // Secondary Functions
    console.log('lol');
    deleteProjectButton.addEventListener('click', () => {
        console.log('lol');
    });

    return editProjectModal;
};

// Exports 

export { editProjectModalRender };