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
  const [generatedQuestion, setGeneratedQuestion] = useState('')
  const [questions, setQuestions] = useState(getQuestions())

  const generateRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * predefinedQuestions.length)
    setGeneratedQuestion(predefinedQuestions[randomIndex])
  }

  const saveGenerateQuestion = () => {
    if (!generatedQuestion) return

    const newQuestion = [...questions, { text: generatedQuestion }]
    setQuestions(newQuestion)
    saveQuestions(newQuestion)
    setGeneratedQuestion('')
  }

  return (
    <div>
      <h2>Generate Random Question</h2>
      <button onClick={generateRandomQuestion}>Generate Random Question</button>

      {generatedQuestion && (
        <div>
          <p>{generatedQuestion}</p>
          <button onClick={saveGenerateQuestion}>Save Question</button>
        </div>
      )}
    </div>
  )
}

export default GenerateQuestions
