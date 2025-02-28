import { useState } from 'react'

const QUOTES = [
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon',
  },
  {
    text: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    text: 'Do what you can, with what you have, where yo are.',
    author: 'Theodore Roosevelt',
  },
]

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(QUOTES[0])

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length)
    setQuote(QUOTES[randomIndex])
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`)
    alert('Quote copied to clipboard!')
  }

  return (
    <div className="quotes">
      <h1>Random Quote Generator</h1>
      <blockquote>
        <p>"{quote.text}"</p>
        <footer>- {quote.author}</footer>
      </blockquote>
      <button onClick={getRandomQuote}>Generate Quote</button>
      <button onClick={copyToClipboard}>Copy to clipboard</button>
    </div>
  )
}

export default QuoteGenerator
