import { useState, useEffect } from 'react'

const initialCards = ['🍎', '🍌', '🍒', '🍓', '🍑', '🍍', '🥭', '🥝']
const shuffleCards = [...initialCards, ...initialCards].sort(
  () => Math.random() - 0.5
)

const MemoryGame = () => {}

export default MemoryGame
