import { useState } from 'react'
import { saveQuestions, getQuestions } from '../utils/localStorage'

const AddQuestions = () => {
  const [question, setQuestion] = useState('') // Hanlde input question
  const [questions, setQuestions] = useState(getQuestions()) // Get questions from local storage

  const handleAddQuestion = () => {
    if (!question.trim()) return

    const newQuestions = [...questions, { text: question }]
    setQuestions(newQuestions)
    saveQuestions(newQuestions)
    setQuestion('')
  }
}

export default AddQuestions
