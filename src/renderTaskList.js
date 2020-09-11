// Imports

import { currentProjectName } from './index';

// Input

const taskListProject = document.querySelector('.taskListProject');
console.log(taskListProject)
// Function

const renderTaskList = (userProjects) => {

    taskListProject.id = `taskList_${currentProjectName.innerText}`;

    for (let actualProject of userProjects) {
        if (actualProject.name === currentProjectName.innerText){
            for (let task of actualProject.tasks) {

                let taskListItem = document.createElement('div');
                taskListItem.id = task.title;
                taskListItem.className = 'taskListItem';
                taskListProject.appendChild(taskListItem);

                let editTask = document.createElement('div');
                editTask.id = 'editTask';
                editTask.className = 'editProject';
                taskListItem.appendChild(editTask);

                let editTaskDot_1 = document.createElement('div');
                editTaskDot_1.className = 'editProjectDot_1';
                editTask.appendChild(editTaskDot_1);

                let editTaskDot_2 = document.createElement('div');
                editTaskDot_2.className = 'editProjectDot_2';
                editTask.appendChild(editTaskDot_2);

                let editTaskDot_3 = document.createElement('div');
                editTaskDot_3.className = 'editProjectDot_3';
                editTask.appendChild(editTaskDot_3);

                let taskItemTitle = document.createElement('h3');
                taskItemTitle.className = 'taskItemTitle';
                taskItemTitle.textContent = task.title;
                taskListItem.appendChild(taskItemTitle);

                let taskItemDate = document.createElement('p');
                taskItemDate.className = 'taskItemDate';
                taskItemDate.textContent = task.dueDate;
                taskListItem.appendChild(taskItemDate);

                let taskItemPriority = document.createElement('p');
                taskItemPriority.className = 'taskItemPriority';
                if (task.priority == 1) {
                    taskItemPriority.textContent = 'Prioridad Baja';
                    taskItemPriority.style.background = 'yellow';
                } else if (task.priority == 2) {
                    taskItemPriority.textContent = 'Prioridad Media';
                    taskItemPriority.style.background = 'orange';
                } else {
                    taskItemPriority.textContent = 'Prioridad Alta';
                    taskItemPriority.style.background = 'red';
                };
                taskListItem.appendChild(taskItemPriority);

                let taskItemCheck = document.createElement('input');
                taskItemCheck.className = 'taskItemCheck';
                taskItemCheck.type = 'checkbox';
                taskItemCheck.value = 'Completada';
                taskListItem.appendChild(taskItemCheck);

                let taskItemNotes = document.createElement('p');
                taskItemNotes.className = 'taskItemNotes';
                taskItemNotes.textContent = task.notes;
                taskListItem.appendChild(taskItemNotes);
            }
        };
    }
};

// Exports 

export { taskListProject, renderTaskList };