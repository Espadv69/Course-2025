import TaskItem from '../TaskItem/TaskItem'
import './TaskList.css'

const TaskList = ({ tasks, ondeleteTask }) => {
  if (tasks.length === 0)
    return <p style={{ margin: '40px auto' }}>No taks found!</p>

  return (
    <ul style={{ marginTop: '40px' }}>
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
