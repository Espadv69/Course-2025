import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar'

import Home from './pages/Home'
import AddQuestions from './pages/AddQuestions'
import GenerateQuestions from './pages/GenerateQuestions'
import TakeExam from './pages/TakeExam'
import ReviewAnswers from './pages/ReviewAnswers'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddQuestions />} />
        <Route path="/generate" element={<GenerateQuestions />} />
        <Route path="/exam" element={<TakeExam />} />
        <Route path="/review" element={<ReviewAnswers />} />
      </Routes>
    </Router>
  )
}

export default App
