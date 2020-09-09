// Function

const createTodo = (title, notes, dueDate, priority) => {
    const checklist = false;
    console.log({ title, notes, dueDate, priority, checklist })
    return { title, notes, dueDate, priority, checklist };
    };

// Exports

export { createTodo };
 
