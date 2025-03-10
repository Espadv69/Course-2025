import { useEffect, useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [maxLen] = useState(10)
  const [minLen] = useState(3)
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.length < minLen) {
      setError(`Name must be at least ${minLen} characters long`)
      return
    }

    if (age < 18) {
      setError('You must be at least 18 years old')
      return
    }

    alert(`Hello ${name}! You are ${age} years old`)
    setError('')
    setName('')
    setAge('')
  }

  useEffect(() => {
    if (age.length > 2) {
      setAge(age.slice(0, 2))
    }
  }, [age])

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-yellow-200 text-black p-4 w-full h-screen flex flex-col justify-center items-center gap-4"
    >
      <input
        type="text"
        className="p-2 border-2 border-black w-[300px]"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={maxLen}
        minLength={minLen}
      />
      <p>Max length: {maxLen}</p>
      <input
        type="number"
        className="p-2 border-2 border-black w-[300px]"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        max={99}
        min={0}
      />
      {error && <p className="text-red-500">{error}</p>}
      <button className="p-2 max-w-[100px] border-2 rounded">Submit</button>
    </form>
  )
}

export default Form
