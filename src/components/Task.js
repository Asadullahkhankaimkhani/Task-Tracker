import SingleTask from './SingleTask'
const Task = ({tasks,onDelete,onToggle}) => {
 
    return (
        <>
        {tasks.map((task) =>(  
        <SingleTask key = {task.id} task = {task} onDelete = {onDelete} onToggle = {onToggle}/> 
        ))}
        </>
    )
}

export default Task
