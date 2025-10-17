import React, {useState} from 'react';

function TaskForm({onAddTask}) {

    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskPriority, setTaskPriority] = useState('medium');

    function handleSubmit(e) {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            name: taskName,
            description: taskDescription,
            priority: taskPriority,
            isCompleted: false
        };

        onAddTask(newTask);
        setTaskName('');
        setTaskDescription('');
        setTaskPriority('medium');
    };

    return(
         <div>
      <h2>Add a Task</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <select value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
          <option value="immediate">Immediate</option>
          <option value="medium">Medium</option>
          <option value="slow">Slow</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
    );
}

export default TaskForm;