import { useState } from 'react'
import ChoiceButton from './ChoiceButton'
import Result from './Result'

const CHOICES = ['Rock', 'Paper', 'Scissors']

const Game = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResult] = useState('')
}

export default Game
