import './TaskItem.css'

const TaskItem = ({ task, ondeleteTask }) => {
  return (
    <li>
      <p>{task}</p>
      <button onClick={ondeleteTask}>Delete</button>
    </li>
  )
}

export default TaskItem
