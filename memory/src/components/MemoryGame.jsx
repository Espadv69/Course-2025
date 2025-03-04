import { useState, useEffect } from 'react'

const initialCards = ['🍎', '🍌', '🍒', '🍓', '🍑', '🍍', '🥭', '🥝']
const shuffleCards = [...initialCards, ...initialCards].sort(
  () => Math.random() - 0.5
)
let timeId

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

  useEffect(() => {
    if (selectedCards.length === 2) {
      const [first, second] = selectedCards
      if (first.emoji === second.emoji) {
        setCards((prev) =>
          prev.map((card) =>
            card.emoji === first.emoji ? { ...card, matched: true } : card
          )
        )
        setMatches(matches + 1)
      } else {
        timeId = setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === first.id || card.id === second.id
                ? { ...card, flipped: false }
                : card
            )
          )
        }, 1000)
      }
      setSelectedCards([])
      return () => clearTimeout(timeId)
    }
  }, [selectedCards])
}

export default MemoryGame
