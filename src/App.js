import React,{ useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';

function App() {

  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
    

  }

  return(
    <div>
      <h1>Todo Management App</h1>
      <TaskForm onAddTask={handleAddTask} />
    </div>
    
);

}


export default App;
