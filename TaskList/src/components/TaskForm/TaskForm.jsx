import { useState } from 'react'

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('')

  return (
    <form>
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
