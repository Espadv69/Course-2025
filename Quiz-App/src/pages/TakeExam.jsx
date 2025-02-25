import { useState } from 'react'
import { saveQuestions, getQuestions } from '../utils/localStorage.js'

const TakeExam = () => {
  const questions = getQuestions()
  const [answers, setAnswers] = useState({})
}

export default TakeExam
