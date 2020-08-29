// Imports

import { plusProjectButton } from './index';

// Main Function

function newProjectModalRender() {
    // Modal
    const newProjectModal = document.createElement('div');
    newProjectModal.id = 'newProjectModal';
    newProjectModal.className = 'newProjectModal';

    // Pop Modal
    const popProjectModal = document.createElement('div');
    popProjectModal.id = 'popProjectModal';
    popProjectModal.className = 'popProjectModal';
    newProjectModal.appendChild(popProjectModal);

    // Project Title Input
    const projectTitle = document.createElement('input');
    projectTitle.id = 'projectTitle';
    projectTitle.className = 'projectTitle';
    projectTitle.required = true;
    projectTitle.maxLength = 20;
    projectTitle.placeholder = 'Título';
    newProjectModal.appendChild(projectTitle);

    // Cancel Button
    const cancelButton = document.createElement('button');
    cancelButton.id = 'cancelButton';
    cancelButton.className = 'cancelButton';
    cancelButton.textContent = 'Cancelar';
    newProjectModal.appendChild(cancelButton);

    // Submit Project Button
    const submitProject = document.createElement('input');
    submitProject.id = 'submitProject';
    submitProject.className = 'submitProject';
    submitProject.type = 'submit';
    submitProject.value = 'Crear Proyecto';
    newProjectModal.appendChild(submitProject);

    // Secondary Functions
    cancelButton.addEventListener('click', function() {
        plusProjectButton.classList.toggle('changeToCross');
        newProjectModal.style.display = 'none';
    });

    return newProjectModal;

}

// Exports

export { newProjectModalRender };