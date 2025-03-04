import { useState, useEffect } from 'react'

const initialCards = ['🍎', '🍌', '🍒', '🍓', '🍑', '🍍', '🥭', '🥝']
const shuffleCards = [...initialCards, ...initialCards].sort(
  () => Math.random() - 0.5
)

const MemoryGame = () => {
  const [cards, setCards] = useState(
    shuffleCards.map((emoji, index) => ({
      id: index,
      emoji,
      flipped: false,
      matched: false,
    }))
  )
  const [selectedCards, setSelectedCards] = useState([])
  const [matches, setMatches] = useState(0)
}

export default MemoryGame
