import { useState } from 'react'
import './TaskForm.css'

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('')

  return (
    <form style={{ marginTop: '40px' }} className="task__form">
      <h2>Task Form</h2>
      <label className="task__label">
        Task Name:
        <input
          type="text"
          className="task__input"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter the TaskName"
        />
      </label>
    </form>
  )
}

export default TaskForm
