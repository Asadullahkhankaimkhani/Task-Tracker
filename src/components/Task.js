import { useState } from 'react';

const Task = () => {
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
        <>
        {tasks.map((task) => <h3>{task.text}</h3> )}
        </>
    )
}

export default Task
