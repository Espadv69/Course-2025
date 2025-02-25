import { useState } from 'react'
import { saveQuestions, getQuestions } from '../utils/localStorage.js'

const TakeExam = () => {
  const questions = getQuestions()
  const [answers, setAnswers] = useState({})

  const handleChange = (index, value) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: value,
    }))
  }
}

export default TakeExam
