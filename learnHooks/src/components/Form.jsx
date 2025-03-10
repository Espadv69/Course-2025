import { useEffect, useState } from 'react'

const Form = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [maxLen] = useState(10)
  const [minLen] = useState(3)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.length < minLen) {
      alert('Name is too short')
      return
    }

    if (age < 18) {
      alert('You must be 18 years old or older')
      return
    }

    alert(`Hello ${name}! You are ${age} years old`)
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
      className="bg-yellow-300 text-black p-4 w-full h-screen flex flex-col justify-center items-center gap-4"
    >
      <input
        type="text"
        className="p-2 border-2 border-black"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        maxLength={maxLen}
        minLength={minLen}
      />
      <input
        type="number"
        className="p-2 border-2 border-black"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        max={99}
        min={0}
      />
      <button className="p-2 max-w-[100px] border-2 rounded">Submit</button>
    </form>
  )
}

export default Form
