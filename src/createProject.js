// Function

const createProject = (id, name, tasks = []) => {
    let index = 0;
    const addTask = (task) => {
        tasks[index] = task;
        index++;
    };
    return { id, name, tasks, addTask, setName };
};

// Exports

export { createProject };