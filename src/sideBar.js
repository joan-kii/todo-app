// Inputs 

const sideBar = document.getElementById('sideBar');

// Function

const createSideBar = () => {
    if (sideBar.style.width === '25%') {
        sideBar.style.width = '0';
        content.style.marginLeft = '0';

    } else {
        sideBar.style.width = '25%';
        content.style.marginLeft = '25%'; 
    };
};

// Exports

export { createSideBar }