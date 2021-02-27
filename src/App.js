import { useState } from 'react';
import Header from './components/Header'
import Task from './components/Task'
import AddTask from './components/AddTask'
function App() {
  const [tasks , setTask] = useState([
    {
      id : 1,
      text : 'Moring Walk',
      day : 'Monday',
      reminder : true,
    },
    {
      id : 2,
      text : 'Evening Walk',
      day : 'Friday',
      reminder : true,
    },
    {
      id : 3,
      text : 'Night  Walk',
      day : 'Saturday',
      reminder :false,
    }
  ])
  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = {id , ...task}
    setTask([...tasks,newTask])
}

  // Delete Task

const deleteTask = (id) => {
  setTask(tasks.filter((task)=> task.id !== id))
}
// toggle Rememider
const toggleReminder = (id) => {
  setTask(tasks.map(task => 
    task.id === id ? {...task,reminder: !task.reminder} : task))
}
 return (
    <div className='container'>
      <Header/>
      <AddTask onAdd = {addTask}/>
     {tasks.length > 0 ?<Task tasks = {tasks} 
     onDelete = {deleteTask} onToggle = {toggleReminder}/>: 'No  Tasks to show'}
     
    </div>
  );
}


export default App;
