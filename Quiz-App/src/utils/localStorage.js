export const saveQuestions = (questions) => {
  localStorage.setItem('questions', JSON.stringify(questions))
}

export const getQuestions = () => {
  return JSON.parse(localStorage.getItem('questions')) || []
}

export const saveAnswers = (answers) => {
  localStorage.setItem('answers', JSON.stringify(answers))
}

export const getAnswers = () => {
  return JSON.parse(localStorage.getItem('answers')) || []
}
