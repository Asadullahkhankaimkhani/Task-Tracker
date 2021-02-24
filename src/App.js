import { useState } from 'react';
import Header from './components/Header'
import Task from './components/Task'
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
 return (
    <div className='container'>
      <Header/>
      <Task tasks = {tasks}/>
    </div>
  );
}

export default App;
