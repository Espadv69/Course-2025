import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

const TaskList = ({ tasks, ondeleteTask }) => {
  if (tasks.lenght === 0) return <p>No taks found!</p>

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          ondeleteTask={() => ondeleteTask(index)}
        />
      ))}
    </ul>
  )
}

export default TaskList
