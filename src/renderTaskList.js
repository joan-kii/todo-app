// Imports

import { currentProjectName } from './index';
import { editTaskModalRender } from './editTaskModal';

// Input

const taskListProject = document.querySelector('.taskListProject');

// Function

const renderTaskList = (userProjects) => {

    taskListProject.id = `taskList_${currentProjectName.innerText}`;
    taskListProject.textContent = '';

    for (let actualProject of userProjects) {
        if (actualProject.name === currentProjectName.innerText){
            for (let task of actualProject.tasks) {

                let taskListItem = document.createElement('div');
                taskListItem.id = task.title;
                taskListItem.className = 'taskListItem';
                taskListProject.appendChild(taskListItem);

                let editTask = document.createElement('div');
                editTask.className = 'editTask';
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
                    taskItemPriority.style.textDecorationColor = 'yellow';
                } else if (task.priority == 2) {
                    taskItemPriority.textContent = 'Prioridad Media';
                    taskItemPriority.style.textDecorationColor = 'orange';
                } else {
                    taskItemPriority.textContent = 'Prioridad Alta';
                    taskItemPriority.style.textDecorationColor = 'red';
                };
                taskListItem.appendChild(taskItemPriority);

                let labelTaskItemCheck = document.createElement('label');
                labelTaskItemCheck.className = 'labelTaskItemCheck';
                labelTaskItemCheck.setAttribute('for', 'taskItemCheck');
                labelTaskItemCheck.textContent = 'Tarea Completada';
                taskListItem.appendChild(labelTaskItemCheck);

                let taskItemCheck = document.createElement('input');
                taskItemCheck.id = 'taskItemCheck'
                taskItemCheck.className = 'taskItemCheck';
                taskItemCheck.type = 'checkbox';
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