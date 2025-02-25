import { useState } from 'react'
import {
  saveQuestions,
  getQuestions,
  saveAnswers,
} from '../utils/localStorage.js'

const TakeExam = () => {
  const questions = getQuestions()
  const [answers, setAnswers] = useState({})

  const handleChange = (index, value) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }))
  }

  const handleSubmit = () => {
    saveAnswers(answers)
    alert('Exam submitted successfully!')
  }

  return (
    <div>
      <h2>Take Exam</h2>
      {questions.length === 0 ? (
        <p>No questions available. Please add some first.</p>
      ) : (
        <form onSubmit={(e) => e.preventDefault()}>
          {questions.map((q, index) => (
            <div key={index}>
              <h3>{q.text}</h3>
              <input
                type="text"
                value={answers[index] || ''}
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder="Write your answer..."
              />
            </div>
          ))}
          <button onClick={handleSubmit}>Submit Answers</button>
        </form>
      )}
    </div>
  )
}

export default TakeExam
