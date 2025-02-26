import { useState } from 'react'
import { saveQuestions, getQuestions } from '../utils/localStorage.js'

const predefinedQuestions = [
  'What it the capital of France?',
  'Who wrote "To Kill a Mockingbird"?',
  'What is 5 + 7?',
  'Name a programming language that starts with "P".',
  'What year did the first man land on the moon?',
]

const GenerateQuestions = () => {
  const [generateQuestion, setGenerateQuestion] = useState('')
  const [questions, setQuestions] = useState(getQuestions())

  const generateRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * predefinedQuestions.length)
    setGenerateQuestion(predefinedQuestions[randomIndex])
  }

  const saveGenerateQuestion = () => {
    if (!generateQuestion) return

    const newQuestion = [...questions, { text: generateQuestion }]
    setQuestions(newQuestion)
    saveQuestions(newQuestion)
    setGenerateQuestion('')
  }
}

export default GenerateQuestions
