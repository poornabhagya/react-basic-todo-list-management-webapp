function addTask(tasks, newTask) {
    return [...tasks, newTask];
}

function completeTask(tasks, taskId) {
    return tasks.map(task => 
        task.id === taskId ? { ...task, isCompleted: true } : task
    );
}

function deleteTask(tasks, taskId) {
    return tasks.filter(task => task.id !== taskId);
}

export { addTask, completeTask, deleteTask };