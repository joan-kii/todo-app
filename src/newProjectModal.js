// Imports

import { plusProjectButton, userProjects, projectCount } from './index';
import { createProject } from './createProject';
import { saveNewProject } from './localStorage';

// Main Function

const newProjectModalRender = () => {
    // Modal
    const newProjectModal = document.createElement('div');
    newProjectModal.id = 'newProjectModal';
    newProjectModal.className = 'newProjectModal';

    // Pop Modal
    const popProjectModal = document.createElement('form');
    popProjectModal.id = 'popProjectModal';
    popProjectModal.className = 'popProjectModal';
    newProjectModal.appendChild(popProjectModal);

    // Project Title Input
    const projectTitle = document.createElement('input');
    projectTitle.id = 'projectTitle';
    projectTitle.className = 'projectTitle';
    projectTitle.required = true;
    projectTitle.maxLength = 20;
    projectTitle.placeholder = 'Nombre Proyecto';
    popProjectModal.appendChild(projectTitle);

    // Cancel Button
    const cancelButton = document.createElement('button');
    cancelButton.id = 'cancelButton';
    cancelButton.className = 'cancelButton';
    cancelButton.type = 'button';
    cancelButton.textContent = 'Cancelar';
    popProjectModal.appendChild(cancelButton);

    // Submit Project Button
    const submitProject = document.createElement('input');
    submitProject.id = 'submitProject';
    submitProject.className = 'submitProject';
    submitProject.type = 'submit';
    submitProject.value = 'Crear Proyecto';
    popProjectModal.appendChild(submitProject);

    // Secondary Functions
    cancelButton.addEventListener('click', function() {
        plusProjectButton.classList.toggle('changeToCross');
        newProjectModal.style.display = 'none';
    });

    submitProject.addEventListener('click', function() {
        if (projectTitle.value != '') {
            userProjects.push(createProject(projectCount, projectTitle.value));
            projectCount++;
            plusProjectButton.classList.toggle('changeToCross');
            saveNewProject();
        };
    });

    return newProjectModal;
};

// Exports

export { newProjectModalRender };