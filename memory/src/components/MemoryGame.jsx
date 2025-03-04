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

  const handleCardClick = (card) => {
    if (!card.flipped && selectedCards.length < 2) {
      setCards((prev) =>
        prev.map((c) => (c.id === card.id ? { ...c, flipped: true } : c))
      )
      setSelectedCards([...selectedCards, card])
    }
  }

  const resetGame = () => {
    setCards(
      shuffleCards.map((emoji, index) => ({
        id: index,
        emoji,
        flipped: false,
        matched: false,
      }))
    )
    setMatches(0)
    setSelectedCards([])
  }

  return (
    <div className="text-center w-full">
      <h2 className="text-5xl font-bold">Memory Game</h2>
      <div className="grid grid-cols-4 justify-center gap-2 mt-4 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`size-20 text-3xl flex items-center justify-center bg-gray-300 rounded-xl cursor-pointer  ${
              card.flipped ? 'bg-white' : ''
            }`}
            onClick={() => handleCardClick(card)}
          >
            {card.flipped || card.matched ? card.emoji : '❓'}
          </div>
        ))}
      </div>
      {matches === initialCards.length && (
        <button onClick={resetGame}>Restart Game</button>
      )}
    </div>
  )
}

export default MemoryGame
