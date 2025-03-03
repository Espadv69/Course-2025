import { useState } from 'react'
import ChoiceButton from './ChoiceButton'
import Result from './Result'

const CHOICES = ['Rock', 'Paper', 'Scissors']

const Game = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState('')

  const play = (choice) => {
    const randomChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)]
    setUserChoice(choice)
    setComputerChoice(randomChoice)
    determineWinner(choice, randomChoice)
  }

  const determineWinner = (user, computer) => {
    if (user === computer) {
      setResult("It's a tie!")
    } else if (
      (user === 'Rock' && computer === 'Scissors') ||
      (user === 'Paper' && computer === 'Rock') ||
      (user === 'Scissors' && computer === 'Paper')
    ) {
      setResult('You win!')
    } else {
      setResult('You Lose!')
    }
  }
}

export default Game
