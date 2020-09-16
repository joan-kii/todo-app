// Function

const createProject = (id, name, tasks=[]) => {
    const addTask = (task) => {
        tasks.push(task);
    };
    return { id, name, tasks, addTask };
};

// Exports

export { createProject };