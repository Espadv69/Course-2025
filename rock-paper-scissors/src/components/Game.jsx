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

  return (
    <div className="w-full">
      <h1 className="text-white text-center bg-blue-400 lg:text-7xl md:text-5xl text-3xl font-bold mb-8">
        Rock Paper Scissors
      </h1>
      <div className="px-2.5 flex justify-center gap-1.5">
        {CHOICES.map((choice) => (
          <ChoiceButton key={choice} choice={choice} onClick={play} />
        ))}
      </div>
      {userChoice && (
        <Result
          userChoice={userChoice}
          computerChoice={computerChoice}
          result={result}
        />
      )}
    </div>
  )
}

export default Game
