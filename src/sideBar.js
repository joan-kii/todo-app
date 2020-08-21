// Outputs

const newProjectButton = document.createElement('button');

// Inputs 

const sideBar = document.getElementById('sideBar');
newProjectButton.className = 'newProjectButton';
newProjectButton.textContent = 'Nuevo Proyecto';
sideBar.appendChild(newProjectButton);

export function createSideBar() {
    if (sideBar.style.display === 'block') {
        sideBar.style.display = 'none';
    } else {
        sideBar.style.display = 'block'; 
    };
};