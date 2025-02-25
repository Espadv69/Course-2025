import { useState } from 'react'
import { saveQuestions, getQuestions, saveAnswers } from '../utils/localStorage.js'

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
}

export default TakeExam
