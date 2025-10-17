const TaskItem = ({ task, onComplete, onDelete }) => {
  return (
    <div className={`task-card task-${task.priority} ${task.isCompleted ? 'task-completed' : ''}`}>
      <h3>{task.name} ({task.priority})</h3>
      <p>{task.description}</p>
      <button onClick={() => onComplete(task.id)}>Complete</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;