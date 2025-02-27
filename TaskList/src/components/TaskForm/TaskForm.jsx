import { useState } from 'react'
import './TaskForm.css'

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('')

  return (
    <form style={{ marginTop: '40px' }}>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter the TaskName"
        />
      </label>
    </form>
  )
}

export default TaskForm
