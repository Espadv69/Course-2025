import { getQuestions, getAnswers } from '../utils/localStorage.js'

const ReviewAnswers = () => {
  const questions = getQuestions()
  const answers = getAnswers()

  return (
    <div>
      <h2>Review Answers</h2>

      {questions.length === 0 ? (
        <p>No questions available.</p>
      ) : (
        <ul>
          {questions.map((q, index) => (
            <li key={index}>
              <p>
                Question: <strong>{q.text}</strong>
              </p>
              <p>
                Answer:{' '}
                <strong>{answers[index] || 'No answer provided'}</strong>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ReviewAnswers
