import React, { useState } from "react";
import "../TaskStyles.css";

function TaskForm({ onAddTask, onClose }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("medium");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
      isCompleted: false,
    };

    onAddTask(newTask);
    setTaskName("");
    setTaskDescription("");
    setTaskPriority("medium");
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Task</h2>
      <form onSubmit={handleSubmit} className="task-form">
        <label className="form-label">Task Name</label>
        <input
          type="text"
          placeholder="e.g., Design the new dashboard"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />

        <label className="form-label">Description</label>
        <textarea
          placeholder="Add more details about the task..."
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>

        <label className="form-label">Priority</label>
        <div className="priority-buttons">
          {["immediate", "medium", "slow"].map((level) => (
            <button
              key={level}
              type="button"
              className={`priority-btn ${
                taskPriority === level ? "selected" : ""
              }`}
              onClick={() => setTaskPriority(level)}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        <div className="form-actions">
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="add-btn">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
