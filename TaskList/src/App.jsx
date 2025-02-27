import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/form" element={<TaskForm />} />
      </Routes>
    </Router>
  )
}

export default App
