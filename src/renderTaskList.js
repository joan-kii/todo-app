// Imports 

import { content } from './index';

// Function 

const renderTaskList = (currentProjectName, userProjects) => {

    const taskListItem = document.createElement('div');
    taskListItem.id = currentprojectName.textContent;
    taskListItem.className = 'taskListItem';

    for (let actualProject of userProjects) {
        if (actualProject.name === currentProjectName.textContent){
            for (let task of actualProject.tasks) {
                console.log('lol')
            }
        };
    }
};