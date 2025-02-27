import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import NavBar from './components/NavBar/NavBar'

import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleAddTask = (newTask) => {
    setTasks((prev) => [...prev, newTask])
  }

  const handleDeleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index)
    setTasks(filteredTasks)
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<TaskList tasks={tasks} ondeleteTask={handleDeleteTask} />}
        />
        <Route path="/form" element={<TaskForm onAddTask={handleAddTask} />} />
      </Routes>
    </Router>
  )
}

export default App
