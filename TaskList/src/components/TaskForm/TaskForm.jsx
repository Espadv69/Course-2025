import { useState } from 'react'
import './TaskForm.css'

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (taskName.trim() === '')
      return alert('You should fill out the TaskName field')

    onAddTask(taskName)
    setTaskName('')
  }

  return (
    <form onSubmit={handleSubmit} className="task__form">
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
      <button className="task__button">Add Task</button>
    </form>
  )
}

export default TaskForm
