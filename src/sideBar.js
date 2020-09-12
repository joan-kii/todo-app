// Inputs 

const sideBar = document.getElementById('sideBar');

// Function

const createSideBar = () => {
    if (sideBar.style.width === '23%') {
        sideBar.style.width = '0';

    } else {
        sideBar.style.width = '23%';
    };
};

// Exports

export { createSideBar }