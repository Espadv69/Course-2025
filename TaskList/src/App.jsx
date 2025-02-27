import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  )
}

export default App
