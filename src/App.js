import React, { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import './TaskStyles.css';
import { CheckCircle, Trash2 } from "lucide-react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    setShowForm(false);
  }

  function handleCompleteTask(taskId) {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, isCompleted: true } : task
    );
    setTasks(updatedTasks);
  }

  function handleDeleteTask(taskId) {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>TaskMaster</h1>
        <button className="new-task-btn" onClick={() => setShowForm(true)}>
          + Add New Task
        </button>
      </header>

      {/* Modal for task form */}
      {showForm && (
        <div className="modal-overlay">
          <TaskForm onAddTask={handleAddTask} onClose={() => setShowForm(false)} />
        </div>
      )}


      <div className="task-container">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks yet. Click “Add New Task” to get started!</p>
        ) : (
          tasks.map(task => (
            <div
              key={task.id}
              className={`task-card task-${task.priority} ${task.isCompleted ? 'task-completed' : ''}`}
            >
              <div className="task-header">
                <h3 className="task-title">{task.name}</h3>
                <div className="task-icons">
                  <button
                    className="icon-btn complete-btn"
                    onClick={() => handleCompleteTask(task.id)}
                    title="Mark as Complete"
                  >
                    <CheckCircle size={20} />
                  </button>
                  <button
                    className="icon-btn delete-btn"
                    onClick={() => handleDeleteTask(task.id)}
                    title="Delete Task"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <p className="task-desc">{task.description}</p>
              <span className={`priority-badge ${task.priority}`}>{task.priority}</span>

            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
