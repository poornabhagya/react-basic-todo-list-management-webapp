import React,{ useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';

function App() {

  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    

  }

  function handleCompleteTask(taskId) {
    const updateTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, isCompleted: true}
      }else {
        return task;
      }
    })

    setTasks(updateTasks);
  }

  function handleDeleteTask(taskId) {
    const updateTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updateTasks);
  }

  return(
    <div>
      <h1>Todo Management App</h1>
      <TaskForm onAddTask={handleAddTask} />
      <div>
        {tasks.map((task)=>(
        <div key={task.id} 
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px 0",
            backgroundColor: task.priority === "immediate" ? "salmon" : "white",
            textDecoration: task.isCompleted ? "line-through" : "none"
          }}
        >
          <h3>{task.name} ({task.priority})</h3>
          <p>{task.description}</p>
          <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
      </div>
      ))}</div>
    </div>
    
  );

}


export default App;
