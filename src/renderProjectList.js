// Inputs 

const projectList = document.getElementById('projectList');

// Function 

const renderSideBarProject = (userProjects) => { 
    for (let sideBarProject of userProjects) {

        let renderProjectItem = document.createElement('div');
        renderProjectItem.id = sideBarProject.name;
        renderProjectItem.className = 'renderProjectItem';

        let editProject = document.createElement('div');
        editProject.className = 'editProject';
        renderProjectItem.appendChild(editProject);

        let editProjectDot_1 = document.createElement('div');
        editProjectDot_1.className = 'editProjectDot_1';
        editProject.appendChild(editProjectDot_1);

        let editProjectDot_2 = document.createElement('div');
        editProjectDot_2.className = 'editProjectDot_2';
        editProject.appendChild(editProjectDot_2);

        let editProjectDot_3 = document.createElement('div');
        editProjectDot_3.className = 'editProjectDot_3';
        editProject.appendChild(editProjectDot_3);

        let projectName = document.createElement('p');
        projectName.className = 'projectName';
        projectName.textContent = sideBarProject.name;
        renderProjectItem.appendChild(projectName);

        projectList.appendChild(renderProjectItem);
    };
};

// Exports 

export { renderSideBarProject };