// Function

const createProject = (id, name, tasks = {}) => {
    let index = 0;
    const addTask = (task) => {
        tasks[index] = task;
        index++;
    };
    const setName = (newName) => {
        name = newName;
    };
    return { id, name, tasks, addTask, setName };
};

// Exports

export { createProject };