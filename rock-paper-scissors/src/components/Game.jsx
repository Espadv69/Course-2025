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
    determineWinner(choice, randomChoice) // toDo
  }
}

export default Game
