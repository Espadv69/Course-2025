import { useState } from 'react'
import { saveQuestions, getQuestions } from '../utils/localStorage.js'

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

  const handleDeleteQuestion = (index) => {
    const updateQuestion = questions.filter((_, i) => {
      i !== index
    })
    setQuestions(updateQuestion)
    saveQuestions(updateQuestion)
  }

  return (
    <div>
      <h2>Add Questions</h2>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Write your question here..."
      />
      <button onClick={handleAddQuestion}>Add Question</button>

      <h3>Existing Questions</h3>
      <ul>
        {questions.map((q, index) => (
          <li key={index}>
            {q.text}
            <button onClick={() => handleDeleteQuestion(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AddQuestions
